const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.trim().length !== 6) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
});
