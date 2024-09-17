const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const showResult = document.querySelector("#result");

checkBtn.addEventListener("click", () => {
  if (textInput.value === "") {
    alert("Please input a value");
  } else {
    const result = checkPalindrome(textInput.value);
    if (result) {
      console.log("hi>", textInput.value);
      showResult.innerText = `${textInput.value} is a palindrome`;
    } else {
      showResult.innerText = `${textInput.value} is not a palindrome`;
    }
  }
});

function checkPalindrome(input) {
  const cleanInput = input.replace(/[^\da-z]/gi, "").toLowerCase();
  let len = cleanInput.length - 1;
  for (let i = 0; len !== i; i++) {
    if (cleanInput[i] !== cleanInput[len]) return false;
    len--;
  }
  return true;
}
