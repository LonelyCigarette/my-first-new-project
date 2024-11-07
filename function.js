const themeSwitcher = document.getElementById('theme-switcher');

// Dark Mode Styles
function darkMode() {
    themeSwitcher.children[0].textContent = 'Dark Mode';
    themeSwitcher.children[1].classList.replace('bi-sun-fill', 'bi-moon-fill');
}

// Light Mode Styles
function lightMode() {
    themeSwitcher.children[0].textContent = 'Light Mode';
    themeSwitcher.children[1].classList.replace('bi-moon-fill', 'bi-sun-fill');
}

// Switch Theme
function switchTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (!currentTheme || currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// Event Listener
themeSwitcher.addEventListener('click', switchTheme);

const currentthemelocalstroage  = localStorage.getItem('theme');

if(currentthemelocalstroage){
    document.documentElement.setAttribute('data-theme', currentthemelocalstroage);
    if(currentthemelocalstroage === 'dark'){
        darkMode();
    }else{
        lightMode();
    }
}
