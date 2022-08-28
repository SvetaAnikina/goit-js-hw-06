let counterValue = 0;
const decButtonEl = document.querySelector('button[data-action="decrement"]');
const incButtonEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

const increaseValue = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

const decreaseValue = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

decButtonEl.addEventListener("click", decreaseValue);
incButtonEl.addEventListener("click", increaseValue);
