console.log('Happy developing ✨')
import {SQLParser} from './sql_parser/sql_parser.js';
const sqlParser = new SQLParser();
const query = "UPDATE users SET age = 25 WHERE name = 'John';";
const parseTree = sqlParser.parse(query);
console.log(parseTree.toStringTree())