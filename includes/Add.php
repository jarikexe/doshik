<?php
include_once("db.php");
$ip = $_SERVER['REMOTE_ADDR']; 
if ($_GET['ajax']) {
  		$login =  $_GET['login'];
  		$score =  $_GET['score'];
  		$toDo =  $_GET['toDo'];
	}
	if($toDo == "add"){
		$sql = "INSERT INTO usr (login, score,ip)
		VALUES ('$login', '$score', '$ip')";
		mysqli_query($conn, $sql);
	}elseif ($toDo == "update") {
		if (!$login == "" && $score > 0) {
			$sql = "UPDATE usr SET score= '$score' WHERE login = '$login' AND ip = '$ip'";
			$conn->query($sql);
		}
	}
 ?>