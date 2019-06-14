<?php
require('conexion.php');
// 
$clientName = htmlspecialchars($_POST['nombre_registro']);
$clientLName = htmlspecialchars($_POST['apellido_registro']);
$clientEmail = htmlspecialchars($_POST['correo_registro']);
$clientCountry = htmlspecialchars($_POST['country']);
$clientDirection = htmlspecialchars($_POST['direccion_registro']);
$clientAddress = htmlspecialchars($_POST['residencia_registro']);
$clientPhone = htmlspecialchars($_POST['telefono_registro']);
$clientCourse = htmlspecialchars($_POST['elegir_curso']);
// 

$sql = "INSERT INTO registro (nombre, apellido, email, pais, direccion, residencia, telefono, curso) 
        VALUES ('$clientName','$clientLName','$clientEmail','$clientCountry','$clientDirection','$clientAddress','$clientPhone','$clientCourse')";

if(mysqli_query($conn,$sql)){
    echo "Nuevo registro añadido";
} else{
    echo "Error al insertar Registro \n".$conn->error;
}
$conn->close();

