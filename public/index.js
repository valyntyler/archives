const h1 = document.querySelector("h1");
const text = h1.innerText;
let even = true;
let index = 0;

const writeText = setInterval(() => {
  h1.innerText = text.substring(0, index);
  index++;
  if (h1.innerText.length == text.length) {
    clearInterval(writeText);
    return;
  }
}, 40);

setInterval(() => {
  if (even && h1.innerText.length != text.length) {
    return;
  }

  if (even) {
    h1.innerText = text.substring(0, text.length - 1);
  } else {
    h1.innerText = text;
  }
  even = !even;
}, 500);
