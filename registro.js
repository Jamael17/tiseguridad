/*----------- SELECCIONAR CURSO EN REGISTRO ------------*/

 
var pagar = document.getElementById("pagar");
	el_precio = document.getElementById("el_precio");

	//curso_inical = 1;

	function ver_valor(){

		// EL SELECT POSEE LAS DIVERSAS OPCIONES, Y EL VALUE ES LA PARTE DE LOS PRECIOS
		select = document.getElementById("column_center_select"),
		value = select.value;

		// LOS DIFERENTES PRECIOS
		switch(value){ 
			case "1": el_precio.innerHTML = "$300";
					  break;
			case "2": el_precio.innerHTML = "$200";
					  break;
			case "3": el_precio.innerHTML = "$430";
					  break;
			case "4": el_precio.innerHTML = "$338";
					  break;
			case "5": el_precio.innerHTML = "$20";
					  break;
			case "6": el_precio.innerHTML = "$890";
					  break;
			case "7": el_precio.innerHTML = "$40";
					  break;
			default: el_precio.innerHTML = "Precio no encontrado";
					  break;
		}
	}

	// INTERVALO PARA VER EL VALOR Y CAMBIAR EL PRECIO
	setInterval('ver_valor()',500) 

/*----------- FIN SELECCIONAR CURSO EN REGISTRO ------------*/
