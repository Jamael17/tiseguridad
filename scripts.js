var contador = 1;

var servicios = document.getElementById('servicios');

	$(document).ready(function(){
		$('#servicios').click(function(){
			$('.navegar').animate({
				left: '-100%'
			});
		});
	});

$(document).ready(function(){
	/*------- MENU ------------*/
	(function(){
		
		$('.menu_bar').click(function(){
 
		if(contador == 1){
			$('.navegar').animate({
				left: '0'
			});
			contador = 0;
			return false;
			//console.log($('nav'));
		}

		if (contador == 0){
			$('.navegar').animate({
				left: '-100%'
			});
			contador = 1;
			return false;
		}
 
	});
	}());

	/*------- fin MENU ------------*/

	/*---------- SLIDER -----------*/

	var imgItems = $('.slider li').length,
		imgPos = 1;

	//Ciclo para mostrar los circulos automaticamente al añadir un li al .slider
	for (var i = 1; i <= imgItems ; i++) {
		$('.pagination').append('<li><span class="icon-radio-checked2"></span></li>');
	}
	
	$('.slider li').hide(); //Ocultar slide
	$('.slider li:first').show(); //Mostrar primer slide
	$('.pagination li:first').css({'color':'orange'});//Color del primer circulo de la .pagination

	//Llamando funciones
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);

	setInterval(nextSlider,8000);

	//Funciones
	function pagination(){
		var paginationPos = $(this).index() + 1;

		$('.slider li').hide();
		$('.slider li:nth-child('+paginationPos+')').show();

		$('.pagination li').css({'color':'#D8D7D0'});
		$(this).css({'color':'orange'});

		imgPos = paginationPos; //Para que al oprimir un circulo y después una flechita, no se quede pegado el slide

	}

	function nextSlider(){

		(imgPos >= imgItems)?imgPos = 1:imgPos++;

		//console.log(imgPos);

		$('.pagination li').css({'color':'#D8D7D0'});
		$('.pagination li:nth-child('+imgPos+')').css({'color':'orange'});
		

		$('.slider li').hide(); //Ocultamos todos los slider
		$('.slider li:nth-child('+imgPos+')').fadeIn(1000); // Mostramos el slide seleccionado en 1 segundo

	}

	function prevSlider(){

		(imgPos <= 1)?imgPos = imgItems:imgPos--;
		//console.log(imgPos);

		$('.pagination li').css({'color':'#858585'});
		$('.pagination li:nth-child('+imgPos+')').css({'color':'orange'});
		

		$('.slider li').hide(); //Ocultamos todos los slider
		$('.slider li:nth-child('+imgPos+')').fadeIn(1000); // Mostramos el slide seleccionado en 1 segundo

	}

	/*--------- FIN SLIDER -------------*/

});

$(document).ready(function(){
	var imgItems = $('.slider1 li').length,
		imgItems2 = $('.slider2 li').length,
		imgItems3 = $('.slider3 li').length,
		imgPos = 1,
		imgPos2 = 1,
		imgPos3 = 1;

	//console.log(imgItems);


	$(".slider1 li").hide(); // Ocultar los elementos
	$(".slider1 li:first").show(); // Mostrar el primer elemento

	$(".slider2 li").hide(); // Ocultar los elementos
	$(".slider2 li:first").show(); // Mostrar el primer elemento

	$(".slider3 li").hide(); // Ocultar los elementos
	$(".slider3 li:first").show(); // Mostrar el primer elemento

	//EJECUTANDO FUNCIONES
	$(".der span").click(nextSlider);
	$(".izq span").click(prevSlider);

	//AUTOMATIZAR SLIDERS

	setInterval(function(){
		nextSlider();
	},5000);

	//FUNCIONES

	function nextSlider(){

		if (imgPos >= imgItems){
			imgPos = 1;
		}else{
			imgPos++;
		}

		if (imgPos2 >= imgItems2){
			imgPos2 = 1;
		}else{
			imgPos2++;
		}

		if (imgPos3 >= imgItems3){
			imgPos3 = 1;
		}else{
			imgPos3++;
		}

		/*console.log(imgPos);
		console.log(imgPos2);
		console.log(imgPos3);*/

		$(".slider1 li").hide(); // Ocultar todos los elementos nuevamente
		$(".slider1 li:nth-child("+ imgPos+")").fadeIn(); // Mostrar el elemento

		$(".slider2 li").hide(); // Ocultar todos los elementos nuevamente
		$(".slider2 li:nth-child("+ imgPos2 +")").fadeIn(); // Mostrar el elemento

		$(".slider3 li").hide(); // Ocultar todos los elementos nuevamente
		$(".slider3 li:nth-child("+ imgPos3 +")").fadeIn(); // Mostrar el elemento

	}

	function prevSlider(){
		

		if (imgPos <= 1){
			imgPos = imgItems;
		}else{
			imgPos--;
		}

		if (imgPos2 <= 1){
			imgPos2 = imgItems2;
		}else{
			imgPos2--;
		}

		if (imgPos3 <= 1){
			imgPos3 = imgItems3;
		}else{
			imgPos3--;
		}

		/*console.log(imgPos);
		console.log(imgPos2);
		console.log(imgPos3);*/

		$(".slider1 li").hide(); // Ocultar todos los elementos nuevamente
		$(".slider1 li:nth-child("+ imgPos+")").fadeIn(); // Mostrar el elemento

		$(".slider2 li").hide(); // Ocultar todos los elementos nuevamente
		$(".slider2 li:nth-child("+ imgPos2 +")").fadeIn(); // Mostrar el elemento

		$(".slider3 li").hide(); // Ocultar todos los elementos nuevamente
		$(".slider3 li:nth-child("+ imgPos3 +")").fadeIn(); // Mostrar el elemento

	}


});

