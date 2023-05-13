document.addEventListener("DOMContentLoaded", function () {
    // get element
    function getElement(selector) {
        var element = document.querySelector(selector);
        return element;
    }
    // get all element
    function getAllElement(selector) {
        var elements = document.querySelectorAll(selector);
        return elements;
    }

    // add show and scroll body hidden
    function showElementHiddenBody(item, action) {
        item.onclick = function () {
            this.classList.toggle(action);
            document.querySelector("body").classList.toggle("hidden");
        };
    }
    // add show item
    function showItem(item, action) {
        item.onclick = function () {
            this.classList.toggle(action);
        };
    }
    // add show items
    function showItemList(items, action) {
        items.forEach((item) => {
            item.onclick = function () {
                this.classList.toggle(action);
            };
        });
    }
    // body
    var doc = getElement("body");
    // back top
    var backTop = getElement("#back-top");

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
