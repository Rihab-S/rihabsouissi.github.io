document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("animated-text");
    const phrases = [
        "I'm Rihab Souissi",
        "I'm a Dr.-Ing",
        "I'm a Machine Learning Researcher and developer",
        "I'm a Python Developer",
        "I'm a C++ Developer",
    ];
    let phraseIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (!isDeleting) {
            // Typing effect
            textElement.textContent = currentPhrase.substring(0, letterIndex + 1);
            letterIndex++;

            if (letterIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(typeEffect, 700); // Pause before deleting
                return;
            }
        } else {
            // Deleting effect
            textElement.textContent = currentPhrase.substring(0, letterIndex - 1);
            letterIndex--;

            if (letterIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase
            }
        }
        setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing speed
    }
    
    typeEffect();
});
