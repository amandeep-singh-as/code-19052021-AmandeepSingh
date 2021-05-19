const data = require('./data.json');
const person = require('./person');

let BMIData = [];

data.forEach((item, index) => {
    BMIData.push(new person(item));
});

console.table(BMIData);