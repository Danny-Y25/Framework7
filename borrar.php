<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Credentials:true");
header("Access-Control-Allow-Methods: POST,GET,PUT,DELETE,OPTIONS");
header("Access-Control-Max-Age:604800");
header("Access-Control-Request-Headers: x-requested-with");
header("Access-Control-Allow-Headers: x-requested-with,x-requested-by");
include("conexion.php");

$cedula=$_POST['cedula'];


$borrar=mysqli_query($conexion, "delete from usuario where cedula='$cedula'")
or die(mysqli_error());