$(document).ready(function() {

	$('body').scrollspy({ target: '.navbar-default' })


	// JPRELOADER
	$('body').jpreLoader({
		loaderVPos: '50%'
	});

	// WOW
  	new WOW().init();

 
	// ADD/REMOVE CLASS
	$(document).on("scroll",function(){
		if($(document).scrollTop()>100) {
	    	$(".navbar").addClass("navbar-small");
	    } else {
	        $(".navbar").removeClass("navbar-small");
	    }
	});

	// SMOOTH SCROLL
	$('a[href*=#]:not([href=#])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html,body').animate({
	        scrollTop: target.offset().top
	      }, 1000, 'easeInOutExpo');
	      return false;
	    }
	  }
	});

	// TOP BAR
	$(document).on("scroll",function(){
	    if($(document).scrollTop()>10){
	        $("#menu").addClass("small");
	    } else{
	        $("#menu").removeClass("small");
	    }
	});

	// CLOSE MENU ONCLICK
	$('.navbar-collapse ul.nav li a').click(function() {
	  	$('.navbar-collapse').removeClass('in');
	});


	// CAROUSEL
  	$(".carousel").owlCarousel({
    	autoplay: true,
    	center: true,
    	dotsEach: 1,
    	items: 1,
    	loop: true
  	});

  	// PORTFOLIO
  	$('#portfolio-container').mixItUp();	

	// SKILLS SECTION
	  $('#skills').waypoint(function(){   
	    $('.html5').each(function(){
	      $(this).easyPieChart({
	        size: 150,
	        animate: 3000,
	        scaleColor: false,
	        lineCap: 'square',
	        barColor: '#e74c3c',
	        trackColor: 'transparent',
	        lineWidth: 12,
	        onStep: function(from, to, percent) {
	          this.el.children[0].innerHTML = Math.round(percent);
	        }
	      });
	    });
	    $('.css3').each(function(){
	      $(this).easyPieChart({
	        size: 150,
	        animate: 3000,
	        scaleColor: false,
	        lineCap: 'square',
	        barColor: '#e67e22',
	        trackColor: 'transparent',
	        lineWidth: 12,
	        onStep: function(from, to, percent) {
	          this.el.children[0].innerHTML = Math.round(percent);
	        }
	      });
	    });         
	    $('.javascript').each(function(){
	      $(this).easyPieChart({
	        size: 150,
	        animate: 3000,
	        scaleColor: false,
	        lineCap: 'square',
	        barColor: '#3498db',
	        trackColor: 'transparent',
	        lineWidth: 12,
	        onStep: function(from, to, percent) {
	          this.el.children[0].innerHTML = Math.round(percent);
	        }
	      });
	    });         
	    $('.php').each(function(){
	      $(this).easyPieChart({
	        size: 150,
	        animate: 3000,
	        scaleColor: false,
	        lineCap: 'square',
	        barColor: '#9b59b6',
	        trackColor: 'transparent',
	        lineWidth: 12,
	        onStep: function(from, to, percent) {
	          this.el.children[0].innerHTML = Math.round(percent);
	        }
	      });
	    });           
	  // },{offset:'70%'});
	  },{offset:'50%'});

});