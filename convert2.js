const csvToJson = require('convert-csv-to-json');

const csvFile = './employeessss666.csv';
const jsonFile = 'employees.json';

csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(csvFile,jsonFile);