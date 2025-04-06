document.addEventListener('DOMContentLoaded', function () {
  const image = document.querySelector('.slideshow-image');

  // Rotate the image when clicked
  image.addEventListener('click', function () {
    // Toggle between rotating or resetting the rotation
    if (image.style.transform === 'rotateY(180deg)') {
      image.style.transform = 'rotateY(0deg)';
    } else {
      image.style.transform = 'rotateY(180deg)';
    }
  });
});
