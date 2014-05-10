var $container = $('#container');
$container.masonry($container, {
	  // options
	  columnWidth: 300,
	  itemSelector: '.item'
	});
imagesLoaded( container, function() {
	$container.masonry( 'option', { gutter: 5} );
	$container.masonry();
});