(function ($)
  { "use strict"
  
/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(2000).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });
})(jQuery);
