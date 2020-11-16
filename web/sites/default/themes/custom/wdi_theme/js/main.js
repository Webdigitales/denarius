(function ($, Drupal) {
  'use strict';

  const $navigation = $('#navbar-collapse');
  var navOpen = iSMobileNavOpen();

  if (mobile) {
    mobileNav();

  } else {

  }

  $('.btn-search').on('click', function () {
    $(this).toggleClass('is-active');
    $('.search-dropdown').toggleClass('is-visible');
  });

  AOS.init({
    // Global settings:
    disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 104, // offset (in px) from the original trigger point
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'cubic-bezier(.215,.61,.355,1)', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });

  function iSMobileNavOpen() {
    if ($navigation.hasClass('open')) {
      return true;
    } else {
      return false;
    }
  }

  function mobileNav() {
    $navigation.detach().insertAfter('.dialog-off-canvas-main-canvas');

    $('.navbar-toggle').click(function () {
      if (!navOpen) {
        $(this).toggleClass('nav-is-open');
        $('.dialog-off-canvas-main-canvas').toggleClass('nav-is-open');
        $navigation.toggleClass('open');
      }
    });
  }

  $('.modal-sanglier-booking .close').on('click', function () {
    $('.modal-sanglier-booking').hide('fast');
  });


})(jQuery, Drupal);

