document.addEventListener("DOMContentLoaded", function () {
  const slideShows = document.querySelectorAll('.slideshow-container');

  slideShows.forEach(container => {
    let index = 0;
    const images = container.querySelectorAll('.slideshow-image');

    // Show the first image
    images.forEach((img, i) => {
      img.style.display = i === 0 ? 'block' : 'none';
    });

    // Rotate images every second
    setInterval(() => {
      images[index].style.display = 'none';
      index = (index + 1) % images.length;
      images[index].style.display = 'block';
    }, 1000);
  });
});
