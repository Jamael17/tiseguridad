/*$(document).ready(function(){
	(function(){
	}());
});*/


// PARA QUE AL OPRIMIR EN LA OPCION DE SERVICIOS DENTRO DEL INDEX EL MENU SE OCULTE
/*var servicios = document.getElementById('servicios'); 
	$(document).ready(function(){
		$('#servicios').click(function(){
			//MENU OCULTANDOSE
			$('.navegar').animate({
				left: '-100%'
			});
		});
	});*/

	console.log(location.href);


	$(document).ready(function(){
	
		/*------- MENU ------------*/
		(function(){
			
			var contador = 1; //CONTADOR PARA VER EL MENU EN LOS TELÉFONOS
	
			// PARA QUE AL OPRIMIR EN LA OPCION DE SERVICIOS DENTRO DEL INDEX EL MENU SE OCULTE
			//var servicios = document.getElementById('servicios'); 
	
			$(document).ready(function(){
				$('#servicios').click(function(){
					//MENU OCULTANDOSE
					$('.navegar').animate({
						left: '-100%'
					});
				});
			});
	
			$('#close_menu').click(function() {
				if (contador == 0){
					$('.navegar').animate({
						left: '-100%'
					});
					// CAMBIAR FUNCIÓN 
					contador = 1;
					// SALIRSE DE LA FUNCIÓN
					return false;
				}
			});
	
			// OCULTAR/MOSTRAR MENU
			$('.menu_bar').click(function(){
			 
			 // MOSTRAR MENU
			if(contador == 1){
				$('.navegar').animate({
					left: '0'
				});
				// CAMBIAR FUNCIÓN 
				contador = 0;
				// SALIRSE DE LA FUNCIÓN
				return false;
			}
	
			// OCULTAR MENU
			if (contador == 0){
				$('.navegar').animate({
					left: '-100%'
				});
				// CAMBIAR FUNCIÓN 
				contador = 1;
				// SALIRSE DE LA FUNCIÓN
				return false;
			}
	 
		});
		}());
	
		/*------- FIN MENU ------------*/
	
		/*---------- SLIDER -----------*/
	
		// CANTIDAD DE CURSOS DEL SLIDER PRINCIPAL
		var imgItems = $('.slider li').length,
			// CONTADOR
			imgPos = 1;
	
		//CICLO PARA MOSTRAR LOS CIRCULOS AUTOMATICAMENTE AL AÑADIR UN LI AL .slider
		for (var i = 1; i <= imgItems ; i++) {
			$('.pagination').append('<li><span class="icon-radio-checked2"></span></li>');
		}
		
		$('.slider li').hide(); // OCULTAR SLIDER
		$('.slider li:first').show(); // MOSTRAR PRIMER SLIDER
		$('.pagination li:first').css({'color':'#FFA500'});// COLOR DEL PRIMER CIRCULO DEL .pagination
	
		// LLAMANDO FUNCIONES
		$('.pagination li').click(pagination);
		$('.right span').click(nextSlider);
		$('.left span').click(prevSlider);
	
		// INTERVALO DEL SLIDER PRINCIPAL PARA PASAR AL SIGUIENTE
		setInterval(nextSlider,8000);
	
		// FUNCIONES
		// MOSTRAR LOS CIRCULOS DEL SLIDER
		function pagination(){
			var paginationPos = $(this).index() + 1;
	
			$('.slider li').hide();
			$('.slider li:nth-child('+paginationPos+')').show();
	
			$('.pagination li').css({'color':'#FFA500'});
			$(this).css({'color':'orange'});
			 // PARA QUE AL OPRIMIR UN CIRCULO Y DESPUES UNA FLECHITA DEL SLIDER, ESTE NO SE QUEDE PEGADO
			 imgPos = paginationPos;
		}
	
		// PASAR AL SIGUIENTE SLIDER
		function nextSlider(){
	
			// OPERADOR TERNARIO 
			(imgPos >= imgItems)?imgPos = 1:imgPos++;
	
			// COLOR DE LAS ETIQUETAS LI QUE SE AÑADIERON MÁS ARRIBA AL .pagination PARA MOSTRAR LOS CIRCULOS
			$('.pagination li').css({'color':'#D8D7D0'});
			// A MEDIDA QUE imgPos AUMENTE EL COLOR DE EL CIRUCLO QUE LE CORRESPONDE SERA DE ESTE COLOR
			$('.pagination li:nth-child('+imgPos+')').css({'color':'orange'});
	
			$('.slider li').hide(); //OCULTAMOS TODOS LOS SLIDERS
			$('.slider li:nth-child('+imgPos+')').fadeIn(1000); // MOSTRAMOS EL SLIDER SELECCIONADO AL TRANSCURRIR 1 SEGUNDO
	
		}
	
		// VOLVER AL SLIDER ANTERIOR
		function prevSlider(){
	
			// OPERADOR TERNARIO 
			(imgPos <= 1)?imgPos = imgItems:imgPos--;
	
			// COLOR DE LAS ETIQUETAS LI QUE SE AÑADIERON MÁS ARRIBA AL .pagination PARA MOSTRAR LOS CIRCULOS
			$('.pagination li').css({'color':'#858585'});
			// A MEDIDA QUE imgPos AUMENTE EL COLOR DE EL CIRUCLO QUE LE CORRESPONDE SERA DE ESTE COLOR
			$('.pagination li:nth-child('+imgPos+')').css({'color':'orange'});
			
	
			$('.slider li').hide(); // OCULTAMOS TODOS LOS SLIDERS
			$('.slider li:nth-child('+imgPos+')').fadeIn(1000); // MOSTRAMOS EL SLIDER SELECCIONADO AL TRANSCURRIR 1 SEGUNDO
	
		}
	
		/*--------- FIN SLIDER -------------*/
	
	});
	
	$(document).ready(function(){
	
		// LOS 3 SLIDERS MÁS ABAJO DEL SLIDER PRINCIPAL ( SLIDERS DE CURSOS RECIENTES)
		var imgItems = $('.slider1 li').length,
			imgItems2 = $('.slider2 li').length,
			imgItems3 = $('.slider3 li').length,
			// CONTADORES
			imgPos = 1,
			imgPos2 = 1,
			imgPos3 = 1;
	
	
		$(".slider1 li").hide(); // OCULTAR LOS ELEMENTOS
		$(".slider1 li:first").show(); // MOSTRAR EL PRIMER ELEMENTO
	
		$(".slider2 li").hide(); // OCULTAR LOS ELEMENTO
		$(".slider2 li:first").show(); // MOSTRAR EL PRIMER ELEMENTO DEL SEGUNDO SLIDER
	
		$(".slider3 li").hide(); // OCULTAR LOS ELEMENTO
		$(".slider3 li:first").show(); // MOSTRAR EL PRIMER ELEMENTO DEL TERCER SLIDER
	
		//EJECUTANDO FUNCIONES
	
		// FLECHAS DE CURSOS RECIENTES
		$(".der span").click(nextSlider);
		$(".izq span").click(prevSlider);
	
		// AUTOMATIZAR SLIDERS
	
		setInterval(function(){
			nextSlider();
		},5000);
	
		// FUNCIONES
	
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
	
			$(".slider1 li").hide(); // OCULTAR TODOS LOS ELEMENTOS NUEVAMENTE
			$(".slider1 li:nth-child("+ imgPos+")").fadeIn(); // MOSTRAR EL ELEMENTO
	
			$(".slider2 li").hide(); // OCULTAR TODOS LOS ELEMENTOS NUEVAMENTE
			$(".slider2 li:nth-child("+ imgPos2 +")").fadeIn(); // MOSTRAR EL ELEMENTO
	
			$(".slider3 li").hide(); // OCULTAR TODOS LOS ELEMENTOS NUEVAMENTE
			$(".slider3 li:nth-child("+ imgPos3 +")").fadeIn(); // MOSTRAR EL ELEMENTO
	
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
	
			$(".slider1 li").hide(); // OCULTAR TODOS LOS ELEMENTOS NUEVAMENTE
			$(".slider1 li:nth-child("+ imgPos+")").fadeIn(); // MOSTRAR EL ELEMENTO
	
			$(".slider2 li").hide(); // OCULTAR TODOS LOS ELEMENTOS NUEVAMENTE
			$(".slider2 li:nth-child("+ imgPos2 +")").fadeIn(); // MOSTRAR EL ELEMENTO
	
			$(".slider3 li").hide(); // OCULTAR TODOS LOS ELEMENTOS NUEVAMENTE
			$(".slider3 li:nth-child("+ imgPos3 +")").fadeIn(); // MOSTRAR EL ELEMENTO
	
		}
	
	});
	
	$(document).ready(function(){
		// CANTIDAD DE LI EN .slider4
		var imgItems4 = $(".slider4 li").length,
			imgPos4 = 1;
	
		$(".slider4 li").hide(); // OCULTAR ELEMENTOS LI DE .slider4
		$(".slider4 li:first").show(); // MOSTRAR PRIMER ELEMENTO LI DE .slider4
	
		// EJECUTAR FUNCIONES
		//$(".flecha2 h2").click(nextOpinion);
	
		setInterval(nextOpinion,12000)
	
		//  FUNCIONES
		// SIGUIENTE OPINION
		function nextOpinion(){
			
				if (imgPos4 >= imgItems4){
					imgPos4 = 1;
				}else{
					imgPos4++;
				}
	
				$(".slider4 li").hide(); // OCULTAR ELEMENTOS LI DE .slider4
				$(".slider4 li:nth-child("+imgPos4+")").fadeIn(); // EFECTO FADEIN QUE SE APLICA A LAS LI DEL .slider4
	
		}
	
	
		// SI EL LINK ES EL DE LA PAGINA DE LOS CURSOS EN FÍSICO, AÑADIRLE UN MARGEN AL CONTENEDOR DE LOS CURSOS
		if (location.href == "file:///C:/Users/Alejandro/Desktop/TRABAJOS/ASESORIASTI/P%C3%A1ginaWeb/cursosenfisico.html"){
	
			var cursoUnoFisico = document.getElementsByClassName("curso_uno")[0];
	
			cursoUnoFisico.style.marginTop = "1.2rem";
			
	};
	
		// APARECER/DESAPARECER EL SUBHEADER EN EL TELEFONO
	
			// LETRAS QUE DICEN VER MÁS/ VER MENOS
		var ver_info = document.getElementsByClassName("ver_info")[0],
			// EL SUBHEADER QUE APARECERA/DESAPARECERA
			subheader = document.getElementsByClassName("subheader")[0],
			// CONTADOR PARA VER SI EL SUBHEADER APARECIO O DESAPARECIO
			contando = 0;
	
		// FUNCION PARA MOSTRAR/DESPARECER EL SUBHEADER
		function mostrar_info(){
	
			// EN EL CASO DE QUE SE MUESTRE
			if (contando == 0){
	
				subheader.style.display = "inline-block";
				ver_info.innerHTML = "<b>MENOS INFO</b>";
				// VOLVI A DEFINIR EL COLOR AQUI PORQUÉ POR ALGUNA RAZÓN NO ME ME AGARRA ESTA PRIMERA PARTE CON CSS
				ver_info.style.color = "#221E16";
				contando = 1;
				return false;
				}
	
				// EN EL CASO DE QUE ESTE OCULTO
				if (contando == 1){
	
					subheader.style.display = "none";
					ver_info.innerHTML = "<b>MÁS INFO</b>";
					contando = 0;
					return false;
				}
	
		}
	
		// EVENTO PARA MOSTRAR LA INFORMACIÓN DEL SUBHEADER
		ver_info.addEventListener("click",mostrar_info);
	
	
	
		// EVENTOS DE ONFOCUS PARA LOS INPUTS DE REGISTRO
			var inputsRegistro = document.getElementById("formulariode_registro").getElementsByTagName("input"),
				selectsRegistro = document.getElementById("formulariode_registro").getElementsByTagName("select"),
				header = document.getElementsByTagName("header")[0];
	
	
				for(var y = 0; y < selectsRegistro.length; y++){
					console.log(selectsRegistro[y]);
					
					selectsRegistro[y].addEventListener("focus",function(){
						header.style.display = "none";
					});
	
					selectsRegistro[y].addEventListener("blur",function(){
	
						header.style.display = "inline-block";
	
					})
	
				}
	
			for (var x = 0; x < inputsRegistro.length; x++) {
				inputsRegistro[x].addEventListener("focus",function(){
	
					header.style.display = "none";
	
				});
	
				inputsRegistro[x].addEventListener("blur",function(){
	
					header.style.display = "block";
	
				});	
						
				//console.log(inputsRegistro[x]);
			}
	
			//console.log(header);
	
	
	
	
	
	
	
	});