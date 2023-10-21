// login
const loginFormHandler = async (event) => {
  event.preventDefault();

  // takes data from forms
  const emailInput = document.querySelector("#email-login").value.trim();
  const passwordInput = document.querySelector("#password-login").value.trim();

  if (emailInput && passwordInput) {
    // sends email and password to server
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ emailInput, passwordInput }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

// sign up
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
