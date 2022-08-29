const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  const formData = {
    email,
    password,
  }

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }
  console.log(formData);
  event.currentTarget.reset();
}
