$(function () {
  'use strict'

  // About Slider js start here
  $('.about_gal').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fa-solid fa-angle-left prev_aro prev_btn"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right nxt_aro next_btn"></i>',
    responsive: [{
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: false,
          arrows: true,
        }
      }
    ]
  });


  // Counter Up js start here
  $('.counter').counterUp({
    delay: 50,
    time: 2000,
  });


  // Comment Slider js start here
  $('.comment_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fa-solid fa-angle-left prev_aro prev_btn"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right nxt_aro next_btn"></i>',
    responsive: [{
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: false,
          arrows: true,
        }
      }
    ]
  });

  // Hamburger Menu js start here
  $(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
      $(this).toggleClass('open');
    });
  });


  // Menu Fixing js start here
  var navOff = $('.navbar').offset().top;

  $(window).scroll(function () {

    var scrolling = $(this).scrollTop();

    if (scrolling > 400) {
      $('.navbar').addClass('menu_fix');
    } else {
      $('.navbar').removeClass('menu_fix');
    }

  });

  // Work venobox js start
  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
  });

});