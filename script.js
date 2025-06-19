function register() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    showMessage("Please enter both fields.");
    return;
  }

  if (localStorage.getItem(username)) {
    showMessage("User already exists!");
  } else {
    const saveUser = confirm("Do you want to save your credentials?");
    if (saveUser) {
      localStorage.setItem(username, password);
      alert("User registered and saved successfully!");
    } else {
      alert("User registered, but not saved.");
    }
    showMessage("Registration complete.");
  }
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "dashboard.html";
  } else {
    showMessage("Invalid username or password.");
  }
}

function showMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
  const btn = document.getElementById("toggleBtn");
  btn.textContent = document.body.classList.contains("light-mode")
    ? "🌑 Toggle Theme"
    : "🌙 Toggle Theme";
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    login();
  }
}
