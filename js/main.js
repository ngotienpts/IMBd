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

    // show menu pc
    var menuPc = getElement(".js_clickShowMenu");
    var closeMenuPc = getElement(".js_closeMenu");

    // show sub menu
    var dropdownSubMenu = getAllElement(".js_dropDown");
    var subMenu = getElement(".js_clickShowMenuMb");

    // search mb
    var searchMb = getElement(".js_searchMb");

    // popup
    var popups = getAllElement(".js__popupField");

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

            // show menu pc
            if (menuPc) {
                var item = menuPc.parentElement.querySelector(".js_showMenu");
                menuPc.onclick = function () {
                    item.classList.add("show");
                    document.querySelector("body").classList.add("hidden");
                };

                closeMenuPc.onclick = function () {
                    item.classList.remove("show");
                    document.querySelector("body").classList.remove("hidden");
                };
            }
            // show sub menu
            if (subMenu) {
                var closeSubMenu = getElement(".js_closeSubMenu");
                var overlay = getElement(".js_overlay");
                var parentBox = subMenu.parentElement;

                subMenu.onclick = function () {
                    this.parentElement.classList.add("active");
                    document.querySelector("body").classList.add("hidden");
                };
                closeSubMenu.onclick = function () {
                    parentBox.classList.remove("active");
                    document.querySelector("body").classList.remove("hidden");
                };
                overlay.onclick = function () {
                    parentBox.classList.remove("active");
                    document.querySelector("body").classList.remove("hidden");
                };
            }
            // dropdown sub menu
            if (dropdownSubMenu) {
                dropdownSubMenu.forEach((item) => {
                    var parent = item.parentElement;
                    var nextEle = parent.querySelector(".js_listSubMenu");
                    item.onclick = function () {
                        parent.classList.toggle("active");
                        if (nextEle.style.maxHeight) {
                            nextEle.style.maxHeight = null;
                        } else {
                            nextEle.style.maxHeight =
                                nextEle.scrollHeight + "px";
                        }
                    };
                });
            }

            // search mb
            if (searchMb) {
                var closeSearchMb = getElement(".js_closeSearchMb");
                var formSearchMb = getElement(".js_formSearchMb");
                searchMb.onclick = function () {
                    formSearchMb.classList.add("active");
                };
                closeSearchMb.onclick = function () {
                    formSearchMb.classList.remove("active");
                };
            }

            // popup
            if (popups) {
                popups.forEach((popup) => {
                    var popupShow = popup.querySelector(".js__showPopup");
                    var popupWrapper = popup.querySelector(".js__popupWrapper");
                    var popupClose = popup.querySelector(".js__closePopup");

                    popupShow.onclick = function () {
                        popupWrapper.classList.add("active");
                        document.querySelector("body").classList.add("hidden");
                    };

                    popupClose.onclick = function () {
                        if (popupWrapper.matches(".active")) {
                            popupWrapper.classList.remove("active");
                        }
                        document
                            .querySelector("body")
                            .classList.remove("hidden");
                    };
                });
            }
        },

        // slider primary
        sliderPrimary: function () {
            var swiper = new Swiper(".primaryRight", {
                slidesPerView: 3,
                slidesPerGroup: 1,
                direction: "vertical",
                loop: true,
                freeMode: true,
            });
            var swiper2 = new Swiper(".primaryLeft", {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                thumbs: {
                    swiper: swiper,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        },
        // slider six item
        sliderSixItems: function () {
            var swiper = new Swiper(".js_sixItems", {
                slidesPerView: 2.3,
                spaceBetween: 16,
                slidesPerGroup: 2,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 4.3,
                        slidesPerGroup: 4,
                        spaceBetween: 16,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 16,
                        slidesPerGroup: 6,
                    },
                    1200: {
                        slidesPerView: 6,
                        spaceBetween: 25,
                        slidesPerGroup: 6,
                    },
                },
            });
        },
        // slider four item
        sliderFourItems: function () {
            var swiper = new Swiper(".js_fourItems", {
                slidesPerView: 2.3,
                spaceBetween: 16,
                slidesPerGroup: 2,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 2.3,
                        slidesPerGroup: 4,
                        spaceBetween: 16,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                        slidesPerGroup: 6,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                        slidesPerGroup: 6,
                    },
                },
            });
        },
        // slider three item
        sliderThreeItems: function () {
            var swiper = new Swiper(".js_threeItems", {
                slidesPerView: 1.2,
                spaceBetween: 16,
                slidesPerGroup: 1,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 2.2,
                        spaceBetween: 16,
                        slidesPerGroup: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 16,
                        slidesPerGroup: 3,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                        slidesPerGroup: 3,
                    },
                },
            });
        },
        // scroll top
        scrollFunc: function () {
            if (backTop) {
                if (
                    document.body.scrollTop > 600 ||
                    document.documentElement.scrollTop > 600
                ) {
                    // backTop.style.opacity = 1;
                    // backTop.style.visibility = "visible";
                    backTop.style.top = "2.25rem";
                } else {
                    // backTop.style.opacity = 0;
                    // backTop.style.visibility = "hidden";
                    backTop.style.top = "-2.25rem";
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
            // slider primary
            this.sliderPrimary();
            // slider three item
            this.sliderThreeItems();
            // slider four item
            this.sliderFourItems();
            // slider six item
            this.sliderSixItems();
        },
    };

    app.start();
});
