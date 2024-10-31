// Create a custom visitor extending the generated visitor
import SQLtinyVisitor from "../sql_parser/SQLtinyVisitor.js";

export class ExecutionPlanVisitor extends SQLtinyVisitor {
    constructor() {
        super();
        this.executionPlan = [];
    }

    /**
     * @typedef {import("./teamMember").TeamMember} TeamMember
     * @param {Array<TeamMember>} teamMembers - a list of team members
     * @returns {Array<ExecutionPlan>}
     */
    // Visit the simple_select_stmt rule in the grammar
    visitSimple_select_stmt(ctx) {

        // Visit the select_core rule
        this.visit(ctx.select_core());

        // Handle ORDER BY (handled last, right before the LIMIT)
        if (ctx.K_ORDER() && ctx.K_BY()) {
            let orderingTerms = ctx.ordering_term().map(orderCtx => orderCtx.getText());
            this.executionPlan.push({
                operation: "Sort",
                orderBy: orderingTerms
            });
        }

        // Handle LIMIT clause (final operation)
        if (ctx.K_LIMIT()) {
            let limitExpr = ctx.expr(0);  // First expr corresponds to LIMIT
            let limitValue = limitExpr ? limitExpr.getText() : null;
            let plan = { operation: "Limit", limit: limitValue };

            // Handle OFFSET or second limit
            if (ctx.expr(1)) {
                let offsetExpr = ctx.expr(1);
                plan.offset = offsetExpr ? offsetExpr.getText() : null;
            }

            this.executionPlan.push(plan);
        }

        return this.executionPlan;
    }

    // Visit the select_core rule in the grammar
    visitSelect_core(ctx) {
        // Correct logical order begins with FROM, JOIN, WHERE

        // Handle the FROM clause first (scanning tables or subqueries)
        if (ctx.K_FROM()) {
            ctx.table_or_subquery().forEach(tblCtx => {
                this.visit(tblCtx);
            });

            if (ctx.join_clause()) {
                this.visit(ctx.join_clause());
            }
        }

        // Handle the WHERE clause (applied after fetching data from tables)
        if (ctx.K_WHERE()) {
            let whereExpr = ctx.expr(0) ? ctx.expr(0).getText() : null;
            this.executionPlan.push({
                operation: "Filter",
                condition: whereExpr
            });
        }

        // Handle GROUP BY (after WHERE, for grouping results)
        if (ctx.K_GROUP() && ctx.K_BY()) {
            let groupByExprs = ctx.expr().slice(0, ctx.expr().length).map(exprCtx => exprCtx.getText());
            this.executionPlan.push({
                operation: "Group",
                groupBy: groupByExprs
            });

            // Handle HAVING clause (after grouping)
            if (ctx.K_HAVING()) {
                let havingExpr = ctx.expr(ctx.expr().length - 1) ? ctx.expr(ctx.expr().length - 1).getText() : null;
                this.executionPlan.push({
                    operation: "Having",
                    condition: havingExpr
                });
            }
        }

        // After WHERE, GROUP BY, and HAVING, we handle SELECT (Projection)
        let columns = ctx.result_column().map(colCtx => colCtx.getText());
        this.executionPlan.push({
            operation: "Projection",
            columns: columns
        });

        // Handle DISTINCT (if needed, after projection)
        if (ctx.K_DISTINCT()) {
            this.executionPlan.push({ operation: "Distinct" });
        }

        // Handle VALUES clause if present (usually for INSERT statements)
        if (ctx.K_VALUES()) {
            let valuesList = ctx.expr().map(exprCtx => exprCtx.getText());
            this.executionPlan.push({
                operation: "Values",
                values: valuesList
            });
        }

        return null;
    }

    // Visit the table_or_subquery rule (handle table scans or subqueries)
    visitTable_or_subquery(ctx) {
        let plan = {};

        // Check for a direct table reference
        if (ctx.table_name()) {
            plan.operation = "Table Scan";
            plan.table = ctx.table_name().getText();

            // Handle alias if present
            if (ctx.table_alias()) {
                plan.alias = ctx.table_alias().getText();
            }

            this.executionPlan.push(plan);
        }

        // Handle subqueries wrapped in parentheses
        if (ctx.simple_select_stmt()) {
            let subqueryPlan = new ExecutionPlanVisitor();  // Create a new visitor for the subquery
            let subqueryResult = subqueryPlan.visit(ctx.simple_select_stmt());

            this.executionPlan.push({
                operation: "Subquery",
                plan: subqueryResult
            });
        }

        // Handle nested table_or_subquery
        if (ctx.table_or_subquery()) {
            ctx.table_or_subquery().forEach(subqueryCtx => {
                this.visit(subqueryCtx);
            });
        }

        return null;
    }

    // Visit the join_clause rule (handling joins between tables or subqueries)
    visitJoin_clause(ctx) {
        for (let i = 0; i < ctx.table_or_subquery().length; i++) {
            let joinPlan = {
                operation: "Join",
                type: ctx.join_operator(i).getText(),
                table: ctx.table_or_subquery(i + 1).getText()
            };

            // Add the join condition (ON/USING clause)
            if (ctx.join_constraint(i)) {
                joinPlan.on = ctx.join_constraint(i).getText();
            }

            this.executionPlan.push(joinPlan);
        }

        return null;
    }

}