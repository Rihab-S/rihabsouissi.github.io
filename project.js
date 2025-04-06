document.addEventListener("DOMContentLoaded", function () {
  const slideShows = document.querySelectorAll('.slideshow-container');

  slideShows.forEach(container => {
    let index = 0;
    const images = container.querySelectorAll('.slideshow-image');

    // Initially hide all images
    images.forEach(image => {
      image.classList.remove('active');
    });

    // Make the first image visible
    images[index].classList.add('active');
    console.log('Active image: ', images[index]); // Log the active image

    // Change the images every 1 second
    setInterval(() => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length; // Loop back to the first image when reaching the end
      images[index].classList.add('active');
      console.log('Active image: ', images[index]); // Log the active image
    }, 1000); // Change image every 1 second
  });
});
