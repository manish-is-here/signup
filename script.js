document.getElementById("email").addEventListener("input", function() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (emailInput.value.length > 3 && emailInput.value.includes("@") && emailInput.value.includes(".")) {
      emailError.textContent = "good to go!";
      emailError.classList.remove("error");
      emailError.classList.add("success");
    } else {
      emailError.textContent = "Make sure email is more than 3 characters and has @ and a .";
      emailError.classList.remove("success");
      emailError.classList.add("error");
    }
  });

  document.getElementById("password").addEventListener("input", function() {
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    if (passwordInput.value.length > 8) {
      passwordError.textContent = "All good to go!";
      passwordError.classList.remove("error");
      passwordError.classList.add("success");
    } else {
      passwordError.textContent = "Make sure password is more than 8 characters.";
      passwordError.classList.remove("success");
      passwordError.classList.add("error");
    }
  });

 