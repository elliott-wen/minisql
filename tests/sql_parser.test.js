import {expect} from 'chai';
import {SQLParser} from '../sql_parser/sql_parser.js';

describe('SQLParser', () => {
    let sqlParser;

    beforeEach(() => {
        sqlParser = new SQLParser();
    });

    it('should parse a basic SELECT query', () => {
        const query = "SELECT name, age FROM users WHERE age > 30;";
        const parseTree = sqlParser.parse(query);

        // Check that the parse tree is created
        expect(parseTree).to.not.be.undefined;
        expect(parseTree.toStringTree()).to.include('SELECT');  // Ensure it contains 'select_stmt'
    });

    it('should parse an UPDATE query', () => {
        const query = "UPDATE users SET age = 25 WHERE name = 'John';";
        const parseTree = sqlParser.parse(query);

        // Check for update_stmt in the parse tree
        expect(parseTree).to.not.be.undefined;
        expect(parseTree.toStringTree()).to.include('UPDATE');
    });

    it('should parse a DELETE query', () => {
        const query = "DELETE FROM users WHERE age < 20;";
        const parseTree = sqlParser.parse(query);

        // Check for delete_stmt in the parse tree
        expect(parseTree).to.not.be.undefined;
        expect(parseTree.toStringTree()).to.include('DELETE');
    });

    it('should parse a CREATE TABLE query', () => {
        const query = "CREATE TABLE users (id INT, name VARCHAR);";
        const parseTree = sqlParser.parse(query);

        // Check for create_table_stmt in the parse tree
        expect(parseTree).to.not.be.undefined;
        expect(parseTree.toStringTree()).to.include('CREATE');
    });
});