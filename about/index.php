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
				<p>
					Scott Steffes is a Software Developer currently living somewhere in Minnesota.
					<br />
					<br />
					He spends his time doing many different things.
				</p>
			</div>
			<?php
			$data = array
			  (
				  "links" => array(
				  		"http://markv12.com/games/index.html",
				  		"http://markv12.com/acrn/",
				  		"http://markv12.com/myhouse/",
				  		"http://moodtrackingapp.herokuapp.com/",
				  		"http://shashinkadakara.blogspot.jp/",
				  		"https://github.com/markv12",
				  		"http://ankisrs.net/",
				  		"http://markv12.com/mindfulness/index.html",
				  		"https://www.youtube.com/watch?v=iZ9XZZokiuUl"
				  ),
				  "titles" => array(
				  		"Making Games",
				  		"Learning about Tinnitus",
				  		"Building Worlds",
				  		"Tracking Moods",
				  		"Taking Pictures",
				  		"Trying to Think of Good Commit Messages",
				  		"Studying Japanese",
				  		"Finding Peace",
				  		"Eating Good Food"
				  ),
				  "images" => array(
				  		"../games/spaceThingScreen.jpg",
				  		"../media/acrn.png",
				  		"../media/myhouse.png",
				  		"../media/mood.png",
				  		"../media/fromSha.jpg",
				  		"../media/Octocat.png",
				  		"../media/japanFlag.png",
				  		"http://www.urbandharma.org/images/bhanteG2.jpg",
				  		"../media/tekuteku.jpg"
				  )
			  );
			  $length = count($data["links"]);
			  for ($i=0; $i<$length; $i++) {

			  	echo "<a href='" . $data["links"][$i] . "'>";
			  	echo "<div class='item link-panel'>";
			  	echo "<p style='margin-bottom:6px;'>";
			  	echo $data["titles"][$i];
			  	echo "</p>";
			  	echo "<img src='" . $data["images"][$i] . "' class='masonImg'/>";
			  	echo "</div>";
			  	echo "</a>";
			  }
			?>
		</div>
		<script src="main.js"></script>
	</body>
</html>
