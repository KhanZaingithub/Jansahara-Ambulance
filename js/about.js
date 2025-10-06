(function ($) {
  "use strict";
  /*=========================================
    =            Preloader active            =
    ===========================================*/

  jQuery(window).on("load", function () {
    jQuery(".preloader-activate").removeClass("preloader-active");

    setTimeout(function () {
      jQuery(".open_tm_preloader").addClass("loaded");
    });
  });
})(jQuery);
