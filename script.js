function toggleTheme() {
    var body = document.querySelector('body');
    body.classList.toggle('dark-theme');
  
    var button = document.querySelector('#themeSwitchBtn');
    if (body.classList.contains('dark-theme')) {
      button.textContent = 'Switch to Light Theme';
    } else {
      button.textContent = 'Switch to Dark Theme';
    }
  }