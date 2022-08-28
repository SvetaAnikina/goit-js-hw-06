function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let defaultBoxWidth = 30;
let quantity = 0;

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");

    if (i === 0) {
      box.style.width = `${defaultBoxWidth}px`;
      box.style.height = `${defaultBoxWidth}px`;
    } else {
      defaultBoxWidth += 10;
      box.style.width = `${defaultBoxWidth}px`;
      box.style.height = `${defaultBoxWidth}px`;
    }

    box.style.backgroundColor = getRandomHexColor();
    boxesEl.appendChild(box);
  }
  defaultBoxWidth = 30;
};

const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");
const createButton = document.querySelector("button[data-create]");
const removeButton = document.querySelector("button[data-destroy]");

inputEl.addEventListener("change", (event) => {
  quantity = event.currentTarget.value;
});

createButton.addEventListener("click", () => {
  createBoxes(quantity);
});

removeButton.addEventListener("click", () => {
  boxesEl.innerHTML = "";
});
