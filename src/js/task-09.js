const btnEl = document.querySelector('.change-color')
const textColorEl = document.querySelector('.color')
const body = document.querySelector('body')
console.dir(textColorEl)
btnEl.addEventListener('click', onChangeColor)
function onChangeColor() {
  const newColor = getRandomHexColor();
  console.log("background:", document.body.style.backgroundColor = newColor);
  textColorEl.textContent = newColor;
  console.log("text:", textColorEl.textContent)

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


