function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (emailInput.value.length > 3 && emailInput.value.includes("@") && emailInput.value.includes(".")) {
      emailError.textContent = "";
      return true;
    } else {
      emailError.textContent = "Make sure email is more than 3 characters and has @ and a .";
      return false;
    }
  }

  function validatePassword() {
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    if (passwordInput.value.length > 8) {
      passwordError.textContent = "";
      return true;
    } else {
      passwordError.textContent = "Make sure password is more than 8 characters.";
      return false;
    }
  }

  document.getElementById("email").addEventListener("input", function() {
    validateEmail();
    if (validateEmail() && validatePassword()) {
      document.getElementById("allGood").textContent = "All good to go!";
    } else {
      document.getElementById("allGood").textContent = "";
    }
  });

  document.getElementById("password").addEventListener("input", function() {
    validatePassword();
    if (validateEmail() && validatePassword()) {
      document.getElementById("allGood").textContent = "All good to go!";
    } else {
      document.getElementById("allGood").textContent = "";
    }
  });

  document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const confirmation = confirm("Are you sure you want to sign up?");
    if (confirmation) {
      alert("Successful signup!");
    } else {
      // Redirecting to the same page and clearing input values
      window.location.href = window.location.href;
      document.getElementById("signupForm").reset();
    }
  });