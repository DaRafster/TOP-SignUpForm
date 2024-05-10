const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

inputs.forEach((input) => {
  input.addEventListener(
    "invalid",
    (event) => {
      input.classList.add("error");
      const errorMessage = input.parentNode.querySelector(".errorMsg");
      errorMessage.style.opacity = "1";
    },
    false
  );
});

form.addEventListener("submit", (event) => {
  inputs.forEach((input) => {
    if (input.checkValidity()) {
      input.classList.remove("error");
      const errorMessage = input.parentNode.querySelector(".errorMsg");
      errorMessage.style.opacity = "0";
    }
  });

  if (passwordInput.value !== confirmPassword.value) {
    const errorMessage = passwordInput.parentNode.querySelector(".errorMsg");
    passwordInput.classList.add("error");
    confirmPassword.classList.add("error");
    errorMessage.style.opacity = "1";
    event.preventDefault();
  }
});
