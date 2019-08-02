<?php

	if ( isset($_POST['correo_info']) && !empty($_POST['correo_info']) ) {

		$destino = "somemail@gmail.com"; // Correo al que se enviara la información
		$desde = "From:"."Inscripcion"; // Titulo del correo
		$asunto = "Solicitud de información sobre nuevos cursos"
		$mensaje = "Correo: " . $_POST['correo_info'] . "\n";
		$mensaje .= "Acepto los terminos y solicito información sobre nuevos cursos";
		
		mail($destino, $asunto , $mensaje);

		'<script">alert("Gracias por inscribirte :)");</script>'; // Enviar un alert si se envio correctamente

	}else{

		echo '<script">alert("Ha ocurrido un error al enviar el correo");</script>'; // Enviar un alert si ocurre un error

	}

?>
