const languageLink = document.querySelector('.language-switch');
const translatedPage = languageLink.getAttribute('href');

function updateLanguageLink() {
  languageLink.setAttribute('href', translatedPage + window.location.hash);
}

window.addEventListener('hashchange', updateLanguageLink);
window.addEventListener('pageshow', updateLanguageLink);
updateLanguageLink();
