var container = document.querySelector('#container');

// initialize Masonry
var msnry = new Masonry( container );
// layout Masonry again after all images have loaded
imagesLoaded( container, function() {
  msnry.layout();
});