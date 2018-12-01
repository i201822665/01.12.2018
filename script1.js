		var imagenes=["slider1.jpg","slider2.jpg","slider3.jpg","slider4.jpg","slider5.jpg"];
		var comentario=["Comentario slider1","Comentario slider2","Comentario slider3","Comentario slider4","Comentario slider5"];
		
		var i=0;
		function rotacion(){
			document.getElementById("slider").src="../imagenes/"+imagenes[i];
			//document.getElementsByClassName("mostrar")[0].innerText=comentario[i];
			i++;
			if(i>=imagenes.length) i=0;
				setTimeout("rotacion()",1000);
			
		}

window.onload=rotacion;