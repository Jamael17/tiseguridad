/*-------------------- HERRAMIENTAS ----------------------*/

	//TITULOS
	var titulo_antivirus = document.getElementById("titulo_antivirus"),
	titulo_editoresTexto = document.getElementById("titulo_editores_texto"),
	titulo_foros = document.getElementById("titulo_foros"),
	//DIVS CONTENEDORES DE LAS HERRAMIENTAS
	divForos = document.getElementById("foros"),
	divEditorTexto = document.getElementById("editores_texto"),
	divAntivirus = document.getElementById("antivirus");

	//CONTADORES PARA MOSTRAR/OCULTAR EL CONTENIDO
	cuentaAntivirus = 0,
	cuentaEditorTexto = 0,
	cuentaForos = 0;

	//EVENTOS
	titulo_editoresTexto.addEventListener("click",function(){

		//PUNTA DE FLECHA QUE SE VE ANTES DEL TITULO
		var flecha = titulo_editoresTexto.getElementsByTagName('span')[0];

		if (cuentaEditorTexto == 0){
			divEditorTexto.style.display = "block";
			// CUANDO ESTE ACTIVO
			titulo_editoresTexto.style.backgroundImage = "url('img/fondo-herramientashover.jpg')";
			titulo_editoresTexto.style.backgroundSize = " 100% 500% ";
			titulo_editoresTexto.style.color = "#D4D4D4";
			cuentaEditorTexto = 1;
			flecha.innerHTML = "<";
		}else if (cuentaEditorTexto == 1){
			divEditorTexto.style.display = "none";
			// CUANDO ES ABIERTO Y LUEGO ES CERRADO
			titulo_editoresTexto.style.backgroundImage = "url('img/fondo-herramientas.jpg')"; 		
			titulo_editoresTexto.style.color = "#fff";
			cuentaEditorTexto = 0;
			flecha.innerHTML = ">";
		}

	});

	//EVENTOS
	titulo_antivirus.addEventListener("click",function(){

		//PUNTA DE FLECHA QUE SE VE ANTES DEL TITULO
		var flecha = titulo_antivirus.getElementsByTagName('span')[0];

		if (cuentaAntivirus == 0){
			divAntivirus.style.display = "block";
			// CUANDO ESTE ACTIVO
			titulo_antivirus.style.backgroundImage = "url('img/fondo-herramientashover.jpg')";
			titulo_antivirus.style.backgroundSize = " 100% 500% ";
			titulo_antivirus.style.color = "#D4D4D4";
			cuentaAntivirus = 1;
			flecha.innerHTML = "<";
		}else if (cuentaAntivirus == 1){
			divAntivirus.style.display = "none";
			// CUANDO ES ABIERTO Y LUEGO ES CERRADO
			titulo_antivirus.style.backgroundImage = "url('img/fondo-herramientas.jpg')";
			titulo_antivirus.style.color = "#fff";
			cuentaAntivirus = 0;	
			flecha.innerHTML = ">";
		}

	});

	//EVENTOS
	titulo_foros.addEventListener("click",function(){

		//PUNTA DE FLECHA QUE SE VE ANTES DEL TITULO
		var flecha = titulo_foros.getElementsByTagName('span')[0];

		if (cuentaForos == 0){
			divForos.style.display = "block";
			// CUANDO ESTE ACTIVO
			titulo_foros.style.backgroundImage = "url('img/fondo-herramientashover.jpg')";
			titulo_foros.style.backgroundSize = " 100% 500% ";
			titulo_foros.style.color = "#D4D4D4";
			cuentaForos = 1;
			flecha.innerHTML = "<";
		}else if (cuentaForos == 1){
			divForos.style.display = "none";
			// CUANDO ES ABIERTO Y LUEGO ES CERRADO
			titulo_foros.style.backgroundImage = "url('img/fondo-herramientas.jpg')";
			titulo_foros.style.color = "#fff";
			cuentaForos = 0;
			flecha.innerHTML = ">";
		}

	});

/*--------------------- FIN HERRAMIENTAS -----------------*/