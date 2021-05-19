const data = require('./data.json');
const person = require('./person');

let BMIData = [];

data.forEach((item, index) => {
    BMIData.push(new person(item["Gender"], item["HeightCm"], item["WeightKg"]));
});

console.table(BMIData);