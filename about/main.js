var container = document.querySelector('#container');

var msnry = new Masonry(container, {
	// options
	columnWidth : 200,
	itemSelector : '.item',
	containerStyle: null
});
//msnry.layout();

/* layout Masonry again after all images have loaded
imagesLoaded(container, function() {
	msnry.layout();
	alert("dick");
});
*/