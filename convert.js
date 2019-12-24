const csvjson = require("csvjson");
const fs = require('fs');

const opt = {
    delimiter: ',',
    quote: '"'
};

let fileData = fs.readFileSync('./employeessss666.csv', {encoding: 'utf8'});

let result = csvjson.toObject(fileData, opt);

const storeData = (result, path) => {
    try{
        fs.writeFileSync(path, JSON.stringify(result));
    }catch(err){
        console.error(err);
    }
}

storeData(result, './employees.json');  