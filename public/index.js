let animateWriting = true;
let showUnderscore = true;

function writingAnimation(element, delay) {
  const text = element.innerText;
  let index = 0;

  const interval = setInterval(() => {
    const underscore = showUnderscore ? "_" : "";
    const substring = text.substring(0, index);
    const newText = substring + underscore;

    if (index == text.length) {
      clearInterval(interval);
      animateWriting = false;
    }

    element.innerText = newText;
    index++;
  }, delay);
}

function blinkingAnimation(element, delay) {
  const text = element.innerText;

  setInterval(() => {
    if (animateWriting) {
      return;
    }
    showUnderscore = !showUnderscore;

    const underscore = showUnderscore ? "_" : "";
    const newText = text + underscore;

    element.innerText = newText;
  }, delay);
}

const h1 = document.querySelector("h1");

writingAnimation(h1, 50);
blinkingAnimation(h1, 500);

// setInterval(() => {
//   if (even && h1.innerText.length != text.length) {
//     return;
//   }
//
//   if (even) {
//     h1.innerText = text.substring(0, text.length - 1);
//   } else {
//     h1.innerText = text;
//   }
//   even = !even;
// }, 500);
