<?php

	if ( isset($_POST['nombre']) && !empty($_POST['nombre']) || 
		 isset($_POST['telefono']) && !empty($_POST['telefono']) ||
		 isset($_POST['email']) && !empty($_POST['email']) ||
		 isset($_POST['asunto']) && !empty($_POST['asunto']) ||
		 isset($_POST['comentario']) && !empty($_POST['comentario'])
	) {
		
		$destino = "alexperezofficial01@gmail.com";
		$desde = "From: ". "Contactar";
		$asunto = $_POST['asunto'];
		$mensaje = "Nombre: " . $_POST['nombre'] . "\n";
		$mensaje .= "Telefono: " . $_POST['telefono'] . "\n";
		$mensaje .= "Email: " . $_POST['email'] . "\n";
		$mensaje .= "Asunto: " . $_POST['asunto'] . "\n";
		$mensaje .= "Comentario: " . $_POST['comentario'] . "\n";

		mail($destino, $asunto, $mensaje, $desde);
		echo "Correo enviado...";

		echo "<script language='JavaScript'>
				var prueba = 'El mensaje se envio exitosamente';
				
				setTimeout(function(){
					alert(prueba);
					location.href = \"https://seguridadtiprueba.000webhostapp.com/index.html\";
				}, 4000);
				
			</script>";
		
	}else{
		echo "Ha ocurrido un error intentelo más tarde.";
	}

?>