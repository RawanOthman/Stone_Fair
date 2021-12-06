(function($) {
  "use strict";


  // NAVIGATION
  var responsiveNav = $('#responsive-nav'),
    menuList = $('#responsive-nav .menu-nav .menu-list');

  $(document).click(function(event) {
    if (!$(event.target).closest(responsiveNav).length) {
      if (responsiveNav.hasClass('open')) {
        responsiveNav.removeClass('open');
        $('#navigation').removeClass('shadow1');
      } else {
        if ($(event.target).closest('.nav-toggle > button').length) {
          if (!menuList.hasClass('open')) {
            menuList.addClass('open');
          }
          $('#navigation').addClass('shadow1');
          responsiveNav.addClass('open');
        }
      }
    }
  });


  // HOME SLICK
  $('#home-slick').slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    dots: true,
    arrows: true,
  });

  $('.gallery-slick').slick({
    autoplay: true,
    infinite: true,
    speed: 100,
    dots: true,
    arrows: false,
  });

  $('.gallery-slick-ar').slick({
    autoplay: true,
    rtl: true,
    infinite: true,
    speed: 100,
    dots: true,
    arrows: false,
  });


  // Company Carousel
  $('.company-carousel').owlCarousel({
    loop:true, 
    rtl: true,
    nav: false, 
    navSpeed: 1500,
    autoplay: true,
		smartSpeed: 1500,
    responsive:{
      0:{
        items:3
      },
      480:{
        items:4
      },
      640:{
        items:5
      },
      990:{
        items:6
      },
      1140:{
        items:6
      }
    }
  });

  // Country Carousel
  $('.country-carousel').owlCarousel({
    loop: true,
    rtl: true,
    dots: true,
    nav: true,
    smartSpeed: 1500,
    dotsSpeed: 1500,
    dragEndSpeed: 1500,
    navSpeed: 1500,
    autoplay: true,
    singleItem: true,
    responsive:{
      0:{
        items:6
      },
      480:{
        items:6
      },
      640:{
        items:8
      },
      990:{
        items:10
      },
      1140:{
        items:12
      }
    }
  });

  // company Profile Carousel
  $('.certificate-carousel').owlCarousel({
    loop:true, 
    rtl: true,
    nav: false, 
    margin:30,
    navSpeed: 1500,
    autoplay: true,
		smartSpeed: 1500,
    responsive:{
      0:{
        items:2
      },
      480:{
        items:2
      },
      640:{
        items:3
      },
      990:{
        items:4
      },
      1140:{
        items:5
      }
    }
  });


  // News
  $(window).on("load",function(){
    var $container = $('.isotope-wrapper');
    $container.isotope({ itemSelector: '.isotope-item', layoutMode: 'masonry' });
  });
  $('.switch-field').on( 'click', 'input', 'change', function(){
    var selector = $(this).attr('data-filter');
    $('.isotope-wrapper').isotope({ filter: selector });
  });


  // HOME SLICK
  $('#home-company').slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    dots: true,
    arrows: true,
  });

  $('#home-company-ar').slick({
    autoplay: true,
    infinite: true,
    rtl: true,
    speed: 300,
    dots: true,
    arrows: true,
  });


  // company Profile Carousel
  $('.companyProduct-carousel').owlCarousel({
    loop:false, 
    rtl: true,
    nav: false, 
    margin:30,
    navSpeed: 1500,
    autoplay: true,
		smartSpeed: 1500,
    responsive:{
      0:{
        items:1
      },
      480:{
        items:2
      },
      640:{
        items:2
      },
      990:{
        items:3
      },
      1140:{
        items:4
      }
    }
  });


  // Smooth scroll animation
	$('.mainmenu li a, .nav-link').on('click', function () {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
		  var $target = $(this.hash);
		  $target = $target.length && $target
		  || $('[name=' + this.hash.slice(1) +']');
		  if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html,body')
			.animate({scrollTop: targetOffset}, 1000);
		   return false;
		  }
		}
	});

  // portfolio filter
  $('.portfolio-filter li').on('click', function () {
      $('.portfolio-filter li').removeClass('active');
      $(this).addClass('active');
  });
  if ($('.portfolio-gallery').length > 0) {
      var containerEl = document.querySelector('.portfolio-gallery');
      var mixer = mixitup(containerEl);
  }

})(jQuery);
