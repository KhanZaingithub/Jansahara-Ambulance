(function ($) {
  "use strict";

  /*===============================
    =         Wow Active            =
    ================================*/

  new WOW().init();

  /*=============================================
    =       Menu sticky & Scroll to top          =
    =============================================*/
  var windows = $(window);
  var screenSize = windows.width();
  var sticky = $(".header-sticky");
  var $html = $("html");
  var $body = $("body");
  var header = $(".header");

  windows.on("scroll", function () {
    var scroll = windows.scrollTop();
    var headerHeight = sticky.height();

    if (screenSize >= 320) {
      if (scroll < headerHeight) {
        sticky.removeClass("is-sticky");
      } else {
        sticky.addClass("is-sticky");
        header.css("padding", "10px 15px");
      }
    }
  });
  /*----------  Scroll to top  ----------*/
  function scrollToTop() {
    var $scrollUp = $("#scroll-top"),
      $lastScrollTop = 0,
      $window = $(window);

    $window.on("scroll", function () {
      var st = $(this).scrollTop();
      if (st > $lastScrollTop) {
        $scrollUp.removeClass("show");
      } else {
        if ($window.scrollTop() > 200) {
          $scrollUp.addClass("show");
        } else {
          $scrollUp.removeClass("show");
        }
      }
      $lastScrollTop = st;
    });

    $scrollUp.on("click", function (evt) {
      $("html, body").animate({ scrollTop: 0 }, 600);
      evt.preventDefault();
    });
  }
  scrollToTop();

  /*=========================================
    =            Preloader active            =
    ===========================================*/

  windows.on("load", function () {
    $(".preloader-activate").removeClass("preloader-active");
  });

  jQuery(window).on("load", function () {
    setTimeout(function () {
      jQuery(".open_tm_preloader").addClass("loaded");
    }, 500);
  });

  /*=========================================
    =            One page nav active          =
    ===========================================*/

  // var top_offset = $('.navigation-menu--onepage').height() - 60;
  // $('.navigation-menu--onepage ul').onePageNav({
  //     currentClass: 'active',
  //     scrollOffset: top_offset,
  // });

  // var top_offset_mobile = $('.header-area').height();
  // $('.offcanvas-navigation--onepage ul').onePageNav({
  //     currentClass: 'active',
  //     scrollOffset: top_offset_mobile,
  // });

  /*==========================================
    =            mobile menu active            =
    ============================================*/

  $("#mobile-menu-trigger").on("click", function () {
    $("#mobile-menu-overlay").addClass("active");
    $body.addClass("no-overflow");
  });

  $("#mobile-menu-close-trigger").on("click", function () {
    $("#mobile-menu-overlay").removeClass("active");
    $body.removeClass("no-overflow");
  });

  $(".offcanvas-navigation--onepage ul li a").on("click", function () {
    $("#mobile-menu-overlay").removeClass("active");
    $body.removeClass("no-overflow");
  });

  /*Close When Click Outside*/
  // $body.on('click', function(e){
  //     var $target = e.target;
  //     if (!$($target).is('.mobile-menu-overlay__inner') && !$($target).parents().is('.mobile-menu-overlay__inner') && !$($target).is('#mobile-menu-trigger') && !$($target).is('#mobile-menu-trigger i')){
  //         $("#mobile-menu-overlay").removeClass("active");
  //         $body.removeClass('no-overflow');
  //     }
  //     if (!$($target).is('.search-overlay__inner') && !$($target).parents().is('.search-overlay__inner') && !$($target).is('#search-overlay-trigger') && !$($target).is('#search-overlay-trigger i')){
  //         $("#search-overlay").removeClass("active");
  //         $body.removeClass('no-overflow');
  //     }
  // });

  /*=============================================
    =            offcanvas mobile menu            =
    =============================================*/
  var $offCanvasNav = $(".offcanvas-navigation"),
    $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");

  /*Add Toggle Button With Off Canvas Sub Menu*/
  $offCanvasNavSubMenu
    .parent()
    .prepend('<span class="menu-expand"><i></i></span>');

  /*Close Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.slideUp();

  /*Category Sub Menu Toggle*/
  $offCanvasNav.on("click", "li a, li .menu-expand", function (e) {
    var $this = $(this);
    if (
      $this
        .parent()
        .attr("class")
        .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
      ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
    ) {
      e.preventDefault();
      if ($this.siblings("ul:visible").length) {
        $this.parent("li").removeClass("active");
        $this.siblings("ul").slideUp();
      } else {
        $this.parent("li").addClass("active");
        $this
          .closest("li")
          .siblings("li")
          .removeClass("active")
          .find("li")
          .removeClass("active");
        $this.closest("li").siblings("li").find("ul:visible").slideUp();
        $this.siblings("ul").slideDown();
      }
    }
  });

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
  /*======================================
    =       instagram image slider        =     
    ======================================*/

  // $(window).on('load', function(){
  //     $.instagramFeed({
  //         'username': 'portfolio.devitems',
  //         'container': "#instagramFeed",
  //         'display_profile': false,
  //         'display_biography': false,
  //         'display_gallery': true,
  //         'styling': false,
  //         'items': 10,
  //         "image_size": "640",
  //         'margin': 0
  //     });
  // });

  /* ==================================
    =          Option Demo              =
    =====================================*/
  var $demoOption = $(".demo-option-container");

  $(".quick-option").on("click", function (e) {
    e.preventDefault(),
      (function () {
        $demoOption.toggleClass("open");
      })();
  });

  /*=============================================
    =            counter up active            =
    =============================================*/

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  /*===================================
        Svg Icon Draw
    ====================================*/
  var $svgIconBox = $(".single-svg-icon-box");
  $svgIconBox.each(function () {
    var $this = $(this),
      $svgIcon = $this.find(".svg-icon"),
      $id = $svgIcon.attr("id"),
      $icon = $svgIcon.data("svg-icon");
    var $vivus = new Vivus($id, { duration: 100, file: $icon });
    $this.on("mouseenter", function () {
      $vivus.reset().play();
    });
  });

  /*=====================================
    =          Countdown Time Circles     =
    =======================================*/

  $("#DateCountdown").TimeCircles({
    animation: "smooth",
    bg_width: 0.6,
    fg_width: 0.025,
    circle_bg_color: "#eeeeee",
    time: {
      Days: {
        text: "Days",
        color: "#034a26",
        show: true,
      },
      Hours: {
        text: "Hours",
        color: "#034a26",
        show: true,
      },
      Minutes: {
        text: "Minutes",
        color: "#034a26",
        show: true,
      },
      Seconds: {
        text: "Seconds",
        color: "#034a26",
        show: true,
      },
    },
  });

  /*=================================- 
    =        Scroll Up Color Change    =
    ==================================-*/

  $(".slide-scroll-bg")
    .height(".slide-scroll-bg")
    .scrollie({
      scrollOffset: 0,
      scrollingInView: function (elem) {
        console.log(elem);
        var bgColor = elem.data("background");
        $(".bg-body-color").css("background-color", bgColor);
      },
    });

  /*=============================================
    =            light gallery active            =
    =============================================*/

  $(".popup-images").lightGallery();

  $(".video-popup").lightGallery();

  /*=============================================
        showcoupon toggle function
   =============================================*/
  $("#showcoupon").on("click", function () {
    $("#checkout-coupon").slideToggle(500);
  });
  $("#chekout-box-2").on("change", function () {
    $(".ship-box-info").slideToggle("100");
  });

  /*=============================================
    =            reveal footer active            =
    =============================================*/

  var revealId = $(".reveal-footer"),
    $mainWrapper = revealId.closest("#main-wrapper"),
    $window = $(window);
  function footerFixed() {
    var heightFooter = revealId.outerHeight(),
      windowWidth = $window.width();
    if (windowWidth > 991) {
      $mainWrapper.css({
        "padding-bottom": heightFooter + "px",
      });
    } else if (windowWidth <= 991) {
      $mainWrapper.css({
        "padding-bottom": "0px",
      });
    }
  }
  footerFixed();
  $(window).on("resize", function () {
    footerFixed();
  });

  /* ====================================
    =       All Animation For Fade Up      =
    =======================================*/

  /*  $(window).on('load', function () {
        function allAnimation() {
            $('.move-up').css('opacity', 0);
            $('.move-up').waypoint(function () {
                $('.move-up').addClass('animate');
            }, {
                offset: '90%'
            });
        }
        allAnimation();

        function allAnimationx() {
            $('.move-up-x').css('opacity', 0);
            $('.move-up-x').waypoint(function () {
                $('.move-up-x').addClass('animate');
            }, {
                offset: '90%'
            });
        }
        allAnimationx();
    })*/

  /* particles JS */
  if ($("#particles-js").length) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 1000 } },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 5,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: "#b61924",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover",
      },
    });
  }
  /* nasa JS */
  if ($("#nasa-js").length) {
    particlesJS("nasa-js", {
      particles: {
        number: { value: 120, density: { enable: true, value_area: 800 } },
        color: { value: "#008000" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 1,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "right",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 600 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: false, mode: "repulse" },
          onclick: { enable: true, mode: "remove" },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
          repulse: { distance: 400, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });
  }
})(jQuery);
