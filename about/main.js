var $container = $('#container');
$container.masonry($container, {
	  // options
	  columnWidth: 300,
	  itemSelector: '.item'
	});

$container.masonry( 'option', { gutter: 5} );
$container.masonry();