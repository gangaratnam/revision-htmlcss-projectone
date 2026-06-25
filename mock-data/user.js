const mockUser = {
  name: "ganga",
  password: "ganga123",
};

const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");
toggle.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    toggle.textContent = "visibility_off";
  } else {
    password.type = "password";
    toggle.textContent = "visibility";
  }
});



const btn = document.getElementById("loginButton");
const loginForm = document.getElementById("loginForm");
const userNameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = userNameInput.value.trim();
  const passwordVal = passwordInput.value.trim();
  if (username === mockUser.name && passwordVal === mockUser.password) {
    localStorage.setItem("isAuthenticated", true);
    localStorage.setItem("user", JSON.stringify(mockUser));
    window.location.href = "./Main.html";
  } else {
    alert("Invalid username or password");
  }
});


