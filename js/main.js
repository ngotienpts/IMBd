document.addEventListener("DOMContentLoaded", function () {
  // back top
  var backTop = document.querySelector("#back-top");

  // width document
  var widthDoc = document.querySelector("body");

  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;

      // when click back top
      if (backTop) {
        backTop.onclick = function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        };
      }
    },

    // media
    sliderMedia: function () {
      var swiper = new Swiper(".mySwiperMediaSecondary", {
        slidesPerView: 2,
        slidesPerGroup: 1,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "vertical",
        mousewheel: true,
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        // breakpoints: {
        //   768: {
        //     slidesPerView: 2,
        //     spaceBetween: 0,
        //     slidesPerGroup: 1,
        //   },
        // },
      });
      var swiper2 = new Swiper(".mySwiperMediaPrimary", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        thumbs: {
          swiper: swiper,
        },
      });
    },
    // scroll top
    scrollFunc: function () {
      if (backTop) {
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          backTop.style.opacity = 1;
          backTop.style.visibility = "visible";
        } else {
          backTop.style.opacity = 0;
          backTop.style.visibility = "hidden";
        }
      }
    },

    // window scroll
    windowScroll: function () {
      var _this = this;
      window.onscroll = function () {
        // scroll top
        _this.scrollFunc();
      };
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // window scroll
      this.windowScroll();
    },
  };

  app.start();
});
