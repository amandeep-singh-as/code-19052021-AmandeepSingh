module.exports = function (gender, height, weight) {
    this.gender = gender;
    this.height = height;
    this.weight = weight;
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
};
