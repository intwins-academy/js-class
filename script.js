const upButtonElement = document.querySelector("#up-button");
const downButtonElement = document.querySelector("#down-button");
const leftButtonElement = document.querySelector("#left-button");
const rightButtonElement = document.querySelector("#right-button");

const boxElement = document.querySelector("#box");

// Type

upButtonElement.addEventListener("click", function () {
  const position = boxElement.getBoundingClientRect();
  boxElement.style.top = `${position.top - 10}px`;
});

downButtonElement.addEventListener("click", function () {
  // top +
  const postionTopCss = getComputedStyle(boxElement).top;
  const postionTop = Number(postionTopCss.slice(0, postionTopCss.length - 2));
  boxElement.style.top = `${postionTop + 10}px`;
});

leftButtonElement.addEventListener("click", function () {
  // left -
  const position = boxElement.getBoundingClientRect();
  boxElement.style.left = `${position.left - 10}px`;
});

rightButtonElement.addEventListener("click", function () {
  // left +
  const postion = boxElement.getBoundingClientRect();
  boxElement.style.left = `${postion.left + 10}px`;
});
