var indexFileFunctions = {
	initialise : function() {
		$('.nav li').click(function () {
			$(".nav li.active").removeClass('active');
			$(this).addClass('active');
		});

		$('#about-link').click(function(){
			$('#about-section').effect("highlight",{color:"#4682B4"},1000);
		});


		$('#contact-link').click(function(){
			$('#contact-info').effect("highlight",{color:"#4682B4"},1000);
		});

		$('#projects-link').click(function(){
			$('#project-section').show();
		});
	}
}


$( document ).ready(function () {
	indexFileFunctions.initialise();
});