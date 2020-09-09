jQuery(document).on('ready', function() {

  if( jQuery('body #pagos-multas').length > 0) {

    var swiper = new Swiper('#pagos-multas .swiper-container', {
      slidesPerView: 4,

      navigation: {
        nextEl: '#pagos-multas .carousel--next',
        prevEl: '#pagos-multas .carousel--prev',
      },

      breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }
    })

    jQuery('.pagos-multas--content-carousel--item-carousel-js').on('click', function() {
      jQuery('.pagos-multas--content-carousel--item-carousel-js').removeClass('pagos-multas--content-carousel--item-carousel-active').addClass('pagos-multas--content-carousel--item-carousel')
      jQuery(this).removeClass('pagos-multas--content-carousel--item-carousel').addClass('pagos-multas--content-carousel--item-carousel-active')

      jQuery('.pagos-multas-content-show-item').hide()
      jQuery('.' + jQuery(this).attr('data-class')).show()
    })

    jQuery('.pagos-multas--content-nav--content-nav-items--nav-item-js').on('click', function() {
      jQuery('.pagos-multas--content-nav--content-nav-items--nav-item-js').removeClass('pagos-multas--content-nav--content-nav-items--nav-item-active').addClass('pagos-multas--content-nav--content-nav-items--nav-item')
      jQuery(this).removeClass('pagos-multas--content-nav--content-nav-items--nav-item').addClass('pagos-multas--content-nav--content-nav-items--nav-item-active')

      jQuery('.pagos-multas-content-show-nav').hide()
      jQuery('.' + jQuery(this).attr('data-class')).show()
    })

    jQuery('.pagos-multas--content-nav--content-nav-items--nav-item-js a').on('click', function (e) {
      e.preventDefault();
    })

  }
})
