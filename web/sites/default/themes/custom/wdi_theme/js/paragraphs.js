(function ($, Drupal) {
    'use strict';

  /////////////////////////////////////
  // Swiper
  /////////////////////////////////////
  var swiper = [];
  $(".paragraph__slider").each(function (i) {
    var sliderId = $(this).attr("id");
    swiper[i] = new Swiper("#" + sliderId + " .slider", {
      speed: 500,
      slidesPerView: 'auto',
      setWrapperSize: true,
      spaceBetween: 0,
      slideClass: 'slider__item',
      wrapperClass: 'slider-container',
      navigation: {
        nextEl: "#" + sliderId + " .slider-control__button.button--next",
        prevEl: "#" + sliderId + " .slider-control__button.button--prev"
      }
    });
  });

  // Responsive
  $(window).on("load resize",function(e){
      var swiperAllowTouchMove;
      if ($(this).width() < 992) {
        swiperAllowTouchMove = true;
      } else {
        swiperAllowTouchMove = false;
      }
      swiper.forEach(function (swiperId) {
          swiperId.params.allowTouchMove = swiperAllowTouchMove;
          swiperId.update();
      });
  });

  /////////////////////////////////////
  // FAQ
  /////////////////////////////////////
  var accordion = [];
  $('.accordion').each(function (i) {
    accordion[i] = $(this);
    accordion[i].find('[data-toggle="collapse"]').click(function () {
      accordion[i].find('.collapse.in').collapse('hide');
    });
  });
})(jQuery, Drupal);
