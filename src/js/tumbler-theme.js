const toggleSwitch = document.querySelector('#toggle');
const pageStyle = document.querySelector('#Mode');



toggleSwitch.addEventListener('change', (e) => {
  e.preventDefault();
  if (toggleSwitch.checked){
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.removeItem('theme');
  }
  
  addDarkMode()
});

function addDarkMode() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      toggleSwitch.checked = true;
      pageStyle.classList.add('darkMode')
    }
    else {
        pageStyle.classList.remove('darkMode')
    }
  } catch (err) { }
}

addDarkMode()