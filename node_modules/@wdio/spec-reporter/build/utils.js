"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormattedRows = exports.printTable = exports.buildTableData = void 0;

var _easyTable = _interopRequireDefault(require("easy-table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SEPARATOR = '│';

const buildTableData = rows => rows.map(row => {
  const tableRow = {};
  [...row.cells, ''].forEach((cell, idx) => {
    tableRow[idx] = (idx === 0 ? `${SEPARATOR} ` : '') + cell;
  });
  return tableRow;
});

exports.buildTableData = buildTableData;

const printTable = data => _easyTable.default.print(data, null, table => {
  table.separator = ` ${SEPARATOR} `;
  return table.print();
});

exports.printTable = printTable;

const getFormattedRows = (table, testIndent) => table.split('\n').filter(Boolean).map(line => `${testIndent}  ${line}`.trimRight());

exports.getFormattedRows = getFormattedRows;