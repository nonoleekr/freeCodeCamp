const textInput = document.querySelector("#text-input");
const charCount = document.querySelector("#char-count");

const MAX = 50;

textInput.addEventListener("input", () => {
  // Trim extra input when >= 50
  if (textInput.value.length >= MAX) {
    textInput.value = textInput.value.slice(0, MAX);
  }

  let count = textInput.value.length;

  // Update counter text
  charCount.textContent = `Character Count: ${count}/50`;

  // Turn red exactly at 50
  if (count === MAX) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "black";
  }
});
