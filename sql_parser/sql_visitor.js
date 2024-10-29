import SQLtinyVisitor from "./SQLtinyVisitor.js";

export class SQLVisitor extends SQLtinyVisitor {

    // Visit the simple_select_stmt rule in the grammar
    visitSimple_select_stmt(ctx) {
        console.log("Visiting SIMPLE SELECT statement!");

        // Handle the WITH clause if present
        if (ctx.K_WITH()) {
            console.log("WITH clause found!");

            // Check if it's a recursive WITH clause
            if (ctx.K_RECURSIVE()) {
                console.log("WITH RECURSIVE clause found!");
            }

            // Visit each common table expression in the WITH clause
            ctx.common_table_expression().forEach(cteCtx => {
                this.visit(cteCtx);
            });
        }

        // Visit the select_core rule
        this.visit(ctx.select_core());

        // Check if there is an ORDER BY clause
        if (ctx.K_ORDER() && ctx.K_BY()) {
            console.log("ORDER BY clause found!");
            let orderingTerms = ctx.ordering_term().map(orderCtx => orderCtx.getText());
            console.log("Ordering Terms: ", orderingTerms);
        }

        // Check if there is a LIMIT clause
        if (ctx.K_LIMIT()) {
            console.log("LIMIT clause found!");

            // Extract the LIMIT value (first expr after LIMIT)
            let limitValue = ctx.expr(0).getText();  // First expr corresponds to LIMIT
            console.log("LIMIT: ", limitValue);

            // Check if there is an OFFSET or a second LIMIT value
            if (ctx.expr(1)) {
                let offsetOrSecondLimit = ctx.expr(1).getText();
                if (ctx.K_OFFSET()) {
                    console.log("OFFSET: ", offsetOrSecondLimit);  // OFFSET syntax
                } else {
                    console.log("Second LIMIT Value (comma syntax): ", offsetOrSecondLimit);  // Comma syntax
                }
            }
        }

        return null;
    }

    // Visit the select_core rule in the grammar
    visitSelect_core(ctx) {
        console.log("Visiting SELECT CORE!");

        // Handle SELECT DISTINCT or ALL
        if (ctx.K_DISTINCT()) {
            console.log("DISTINCT found!");
        } else if (ctx.K_ALL()) {
            console.log("ALL found!");
        }

        // Extract the selected columns
        let columns = ctx.result_column().map(colCtx => colCtx.getText());
        console.log("Selected Columns: ", columns);

        // Handle the FROM clause
        if (ctx.K_FROM()) {
            console.log("FROM clause found!");

            // Check for tables or subqueries
            if (ctx.table_or_subquery().length > 0) {
                ctx.table_or_subquery().forEach(tblCtx => {
                    this.visit(tblCtx);
                });
            }

            // Check if there's a join_clause (alternatively to tables)
            if (ctx.join_clause()) {
                console.log("JOIN Clause Found");
                this.visit(ctx.join_clause());
            }
        }

        // Handle the WHERE clause
        if (ctx.K_WHERE()) {
            console.log("WHERE clause found!");
            let whereExpr = ctx.expr();
            console.log("WHERE Expression: ", whereExpr);
        }

        // Handle GROUP BY clause
        if (ctx.K_GROUP() && ctx.K_BY()) {
            console.log("GROUP BY clause found!");
            let groupByExprs = ctx.expr().map(exprCtx => exprCtx.getText());
            console.log("Group By Expressions: ", groupByExprs);

            // Handle HAVING clause (optional)
            if (ctx.K_HAVING()) {
                let havingExpr = ctx.expr().getText();
                console.log("HAVING Expression: ", havingExpr);
            }
        }

        return null;
    }

    // Visit the table_or_subquery rule
    visitTable_or_subquery(ctx) {
        console.log("Visiting TABLE OR SUBQUERY!");

        // Check for a database name and table name
        if (ctx.database_name()) {
            let databaseName = ctx.database_name().getText();
            console.log("Database Name: ", databaseName);
        }

        if (ctx.table_name()) {
            let tableName = ctx.table_name().getText();
            console.log("Table Name: ", tableName);
        }

        // Handle alias if present
        if (ctx.table_alias()) {
            let tableAlias = ctx.table_alias().getText();
            console.log("Table Alias: ", tableAlias);
        }

        // Handle indexed by clause or not indexed
        if (ctx.K_INDEXED() && ctx.K_BY()) {
            let indexName = ctx.index_name().getText();
            console.log("Indexed By: ", indexName);
        } else if (ctx.K_NOT() && ctx.K_INDEXED()) {
            console.log("Table is NOT INDEXED.");
        }

        // Handle nested subqueries or join clauses
        if (ctx.table_or_subquery()) {
            console.log("Nested table_or_subquery found.");
            ctx.table_or_subquery().forEach(subqueryCtx => {
                this.visit(subqueryCtx);
            });
        }

        if (ctx.join_clause()) {
            console.log("Nested JOIN clause found.");
            this.visit(ctx.join_clause());
        }

        // Handle subqueries wrapped in parentheses
        if (ctx.select_stmt()) {
            console.log("Subquery (SELECT statement) found.");
            this.visit(ctx.select_stmt());
        }

        return null;
    }

    // Visit the join_clause rule
    visitJoin_clause(ctx) {
        console.log("Visiting JOIN CLAUSE!");

        // Visit each table_or_subquery involved in the join
        this.visit(ctx.table_or_subquery(0));  // First table
        for (let i = 1; i < ctx.table_or_subquery().length; i++) {
            let joinOperator = ctx.join_operator(i - 1).getText();
            console.log("Join Operator: ", joinOperator);

            this.visit(ctx.table_or_subquery(i));  // Joined table

            // Handle join constraints if present
            if (ctx.join_constraint(i - 1)) {
                let joinConstraint = ctx.join_constraint(i - 1).getText();
                console.log("Join Constraint: ", joinConstraint);
            }
        }

        return null;
    }
}