<?php
$conexion=mysqli_connect("localhost","root","","framework");
if (mysqli_connect_errno()) {
    echo "conexion dice " . mysqli_connect_errno();
}