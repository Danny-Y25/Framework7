<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Credentials:true");
header("Access-Control-Allow-Methods: POST,GET,PUT,DELETE,OPTIONS");
header("Access-Control-Max-Age:604800");
header("Access-Control-Request-Headers: x-requested-with");
header("Access-Control-Allow-Headers: x-requested-with,x-requested-by");
include("conexion.php");

$cedula=$_POST['cedula'];
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$direccion=$_POST['direccion'];
$telefono=$_POST['telefono'];
$cargo=$_POST['cargo'];

$agregar=mysqli_query($conexion, "insert into usuario values ('$cedula','$nombre','$apellido','$direccion','$telefono','$cargo')")
or die(mysqli_error());