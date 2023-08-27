
var image = document.getElementById('hoverImage');
var originalSrc = image.src;
var hoverSrc = 'hover-image-url.jpg'; 
image.addEventListener('mouseover', function() {
  image.src = hoverSrc;
});
image.addEventListener('mouseout', function() {
  image.src = originalSrc;
});
