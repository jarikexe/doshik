<?php
include_once("db.php");
	
	$records = array();
	$sql = "SELECT * FROM usr SORT ORDER BY score DESC LIMIT 20";
	$result = mysqli_query($conn, $sql);

		if (mysqli_num_rows($result) > 0) {
	    // output data of each row
	    while($row = $result->fetch_assoc()) {
	    	$records[] = $row;
	    }
	}
?>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">

<div  id='sore' class="gone">
	<table>
	<?php foreach ($records as $row): ?>
		<tr>
			<td><?=$row['login']?></td>
			<td><?=$row['score']?></td>
		</tr>
	<?php endforeach ?>
	</table>
</div>