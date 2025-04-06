document.addEventListener("DOMContentLoaded", function () {
  const slideShows = document.querySelectorAll('.slideshow-container');

  slideShows.forEach(container => {
    let index = 0;
    const images = container.querySelectorAll('.slideshow-image');

    // Make the first image visible
    images[index].classList.add('active');

    setInterval(() => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }, 1000);
  });
});
