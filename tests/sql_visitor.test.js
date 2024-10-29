import {expect} from 'chai';
import {SQLParser} from '../sql_parser/sql_parser.js';
import {SQLVisitor} from '../sql_parser/sql_visitor.js';

describe('SQLVisitor', () => {
    let sqlParser;
    let sqlSelectVisitor;

    beforeEach(() => {
        sqlParser = new SQLParser();
        sqlSelectVisitor = new SQLVisitor();
    });

    it('should visit a basic SELECT query', () => {
        const query = "SELECT name, age FROM users WHERE age > 35 LIMIT 10";
        const parseTree = sqlParser.parse(query);

        // Check that the parse tree is created
        expect(parseTree).to.not.be.undefined;
        expect(parseTree.toStringTree()).to.include('SELECT');  // Ensure it contains 'select_stmt'
        console.log(sqlSelectVisitor.visit(parseTree));
    });


});