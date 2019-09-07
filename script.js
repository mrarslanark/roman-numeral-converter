function convertToRoman() {
  var inputVal = document.querySelector("#value").value;
  var paragraph = document.querySelector("#result");

  console.log(inputVal);
  if (inputVal == 0) {
    paragraph.innerHTML = "Nulla";
  } else if (inputVal < 0 || inputVal.match(/^\d+\.\d{0,2}$/)) {
    paragraph.innerHTML = "Invalid Number";
  } else if (inputVal > 10000) {
    paragraph.innerHTML = "Kindly count less than 10,000";
  } else {
    paragraph.innerHTML = convertToRomanNumerals(inputVal);
  }
}

function convertToRomanNumerals(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
}
