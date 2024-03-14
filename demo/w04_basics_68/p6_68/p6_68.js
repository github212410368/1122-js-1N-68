import { bmi_data } from './data_68.js';

let bmi_data_68 = bmi_data;

console.log('bmi_data', bmi_data_68);

function bmiCalc_68(height, weight) {
  return weight / (height * height);
}

function bmi_normal_low(height) {
  return 18.5 * height * height;
}

function bmi_normal_high(height) {
  return 24 * height * height;
}

function bmiCalcResult_68(height, weight) {
  let bmi = bmiCalc_68(height, weight).toFixed(2);
  console.log(`For (h/w)=(${height},${weight}), the BMI = ${bmi}`);
}

function bmiDataCalc(data) {
  data.forEach(function (item) {
    bmiCalcResult_68(item.height, item.weight);
  });
}

bmiDataCalc(bmi_data_68);

function bmiCalcSuggestion(height, weight) {
  let bmi = bmiCalc_68(height, weight).toFixed(2);
  if (bmi < 18.5) {
    let normal_low = bmi_normal_low(height);
    console.log(
      `For (h/w)=(${height},${weight}), the BMI = ${bmi} which is ${(
        normal_low - weight
      ).toFixed(2)} kg lower than normal`
    );
  } else if (bmi < 24) {
    console.log(
      `For (h/w)=(${height},${weight}), the BMI = ${bmi} which is normal.`
    );
  } else {
    let normal_high = bmi_normal_high(height);
    console.log(
      `For (h/w)=(${height},${weight}), the BMI = ${bmi} which is ${(
        weight - normal_high
      ).toFixed(2)} kg higher than normal`
    );
  }
}

function bmiDataCalcSuggestion(data) {
  data.forEach(function (item) {
    bmiCalcSuggestion(item.height, item.weight);
  });
}

bmiDataCalcSuggestion(bmi_data_68);
