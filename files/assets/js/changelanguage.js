const languageSwitcher = document.querySelector('.mod_changelanguage');
const closeButton = document.querySelector('.language-switcher-close');

const openLanguageSwitcher = (event) => {
  event.preventDefault();
  languageSwitcher.style.top = "0%";
}

closeButton.addEventListener('click', () => {
  languageSwitcher.style.top = "-100%";
})
