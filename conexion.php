<?php
$dbUser = "root";
$dbPass = "";
$dbName = "tiseguridad";

$conn = new mysqli("localhost",$dbUser,$dbPass,$dbName);

if(!$conn){
    die("Conexión fallida ".$conn->connect_error);
}