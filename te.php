<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<style>
	#test{
		opacity: 0;
		opacity: 
		display: block;
		content: '   ';
		width: 200px;
		height: 200px;
		background: #7C0D0D;
	}
	.gone{
	animation: disap 2s ease-out;
}

@keyframes disap {
    from {opacity: 0;}
    to {opacity: 1;}
}

</style>
<body>
	<div id="test" class="gone"></div>
</body>
</html>