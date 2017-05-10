$(document).ready(function(){

	var varScroll = false;
	var i = 0;

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

	$("#scroll").click(function(){
		if (varScroll == false) {
			varScroll = true;
			$(this).html("<span class=\"glyphicon glyphicon-stop\"></span> Desactivar Scroll");
		} else {
			varScroll = false;
			$(this).html("<span class=\"glyphicon glyphicon-play\"></span> Activar Scroll");
		}
	    
	});

	$("#masNoti").click(function(){
		if (i == 0){
			cargarJSON(i+1);
			i++;
		} else if (i == 1){
			cargarJSON(i+1);
			i++;
			$("#masNoti").hide();
		} 
	});

	$(window).scroll(function(){
		if (($(window).scrollBottom()==0) && (varScroll)){
			if (i == 0){
				cargarJSON(i+1);
				i++;
			} else if (i == 1){
				cargarJSON(i+1);
				i++;
				$("#masNoti").hide();
			}
		};		
	});

	$.fn.scrollBottom = function() { 
		return $(document).height() - this.scrollTop() - this.height(); 
	};

	function cargarJSON(i){
		fichero = "datos/" + i + ".json";
		$.getJSON(fichero, function(jsonObject) {
	        ponerNoticias(jsonObject);
	    });
	}

	function ponerNoticias(json){
     $.each( json, function(j, item) {

		var noticia_container = $('<div>');
		var img = $('<img>');
		var section = $('<section>');
		var h2  = $('<h2>');
		var datetime = $('<div>');
		var info = $('<div>');
		var p   = $('<p>');
		var imagen = $('<div>');

		var li = $('<li>');
     	var a = $('<a>');

		noticia_container.attr('id', item.id);
		noticia_container.attr('class', 'container-fluid');
		section.attr('class', 'noticias');
		h2.text(item.titulo);
		datetime.attr('class', 'datetime');
		datetime.text(item.datetime);
		info.attr('class', 'informacion');
		p.text(item.desc);
		datetime.attr('class', 'datetime');
		datetime.text(item.datetime);
		img.attr('class', 'img-responsive center-block');
		img.attr('src', item.imgmid);

		h2.appendTo(section);
		datetime.appendTo(section);
		info.appendTo(section);
		p.appendTo(info);
		img.appendTo(imagen);
		imagen.appendTo(section);
		section.appendTo(noticia_container);
     	noticia_container.appendTo('.main-container');

     	a.attr('href', '#'+item.id);
     	a.text(item.nav_element);
     	a.appendTo(li);
     	li.appendTo(".nav");

     }); 
}

});