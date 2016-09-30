<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>DoSHik</title>
	<link rel="shortcut icon" href="img/HERO.png" type="image/png">
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
	<link href="https://fonts.googleapis.com/css?family=Baloo+Bhaina" rel="stylesheet">
	<script type="text/javascript" src='https://code.jquery.com/jquery-3.1.0.min.js'></script>
</head>
<body>

	<div id="wrapper">
		<div id="back">
			<div id="nameFill" class="bounceIn animated" >
				<div id="inpOk">
					<input type="text" id="name" autofocus='' placeholder="Player name" >
					<img id="subm" src="img/ok.png" alt="">
				</div>
			</div>
			<div id="plNameWrp">
				<span id="playerName">Player</span>
			</div>
			<canvas width="800" height="400" id="myCanvas"></canvas>
			<div id="info">
				<table>
					<tr>
						<td>Lvl<span id="lvl">1</span></td>
						<td>Speed<span id="speed">2</span></td>
						<td>DoShiks<span id="dosh">0</span> </td>
					</tr>
				</table>
			</div>
		</div>
			

		
		<div id="data">
		<div id="rools">
			<p>
				Use &#8592; &#8594; to move. Your goal is to reach maximum amount of packages of noodles without touching enemies. You can compare your result with others players in the table below. Enter your player login to start.
			</p>
		</div>

			<span id='makeDisapiar'>
			<!-- <?php include("includes/ShowUsers.php") ?> -->
			</span>
		</div>
	</div>
	<footer>
		<h3>Thank you for your attention</h3>
	</footer>
	<script type="text/javascript" src="main.min.js"></script>
	
	
	
	
	<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-84122300-1', 'auto');
  ga('send', 'pageview');

</script>
</body>
</html>