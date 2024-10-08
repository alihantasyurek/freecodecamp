const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

check.addEventListener("click", () => {
  if (!input.value) {
    alert("Please provide a phone number");
  } else {
    isValid(input.value)
      ? (result.innerText = `Valid US number: ${input.value}`)
      : (result.innerText = `Invalid US number: ${input.value}`);
  }
});

clear.addEventListener("click", () => {
  if (result.innerText) {
    result.innerText = "";
  }
});

function isValid(str) {
  const regex = /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  return regex.test(str);
}
