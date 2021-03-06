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
    loop: false,
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


  // News Carousel
  $('.news-carousel').owlCarousel({
    dots: true,
    nav: true,
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

  // News Carousel
  $('.arnews-carousel').owlCarousel({
    rtl: true,
    dots: true,
    nav: true,
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

  // company Profile Carousel
  $('.product-carousel').owlCarousel({
    loop:true, 
    nav: false, 
    margin:30,
    navSpeed: 1500,
    autoplay: true,
		smartSpeed: 1500,
    responsive:{
      0: {
        items: 2
      },
      576: {
          items: 2
      },
      768: {
          items: 3
      },
      990:{
        items:4
      },
      1140:{
        items:5
      }
    }
  });

  // company Profile Carousel
  $('.product-carousel-rtl').owlCarousel({
    loop:true, 
    nav: false, 
    rtl: true,
    margin:30,
    navSpeed: 1500,
    autoplay: true,
		smartSpeed: 1500,
    responsive:{
      0: {
        items: 2
      },
      576: {
          items: 2
      },
      768: {
          items: 3
      },
      990:{
        items:4
      },
      1140:{
        items:5
      }
    }
  });


  $(".adver-slider").owlCarousel({
    loop: true,
    margin: 20,
    items: 3,
    dots: false,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true
  });

  $('.adver-slider img').on('click', function () {

    var imgurl = $(this).data('imgbigurl');
    var bigImg = $('.adver-img').attr('src');
    if (imgurl != bigImg) {
        $('.adver-img').attr({
            src: imgurl
        });
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

		
  $(".chosen-select").chosen({
    max_selected_options: 5,
    width: '100%'
  }); 
	


})(jQuery);
