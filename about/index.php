<?php require_once( '../couch/cms.php' ); ?>
<cms:template title='About' />

<cms:repeatable name='about_tiles' >
	<cms:editable name='card_link' label='Link' desc='Enter page link here' type='text' />
	<cms:editable name='card_title' label='Title' desc='Enter page title here' type='text' />
	<cms:editable name='image_link' label='Image Link' desc='Enter image link here' type='text' />
</cms:repeatable>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<link type="text/css" rel="stylesheet" href="../libraries/foundation/css/normalize.css"/>

		<link href='http://fonts.googleapis.com/css?family=Exo+2:500' rel='stylesheet' type='text/css'>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>

		<script type="text/javascript" src="../libraries/jquery-2.1.1.min.js"></script>
		<script src="../libraries/masonry/dist/masonry.pkgd.min.js"></script>
		<script src="../libraries/imagesloaded/imagesloaded.pkgd.min.js"></script>
	</head>
	<body>
		<div id="container">
			<div class="item">
				<img src="../media/profileSmall.jpg" alt="picture of me Scott Steffes" class="masonImg"/>
				<cms:editable name='basic_description' type='richtext'>
					<p>
						Scott Steffes is a Software Developer currently living somewhere in Minnesota.
						<br />
						<br />
						He spends his time doing many different things.
					</p>
				</cms:editable>
			</div>
			<cms:show_repeatable 'about_tiles' >
				<a href='<cms:show card_link />'>
				  	<div class='item link-panel'>
				  		<p style='margin-bottom:6px;'>
				  			<cms:show card_title />
						</p>
						<img src='<cms:show image_link />' class='masonImg'/>
					</div>
				</a>
			</cms:show_repeatable>
		</div>
		<script src="main.js"></script>
	</body>
</html>
<?php COUCH::invoke(); ?>