$(document).ready(function(){
	var imgItems4 = $(".slider4 li").length, // Numero de li
		imgPos4 = 1;

	$(".slider4 li").hide();
	$(".slider4 li:first").show();

	// Ejecutar funciones
	$(".flecha2 h2").click(nextOpinion);

	setInterval(nextOpinion,15000)

	//  FUNCIONES
	function nextOpinion(){
		
			if (imgPos4 >= imgItems4){
				imgPos4 = 1;
			}else{
				imgPos4++;
			}
			//console.log(imgPos4);

			$(".slider4 li").hide();
			$(".slider4 li:nth-child("+imgPos4+")").fadeIn();

	}

});


/*----------- SELECCIONAR CURSO EN REGISTRO ------------*/

 
var pagar = document.getElementById("pagar");
	el_precio = document.getElementById("el_precio");

	curso_inical = 1;

	//console.log(el_precio);


	function ver_valor(){

		select = document.getElementById("column_center_select"),
		value = select.value;

		/*text = select.options[select.selectedIndex].innerText,
		textoEnMinusculas = text.toLowerCase();*/

		//console.log(value);

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

	setInterval('ver_valor()',500) // Ver el valor y cambiar el precio

/*----------- FIN SELECCIONAR CURSO EN REGISTRO ------------*/


/*-------------------- HERRAMIENTAS ----------------------*/

	titulo_antivirus = document.getElementById("titulo_antivirus"),
	titulo_editoresTexto = document.getElementById("titulo_editores_texto"),
	titulo_foros = document.getElementById("titulo_foros"),
	divForos = document.getElementById("foros"),
	divEditorTexto = document.getElementById("editores_texto"),
	divAntivirus = document.getElementById("antivirus");

	cuentaAntivirus = 0;
	cuentaEditorTexto = 0;
	cuentaForos = 0;

	titulo_editoresTexto.addEventListener("click",function(){

		var flecha = titulo_editoresTexto.getElementsByTagName('span')[0];

		if (cuentaEditorTexto == 0){
			divEditorTexto.style.display = "block";
			titulo_editoresTexto.style.backgroundColor = "green";
			cuentaEditorTexto = 1;
			flecha.innerHTML = "<";
		}else if (cuentaEditorTexto == 1){
			divEditorTexto.style.display = "none";
			titulo_editoresTexto.style.backgroundColor = "gray";			
			cuentaEditorTexto = 0;
			flecha.innerHTML = ">";
		}

	});

	titulo_antivirus.addEventListener("click",function(){

		var flecha = titulo_antivirus.getElementsByTagName('span')[0];

		if (cuentaAntivirus == 0){
			divAntivirus.style.display = "block";
			titulo_antivirus.style.backgroundColor = "green";
			cuentaAntivirus = 1;
			flecha.innerHTML = "<";
		}else if (cuentaAntivirus == 1){
			divAntivirus.style.display = "none";
			titulo_antivirus.style.backgroundColor = "gray";
			cuentaAntivirus = 0;	
			flecha.innerHTML = ">";
		}

	});

	titulo_foros.addEventListener("click",function(){

		var flecha = titulo_foros.getElementsByTagName('span')[0];

		if (cuentaForos == 0){
			divForos.style.display = "block";
			titulo_foros.style.backgroundColor = "green";
			cuentaForos = 1;
			flecha.innerHTML = "<";
		}else if (cuentaForos == 1){
			divForos.style.display = "none";
			titulo_foros.style.backgroundColor = "gray";
			cuentaForos = 0;
			flecha.innerHTML = ">";
		}

	});

/*--------------------- FIN HERRAMIENTAS -----------------*/

