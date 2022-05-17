
$(document).ready(function(){
  $('.yearly').click(function(){
    $('.hide').hide();
    $(".show").show();
  });
  $('.monthly').click(function(){
    $('.hide').show();
    $(".show").hide();
  });

	$('.fa-bars').click(function(){
		$('.menu-area').slideToggle();
	});
	  $('.Carousel-area').owlCarousel({
      loop: true,
      dots:false,
      navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
      nav:true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        }
      }
    })
})
