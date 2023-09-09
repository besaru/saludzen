$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,
	    singleItem:true,
	    autoPlay: 3000,
	});
	$("#testimonial-slider2").owlCarousel({
			paginationSpeed : 500,
			singleItem:true,
			autoPlay: 3000,
	});
	$("#testimonial-slider3").owlCarousel({
			paginationSpeed : 500,
			singleItem:true,
			autoPlay: 3000,
	});
	$("#testimonial-slider4").owlCarousel({
			paginationSpeed : 500,
			singleItem:true,
			autoPlay: 3000,
	});

	function getCompareDate() {
	  var d = new Date(), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
	  if (month.length < 2) month = '0' + month;
	  if (day.length < 2) day = '0' + day;
	  return [year, month, day].join('');
	}

	$('[future-date]').each(function() {
	  if($(this).attr('future-date') < getCompareDate()){
			$(this).remove();
		}else{
			$(this).clone().appendTo( "#clients-logo" );}
	});


	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 4,
		itemsDesktop : [1250,4],
		itemsDesktopSmall : [989,4],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });

});


// Counter
  var contactform =  document.getElementById('contactform2');
  contactform.setAttribute('action', 'https://formsubmit.co/5331cdbc0b96b3ce22ef475bc4ecc02e');
