const calculateBtn = document.querySelector('#calculate');
const bmiResult = document.querySelector('#result');
const suggest = document.querySelector('#suggest');

function bmiCalc_xx(height, weight) {
  return weight / ((height / 100) * (height / 100));
}

function bmi_normal_low(height) {
  return 18.5 * ((height / 100) * (height / 100));
}

function bmi_normal_high(height) {
  return 24 * ((height / 100) * (height / 100));
}

calculateBtn.addEventListener('click', function () {
  const heightInput = document.querySelector('#height').value;
  const weightInput = document.querySelector('#weight').value;

  if (heightInput && weightInput) {
    const height = parseFloat(heightInput);
    const weight = parseFloat(weightInput);

    const bmi = bmiCalc_xx(height, weight);
    bmiResult.textContent = `Your BMI is: ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
      suggest.textContent = '太輕.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      suggest.textContent = '正常.';
    } else {
      suggest.textContent = '過重.';
    }
  }
});
