document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.slideshow-image');
  let currentIndex = 0;

  // Function to switch images
  function switchImage() {
    images[currentIndex].classList.remove('active'); // Hide current image
    currentIndex = (currentIndex + 1) % images.length; // Move to next image, cycle back to first if necessary
    images[currentIndex].classList.add('active'); // Show the new image
  }

  // Set interval to change image every 3 seconds
  setInterval(switchImage, 3000);
});
