import antlr4 from 'antlr4';
import SQLtinyLexer from './SQLtinyLexer.js';
import SQLtinyParser from './SQLtinyParser.js';

export class SQLParser {
    /**
     * Parses a SQL query using the ANTLR-generated parser.
     * @param {string} query - The SQL query string.
     * @return {Object} - The parsed query structure (abstract syntax tree).
     */
    parse(query) {
        // Create an input stream from the query
        const inputStream = new antlr4.InputStream(query);

        // Create a lexer that processes the input stream
        const lexer = new SQLtinyLexer(inputStream);
        const tokenStream = new antlr4.CommonTokenStream(lexer);

        // Create a parser that processes the token stream
        const parser = new SQLtinyParser(tokenStream);

        // Invoke the root rule of the grammar (sql_stmt)
        const tree = parser.sql_stmt();

        // For now, we simply return the parse tree
        return tree;
    }
}

