const themeSwitch = document.querySelector('#chk');
const body = document.querySelector('body');

themeSwitch.addEventListener('change', e => {
  e.preventDefault();
  if (themeSwitch.checked) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }

  addDarkMode();
});

function addDarkMode() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      themeSwitch.checked = true;
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  } catch (err) {}
}

addDarkMode();
