<?php
require 'conexion.php';
// 
$clientName = htmlspecialchars($_POST['nombre_registro']);
$clientLName = htmlspecialchars($_POST['apellido_registro']);
$clientEmail = htmlspecialchars($_POST['correo_registro']);
$clientCountry = htmlspecialchars($_POST['country']);
$clientDirection = htmlspecialchars($_POST['direccion_registro']);
$clientAddress = htmlspecialchars($_POST['residencia_registro']);
$clientPhone = htmlspecialchars($_POST['telefono_registro']);
$clientCourse = htmlspecialchars($_POST['elegir_curso']);
$courseMeaning = "";
$code = crypt($clientName.rand(1,2048),'st');

// 

if($clientEmail == ""){
    $clientDirection = "Undefine";
}
switch ($clientCourse) {
    case 1:
        $courseMeaning = "ANALISTA DE SEGURIDAD";
        break;
    case 2:
        $courseMeaning = "SNORT";
        break;
    case 3:
        $courseMeaning = "PENTESTING";
        break;
    case 4:
        $courseMeaning = "PISHING";
        break;
    case 5:
        $courseMeaning = "AIRCRACK-NG";
        break;
    case 6:
        $courseMeaning = "EDITOR DE CODIGO FUENTE";
        break;
    case 7:
        $courseMeaning = "METASPLOIT";
        break;
    
    default:
        $courseMeaning = "Undefine";
        break;
}
$sql = "INSERT INTO registro (nombre, apellido, email, pais, direccion, residencia, telefono, curso, code) 
        VALUES ('$clientName','$clientLName','$clientEmail','$clientCountry','$clientDirection','$clientAddress','$clientPhone','$courseMeaning','$code')";

if(mysqli_query($conn,$sql)){
    echo "Redireccionando...
    <script>window.location.href='index.html';</script>
    ";
} else{
    echo "Error al insertar Registro \n".$conn->error;
}
$conn->close();

