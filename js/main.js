(function ($) {
  "use strict";
  /*======================================
    =       Countdown Activation          =     
    ======================================*/
  const speed = 5; // The lower the slower
  $(".counter").each(function () {
    const $counter = $(this);

    const updateCount = function () {
      const target = +$counter.data("target");
      const count = +$counter.text();

      const inc = speed;

      if (count < target) {
        $counter.text(count + inc);
        setTimeout(updateCount, 2);
      } else {
        $counter.text(target);
      }
    };

    updateCount();
  });
  /* =====================================
        Fullpage Scroll Animation   
    ======================================*/
  if ($("#fullpage").length) {
    $("#fullpage").fullpage({
      scrollBar: false,
      navigation: true,
      loopBottom: false,
      sectionSelector: "section",
      scrollingSpeed: 1000,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      afterLoad: function () {
        var activeSetion = $(".fp-viewing-" + 3);
        activeSetion.addClass("tm-one-page-footer-expanded");
      },
    });
  }
})(jQuery);
