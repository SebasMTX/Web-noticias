$(document).ready(function(){

	var archivosJSON = ["datos/1.json", "datos/2.json"];
	var limite = 0;

// Función ocultar publicidad al hacer scroll en pantalla pequeña //	

	window.onresize = function() {
    	$(window).scroll(function(){
    		if ($(window).width() < 768) {
    			if ($(window).scrollTop() == 0){
					$("#pub").show();
				} else  {
					$("#pub").hide();
				}
    		} else {
    			$("#pub").show();
    		}			
		});	
	}

// Función cargar noticias //	                       Ayuda en el código y reproducido con autorización de kaenguma132 (https://github.com/kaenguma132/pagina-de-consolas)!!!!!!
	
	$("#masNoti").on("click", cargarNoticias);
    $(window).scrollTop(0);
	
	function cargarNoticias()
{
    if(limite < archivosJSON.length)
    {
        $.getJSON(archivosJSON[limite], function(jsonObject){
            var items = [];
            var str;
            $.each(jsonObject, function(i, noti){
                str = "";
                str += "<h2 id='titulo'>" + noti.titulo + "</h2>";
                str += "<p id='enunciado' class='post-contenido text-justify'>" + noti.enunciado + "</p>";
				str += "<img class='img-thumbnail' class='thumb pull-left' src=\"" + noti.imgmid +"\" />";
                str += "<p id='fecha' class='text-right'>" + noti.fecha + "</p>";

                items.push(str);
            });

            $( "<div/>", {
                "class": "news-list",
                html: items.join( "" )
            }).appendTo("#masNotis");
        });
        limite++;
    }
    if(limite >= archivosJSON.length)
    {
        $("#masNoti").off("click", cargarNoticias);
        $("#masNoti").prop("disabled", true);
		alert("Has cargado las últimas tres noticias");
    }
}
});