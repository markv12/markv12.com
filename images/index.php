<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
		<link rel="stylesheet" href="../libraries/foundation/css/foundation.min.css">
		<link type="text/css" rel="stylesheet" href="../libraries/foundation/css/normalize.css"/>

		<link type="text/css" rel="stylesheet" href="../stylesheet.css"/>

		<title>Images</title>
	</head>
	<body>
		<br />
		<br />
		<div class="wrapper">
			<div class="row full-width">
				<div id="ad" class="large-2 medium-2 columns hide-for-small-only">
					<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
					<!-- SideBarAd -->
					<ins class="adsbygoogle"
					style="display:inline-block;width:160px;height:600px"
					data-ad-client="ca-pub-9098590399655966"
					data-ad-slot="9550918066"> </ins>
					<script>
						( adsbygoogle = window.adsbygoogle || []).push({});
					</script>

				</div>

				<?php
				$imageNumber=$_GET['image'];
				$images=array("http://i.imgur.com/eS6lo29.jpg","http://i.imgur.com/YIuj3gr.jpg");
				$selectedImage=$images[$imageNumber];
				?>
				<div id="content" class="large-10 medium-10 columns">
					<a id="imagelink" href="<?php echo $selectedImage ?>">
						<img id="image" alt="loadin'" src="<?php echo $selectedImage ?>" style="border-radius: 5px"></img>
					</a>

				</div>
			</div>
		</div>
	</body>
</html>
