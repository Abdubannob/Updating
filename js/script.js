// Owlcarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:false,
    margin:0,
    nav:true,
	autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    center: true,
    navText: [
	    "<i class='fa fa-angle-left'></i>",
	    "<i class='fa fa-angle-right'></i>"
	],
    responsive:{
        0:{
            items:1
        },
        330:{
            items:2
        },
        660:{
            items:3
        },
        1000:{
            items:4
        }
    }
  });
});

$(document).ready(function(){
    $(".slider").owlCarousel({
        loop:true,
      margin:0,
      nav:true,
      autoplay:false,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      center: false,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          330:{
              items:2
          },
          660:{
              items:3
          },
          1000:{
              items:4
          }
      }
    });
  });
  
  