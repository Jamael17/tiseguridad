// SI LA PANTALLA ES MENOR O IGUAL A 370px
if (window.innerWidth <= 370){
		// SLIDERS DE OPINIONES
		var cambiarTexto = document.getElementById("cambiar_texto_celular"),
			cambiarTextoDos = document.getElementById("cambiar_texto_celularDos"),
			cambiarTextoTres = document.getElementById("cambiar_texto_celularTres");

		// TEXTO DE OPINIONES CAMBIADO 
		cambiarTexto.innerHTML = "El curso y el profesionalismo me han parecido excelentes. Terminaré las prácticas tranquilamente, pero me apuntaría otra vez con los ojos cerrados. Estás todo muy bien montado, tanto la estructura como la calidad de los contenidos.";
		cambiarTextoDos.innerHTML = "La claridad de los temas, la dedicación por cada uno de los temas, la dicción y el apoyo continuo para resolver dudas. Además, han enseñado el tema de malware que muchos cursos lo pasan por encima.";
		cambiarTextoTres.innerHTML = "Hola el curso me gusto mucho ya que empece sin saber nada del software el tutor explica muy bien y se ve que tiene gran experiencia, en estos momentos trabajo como topógrafo en una zona rural .";
	}

// SI LA PANTALLA ES MENOR O IGUAL A 900px
if (window.innerWidth <= 900){
		alert("Algunos dispositivos pueden generar modificaciones en los estilos de la pagina :D, " + " Generalmente son dispositivos 'Windows Phone' y 'Android menores a la version 6'.");
	}
