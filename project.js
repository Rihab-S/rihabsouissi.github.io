<script>
  const slideShows = document.querySelectorAll('.slideshow-container');

  slideShows.forEach(container => {
    let index = 0;
    const images = container.querySelectorAll('.slideshow-container');
    images.forEach((img, i) => img.style.display = i === 0 ? 'block' : 'none');

    setInterval(() => {
      images[index].style.display = 'none';
      index = (index + 1) % images.length;
      images[index].style.display = 'block';
    }, 1000);
  });
</script>
