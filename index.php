<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>CS 313 Assignments</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="./style.css" type="text/css">
</head>
<body>
	<div class="container-fluid">
		<div class="row content">
			<div class="col-sm-3 sidenav">
				<br>
				<div id="phpMe">
					<?php 
					date_default_timezone_set('America/Denver');
					echo "The time is " . date("h:i:a") . " (MST).<br>";
					$t = date("H");						
					if ($t < 10) {
						echo "Have a good morning!";
					} elseif ($t < 20 and $t > 10) {
						echo "Have a good day!";
					} else {
						echo "Have a good night!";							
						}						?>
					</div>
					<br>
				<img src="./images/animeMe.jpg" alt="Girl with Glasses" class="img-thumbnail float-middle">
				<h3>The Girl with Glasses</h3>
				<ul class="nav nav-pills nav-stacked">
					<li  class="active"><a href="./index.php">Home</a></li>
					<li><a href="./assignments.php">Assignments</a></li>
					<!-- --<li><a href="../html/teamteach.html">Team Activities</a></li> -->
					</ul><br>
					<br>		
			</div>
			<div class="col-sm-9">
				<h4><small>WDD 330 Portfolio</small></h4>
				<img src="./images/python_code.jpg" alt="But it does run." class="img-thumbnail float-middle">
			</div>
		</div>
	</div>
	<footer class="footer">
		<div class="container">
			<span class="text-muted">
				Content property of RestrainedChaos: https://bit.ly/36bAt0s
			</span>
	</footer>
</body>
</html>