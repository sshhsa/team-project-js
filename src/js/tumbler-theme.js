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
<<<<<<< Updated upstream
      pageStyle.classList.add('darkMode')
    }
    else {
=======
      console.log('hello')
      pageStyle.classList.add('darkMode')
    }
    else {
        console.log('hello>2')
>>>>>>> Stashed changes
        pageStyle.classList.remove('darkMode')
    }
  } catch (err) { }
}

<<<<<<< Updated upstream
addDarkMode()
=======
addDarkMode()



>>>>>>> Stashed changes
