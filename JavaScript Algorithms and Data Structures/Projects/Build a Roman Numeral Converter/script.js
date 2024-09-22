const showOutput = document.getElementById("output");
const button = document.getElementById("convert-btn");
const input = document.getElementById("number");

function convertRoman(num) {
  const ref = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  const res = [];
  ref.forEach((arr, index, array) => {
    while (num >= arr[1]) {
      res.push(arr[0]);
      num -= arr[1];
    }
  });
  return res.join("");
}

function isValid(str) {
  let errMsg = "";
  const int = parseInt(str);
  if (str === "") {
    errMsg = "Please enter a valid number";
  } else if (int < 0) {
    errMsg = "Please enter a number greater than or equal to 1";
  } else if (int >= 4000) {
    errMsg = "Please enter a number less than or equal to 3999";
  } else {
    return true;
  }
  showOutput.textContent = errMsg;
  return false;
}

button.addEventListener("click", () => {
  if (isValid(input.value)) {
    showOutput.textContent = convertRoman(input.value);
  }
});
