const portraitButton = document.querySelector('.portrait-flip');

portraitButton.addEventListener('click', () => {
  const flipped = portraitButton.getAttribute('aria-pressed') === 'true';
  portraitButton.setAttribute('aria-pressed', String(!flipped));
});

portraitButton.disabled = false;
portraitButton.querySelector('.portrait-back').hidden = false;
