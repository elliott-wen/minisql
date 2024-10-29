// Generated from SQLtiny.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by SQLtinyParser.

export default class SQLtinyVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by SQLtinyParser#parse.
	visitParse(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#error.
	visitError(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#sql_stmt_list.
	visitSql_stmt_list(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#sql_stmt.
	visitSql_stmt(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#create_index_stmt.
	visitCreate_index_stmt(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#create_table_stmt.
	visitCreate_table_stmt(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#delete_stmt.
	visitDelete_stmt(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#delete_stmt_limited.
	visitDelete_stmt_limited(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#drop_index_stmt.
	visitDrop_index_stmt(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#drop_table_stmt.
	visitDrop_table_stmt(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#insert_stmt.
	visitInsert_stmt(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#simple_select_stmt.
	visitSimple_select_stmt(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#select_stmt.
	visitSelect_stmt(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#select_or_values.
	visitSelect_or_values(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#update_stmt.
	visitUpdate_stmt(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#update_stmt_limited.
	visitUpdate_stmt_limited(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#column_def.
	visitColumn_def(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#type_name.
	visitType_name(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#column_constraint.
	visitColumn_constraint(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#conflict_clause.
	visitConflict_clause(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#expr.
	visitExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#foreign_key_clause.
	visitForeign_key_clause(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#raise_function.
	visitRaise_function(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#indexed_column.
	visitIndexed_column(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#table_constraint.
	visitTable_constraint(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#with_clause.
	visitWith_clause(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#qualified_table_name.
	visitQualified_table_name(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#ordering_term.
	visitOrdering_term(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#pragma_value.
	visitPragma_value(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#common_table_expression.
	visitCommon_table_expression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#result_column.
	visitResult_column(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#table_or_subquery.
	visitTable_or_subquery(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#join_clause.
	visitJoin_clause(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#join_operator.
	visitJoin_operator(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#join_constraint.
	visitJoin_constraint(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#select_core.
	visitSelect_core(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#compound_operator.
	visitCompound_operator(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#cte_table_name.
	visitCte_table_name(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#signed_number.
	visitSigned_number(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#literal_value.
	visitLiteral_value(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#unary_operator.
	visitUnary_operator(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#error_message.
	visitError_message(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#module_argument.
	visitModule_argument(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#column_alias.
	visitColumn_alias(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#keyword.
	visitKeyword(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#name.
	visitName(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#function_name.
	visitFunction_name(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#database_name.
	visitDatabase_name(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#table_name.
	visitTable_name(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#table_or_index_name.
	visitTable_or_index_name(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#new_table_name.
	visitNew_table_name(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#column_name.
	visitColumn_name(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#collation_name.
	visitCollation_name(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#foreign_table.
	visitForeign_table(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#index_name.
	visitIndex_name(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#trigger_name.
	visitTrigger_name(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#view_name.
	visitView_name(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#module_name.
	visitModule_name(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#pragma_name.
	visitPragma_name(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#savepoint_name.
	visitSavepoint_name(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#table_alias.
	visitTable_alias(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#transaction_name.
	visitTransaction_name(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SQLtinyParser#any_name.
	visitAny_name(ctx) {
	  return this.visitChildren(ctx);
	}



}