const data = require('./data.json');

function person(d) {
    this.gender = d["Gender"];
    this.height = d["HeightCm"];
    this.weight = d["WeightKg"];
    this.BMI = parseFloat((this.weight * 100 / this.height).toFixed(1));


    if(this.BMI <= 18.4) {
        this.Findings = "Malnutrition";
    } else if(this.BMI >= 18.5 && this.BMI <= 24.9) {
        this.Findings = "Low";
    } else if(this.BMI >= 25 && this.BMI <= 29.9) {
        this.Findings = "Enhanced";
    } else if(this.BMI >= 30 && this.BMI <= 34.9) {
        this.Findings = "Medium";
    } else if(this.BMI >= 35 && this.BMI <= 39.9 ){
        this.Findings = "High";
    } else {
        this.Findings = "Very High";
    }
}



let bmi = []
for(var i =0; i < data.length; i++) {
    d = data[i]
    bmi.push(new person(d));
}

console.table(bmi);