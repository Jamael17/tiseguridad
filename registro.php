<?php
/*Para probarlo guardarlo en el localhost*/

// SI EL INPUT NOMBRE DEL REGISTRO NO ESTA VACIO Y TIENE LETRAS
if ( isset( $_POST['nombre_registro'] ) && !empty( $_POST['nombre_registro'] ) &&
	preg_match( "/^[a-z]+$/i", $_POST['nombre_registro'] ) 
	){
		
		echo "Nombre correcto \n" . "<br/>" ;

	}else{
		// SI EL INPUT NOMBRE DEL REGISTRO ESTA VACIO
		echo "Esto no es un nombre, no me mientas... \n" . "<br/>" ;

	}

// SI EL INPUT APELLIDO DEL REGISTRO NO ESTA VACIO Y TIENE LETRAS
if ( isset( $_POST['apellido_registro'] ) && !empty( $_POST['apellido_registro'] ) &&
	preg_match( "/^[a-z]+$/i", $_POST['apellido_registro'] ) 
	){
		
		echo "apellido correcto \n" . "<br/>" ;

	}else{
		// SI EL INPUT NOMBRE DEL REGISTRO ESTA VACIO O TIENE NUMEROS
		echo "Esto no es un apellido, no me mientas... \n" . "<br/>" ;

	}

// SI EL INPUT E-MAIL CONTIENE "@" ( La /i es para no diferenciar entre mayusculas y minúsculas ).
if ( preg_match( "/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/", $_POST['correo_registro'] ) ) {

	// SI EL INPUT E-MAIL CONTIENE "gmail. o hotmail." SE MOSTRARA EL MENSAJE DE VALIDADO
	if(	 preg_match( "/gmail.\b/i", $_POST['correo_registro'] ) || 
	 	 preg_match( "/hotmail.\b/i", $_POST['correo_registro'] ) )
	{
		// MENSAJE DE VALIDADO
		echo "Se encontro el correo (gmail/hotmail), y es un correo valido " . "<br/>" ;

	}else{
		// NO ES UN CORREO GMAIL O HOTMAIL
		echo "Introduzca un e-mail de tipo GMAIL o HOTMAIL" . "<br/>" ;

	}

}else{
	// MENSAJE PARA DEMOSTRAR QUE EN EL INPUT E-MAIL NO HAY "@,gmail.,hotmail."
	echo "Esto no es un correo, no me mientas " . "<br/>" ;
}


// MOSTRAR EL INPUT PAIS
echo "Tu pais es: " . $_POST['pais'] . "<br/>"  ;

// MOSTRAR EL INPUT ESTADO
if ( preg_match( "/^[a-z]+$/i", $_POST['estado_registro'] ) ) {
	
	echo "Tu estado es: " . $_POST['estado_registro'] . "<br/>"  ;

}else{

	echo "Esto no es un estado, no me mientas " . "<br/>"  ;

}

// MOSTRAR EL INPUT DIRECCIÓN
if ( isset( $_POST['direccion_registro'] ) && !empty( $_POST['direccion_registro'] ) ) {
	
	echo "Es una dirección valida" . "<br/>"  ;
}else{

	echo "El campo dirección se encuentra vacio" . "<br/>"  ;

}

// MOSTRAR EL INPUT RESIDENCIA
if ( isset( $_POST['residencia_registro'] ) && !empty( $_POST['residencia_registro'] ) ) {
	
	echo "Es una residencia valida" . "<br/>"  ;
}else{

	echo "El campo residencia se encuentra vacio..." . "<br/>"  ;

}

// MOSTRAR EL INPUT TELÉFONO
if ( preg_match( "/^[0-9]+$/", $_POST['telefono_registro'] ) ) {
	
	echo "Es un teléfono valido: " . $_POST['telefono_registro'] . "<br/>"  ;

}else{

	echo "Esto no es un teléfono, no me mientas..." . "<br/>"  ;

}


// OBTIENE EL NOMBRE DEL HOST DEL URL
preg_match('@^(?:http://)?([^/]+)@i',
    "http://www.tiseguridad.tk/index.html", $coincidencias);
$host = $coincidencias[1];

// OBTIENE LOS 2 ULTIMOS SEGMENTOS DEL NOMBRE DEL HOST
preg_match('/[^.]+\.[^.]+$/', $host, $coincidencias);

// COMPONENTES QUE USAREMOS PARA GENERAR LOS CARÁCTERES
$str = "ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz1234567890";
$cad = "";

// GENERANDO LOS 12 CARÁCTERES ALEATORIAS
for ($i=0; $i < 12; $i++) { 
	$cad .= substr($str, rand(0,62),1);
}

// NOS DA EL LINK DEL HOST + LOS CARACTÉRES GENERADOS ARRIBA
echo "Tu codigo de identificación es: {$coincidencias[0]}=?" . $cad . "<br/>"  ;


// INFORMACIÓN DEL CURSO ELEGIDO
$cursos = $_POST['elegir_curso'];
// NOMRBE DEL CURSO ELEGIDO
$cursoElegido = "";
// PRECIO DEL CURSO ELEGIDO
$precio = 0;


// SWITCH PARA VER RESULTADO DE $cursos
switch ($cursos) {

	case "1": 	$cursoElegido .= "ANALISTA DE SEGURIDAD";
				$precio = 300;
				break;
	case "2": 	$cursoElegido .= "SNORT";
				$precio = 200;
				break;
	case "3": 	$cursoElegido .= "PENTESTING";	
				$precio = 430;
				break;
	case "4": 	$cursoElegido .= "PISHING";
				$precio = 338;
				break;
	case "5":	$cursoElegido .= "AIRCRACK-NG";
				$precio = 20;
				break;
	case "6": 	$cursoElegido .= "EDITOR DE CODIGO FUENTE";
				$precio = 890;
				break;
	case "7":	$cursoElegido .= "METASPLOIT";
				$precio = 40;
  				break;
	default: echo "CURSO NO ENCONTRADO";
				$precio = 0;
				break;
}

echo "Curso: " . $cursoElegido . "<br/>"  ;
echo "Precio: $" . $precio . "<br/>"  ;




?>