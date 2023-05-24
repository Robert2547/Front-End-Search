function toggleTheme() {
  var body = document.body;
  body.classList.toggle("dark-theme");

  var themeToggleButton = document.getElementById("themeSwitchBtn");

  if (body.classList.contains("dark-theme")) {
    body.style.backgroundColor = "#333";
    body.style.color = "#fff";
    themeToggleButton.textContent = "Toggle Light Theme";
  } else {
    body.style.backgroundColor = "#fff";
    body.style.color = "#333";
    themeToggleButton.textContent = "Toggle Dark Theme";
  }
}