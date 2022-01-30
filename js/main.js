/* =================================
------------------------------------
	Cryptocurrency - Landing Page Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.responsive-bar').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

	
	/*------------------
		Review
	--------------------*/
	var review_meta = $(".review-meta-slider");
    var review_text = $(".review-text-slider");


    review_text.on('changed.owl.carousel', function(event) {
		review_meta.trigger('next.owl.carousel');
	});

	review_meta.owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 3,
		center: true,
		margin: 20,
		autoplay: true,
		mouseDrag: false,
	});


	review_text.owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		items: 1,
		margin: 20,
		autoplay: true,
		navText: ['<i class="ti-angle-left"><i>', '<i class="ti-angle-right"><i>'],
		animateOut: 'fadeOutDown',
    	animateIn: 'fadeInDown',
	});



	 /*------------------
		Contact Form
	--------------------*/
    $(".check-form").focus(function () {
        $(this).next("span").addClass("active");
    });
    $(".check-form").blur(function () {
        if ($(this).val() === "") {
            $(this).next("span").removeClass("active");
        }
    });



    function Currency(){
    		y = document.getElementById("converter").value;
    		return y;
    	}
     
    function Calculate(){
    	y = Currency();
     
    	x = document.getElementById("value1").value;
     
    	if(x == ""){
    		document.getElementById("value2").value = "";
    	}else{
    		switch(y){
    			case "Dollar":
    				document.getElementById("value2").value = x * 51.89;
    			break;
     
    			case "Pound":
    				document.getElementById("value2").value = x * 72.39;
    			break;
     
    			case "Euro":
    				document.getElementById("value2").value = x * 63.84;
    			break;
     
    			case "Yen":
    				document.getElementById("value2").value = x * 0.49;
    			break;
     
    			case "Yuan":
    				document.getElementById("value2").value = x * 8.20;
    			break;
    		}
    	}
    }

})(jQuery);

