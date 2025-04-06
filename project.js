document.addEventListener("DOMContentLoaded", function () {
  const slideShows = document.querySelectorAll('.slideshow-container');

  slideShows.forEach(container => {
    let index = 0;
    const images = container.querySelectorAll('.slideshow-image');

    // Make only the first image visible at start
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');

    setInterval(() => {
      // Remove active class from current image
      images[index].classList.remove('active');

      // Update index to next image
      index = (index + 1) % images.length;

      // Add active class to new image
      images[index].classList.add('active');
    }, 3000); // Change image every 3 seconds for smoother experience
  });
});
