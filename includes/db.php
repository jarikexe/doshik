<?php
//mb_internal_encoding('UTF-8');
$servername = "mysql.hostinger.com.ua";
$username = "u124014676_jar";
$password = "jetiks";
$dbname = "u124014676_ga";
$conn = new mysqli($servername, $username, $password, $dbname) or die('Cannot coonet to database !! Check your internet speed');
$conn->select_db($dbname) or die('Cannot seect db!');
?>