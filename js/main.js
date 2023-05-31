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

    // rating
    var rating = getElement(".js__rating");

    // show hide sapo popup image
    var popupImageItems = getAllElement(".js__popupImageItem");

    // show popup image
    var photoBoxs = getAllElement(".js__photoBox");

    // show all topic mb
    var itemPopular = getAllElement(".js__popularItemmb");

    // slider six items
    const sixSliders = getAllElement(".js_sixItems");
    // slider four items
    const fourSliders = getAllElement(".js_fourItems");
    // slider six items
    const threeSliders = getAllElement(".js_threeItems");

    const app = {
        // su ly cac su kien
        handleEvent: function () {
            const _this = this;

            // when click back top
            backTop &&
                (backTop.onclick = function () {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                });
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
            dropdownSubMenu &&
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
            popups &&
                popups.forEach((popup) => {
                    var popupShow = popup.querySelector(".js__showPopup");
                    var popupWrapper = popup.querySelector(".js__popupWrapper");
                    var popupClose = popup.querySelector(".js__closePopup");
                    var popupOverlay = popup.querySelector(".js__overlay");

                    // rating
                    if (rating) {
                        var ratingCount =
                            rating.querySelector(".js__ratingCount");
                        var ratingGroup =
                            rating.querySelector(".js__ratingGroup");
                        var ratingSubmit =
                            rating.querySelector(".js__ratingSubmit");
                        var increaseSize =
                            rating.querySelector(".js__increaseSize");
                        var inputList = ratingGroup.querySelectorAll(
                            "input[type='radio'][name='rating']"
                        );
                    }
                    if (inputList) {
                        inputList.forEach((input) => {
                            input.onchange = function (e) {
                                if (e.target.checked) {
                                    switch (
                                        ((ratingCount.innerText =
                                            e.target.value),
                                        ratingSubmit.classList.add("isCheck"),
                                        Number.parseInt(q.target.value))
                                    ) {
                                        case 1:
                                            increaseSize.style.transform =
                                                "translateX(-50%) scale(1.05)";
                                            break;
                                        case 2:
                                            increaseSize.style.transform =
                                                "translateX(-50%) scale(1.1)";
                                            break;
                                        case 3:
                                            increaseSize.style.transform =
                                                "translateX(-50%) scale(1.15)";
                                            break;
                                        case 4:
                                            increaseSize.style.transform =
                                                " translateX(-50%) scale(1.2)";
                                            break;
                                        case 5:
                                            increaseSize.style.transform =
                                                "translateX(-50%) scale(1.25)";
                                            break;
                                        case 6:
                                            increaseSize.style.transform =
                                                "translateX(-50%) scale(1.3)";
                                            break;
                                        case 7:
                                            increaseSize.style.transform =
                                                "translateX(-50%) scale(1.35)";
                                            break;
                                        case 8:
                                            increaseSize.style.transform =
                                                "translateX(-50%) scale(1.4)";
                                            break;
                                        case 9:
                                            increaseSize.style.transform =
                                                "translateX(-50%) scale(1.45)";
                                            break;
                                        case 10:
                                            increaseSize.style.transform =
                                                "translateX(-50%) scale(1.5)";
                                            break;
                                        default:
                                            increaseSize.style.transform =
                                                "translateX(-50%) scale(1)";
                                    }
                                }
                            };
                        });
                    }

                    popupShow.onclick = function () {
                        popupWrapper.classList.add("active");
                        document.querySelector("body").classList.add("hidden");
                    };

                    popupClose.onclick = function () {
                        if (popupWrapper.matches(".active")) {
                            popupWrapper.classList.remove("active");
                        }
                        if (ratingSubmit.matches(".isCheck")) {
                            ratingSubmit.classList.remove("isCheck");
                        }
                        if (rating) {
                            inputList.forEach((input) => {
                                input.checked = false;
                            });
                            increaseSize.style.transform =
                                "translateX(-50%) scale(1)";
                            ratingCount.innerText = "?";
                        }
                        document
                            .querySelector("body")
                            .classList.remove("hidden");
                    };

                    popupOverlay.onclick = function () {
                        popupWrapper.matches(".active") &&
                            popupWrapper.classList.remove("active");
                        document
                            .querySelector("body")
                            .classList.remove("hidden");
                    };
                });

            // show hide sapo popup image
            popupImageItems &&
                popupImageItems.forEach((item) => {
                    var sapo = item.querySelector(".js__popupImageSapo"),
                        hideSapo = item.querySelector(".js__closePopupSapo"),
                        showSapo = item.querySelector(".js__showPopupSapo");

                    hideSapo.onclick = function () {
                        sapo.classList.add("hide");
                        showSapo.classList.add("show");
                    };
                    showSapo.onclick = function () {
                        sapo.classList.remove("hide");
                        showSapo.classList.remove("show");
                    };
                });

            // show popup image
            photoBoxs &&
                photoBoxs.forEach((item) => {
                    var showPopupWrappers = item.querySelectorAll(
                        ".js__showPopupWrapper"
                    );
                    var popupWrapper = item.querySelector(
                        ".js__popupImageWrapper"
                    );
                    var closePopupWrapper = item.querySelector(
                        ".js__closePopupImage"
                    );
                    showPopupWrappers &&
                        showPopupWrappers.forEach((itemImage) => {
                            itemImage.onclick = function () {
                                popupWrapper.classList.add("active");
                            };
                        });
                    if (closePopupWrapper) {
                        closePopupWrapper.onclick = function () {
                            popupWrapper.classList.remove("active");
                        };
                    }
                });

            // show all topic mb
            itemPopular &&
                itemPopular.forEach((item) => {
                    var showListPopular = item.querySelector(
                        ".js__showListPopularMb"
                    );
                    var listPopular = item.querySelector(".js__listPopularMb");

                    showListPopular.onclick = function () {
                        listPopular.classList.toggle("active");
                    };
                });
        },

        // slider primary
        sliderPrimary: function () {
            var e = new Swiper(".primaryRight", {
                slidesPerView: 3,
                slidesPerGroup: 1,
                direction: "vertical",
                // loop: true,
                // freeMode: true,
                rewind: true,
                cssMode: true,
                mousewheel: true,
                keyboard: true,
            });
            new Swiper(".primaryLeft", {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                thumbs: { swiper: e },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        },
        // slider six item
        sliderSixItems: function () {
            sixSliders &&
                sixSliders.forEach((sixSlider) => {
                    var next = sixSlider.querySelector(".swiper-button-next");
                    var prev = sixSlider.querySelector(".swiper-button-prev");
                    new Swiper(sixSlider, {
                        slidesPerView: 2.3,
                        spaceBetween: 16,
                        slidesPerGroup: 2,
                        navigation: {
                            nextEl: next,
                            prevEl: prev,
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
                });
        },
        // slider four item
        sliderFourItems: function () {
            fourSliders &&
                fourSliders.forEach((fourSlider) => {
                    var next = fourSlider.querySelector(".swiper-button-next");
                    var prev = fourSlider.querySelector(".swiper-button-prev");
                    new Swiper(fourSlider, {
                        slidesPerView: 2.3,
                        spaceBetween: 16,
                        slidesPerGroup: 2,
                        navigation: {
                            nextEl: next,
                            prevEl: prev,
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
                });
        },
        // slider three item
        sliderThreeItems: function () {
            threeSliders &&
                threeSliders.forEach((threeSlider) => {
                    var next = threeSlider.querySelector(".swiper-button-next");
                    var prev = threeSlider.querySelector(".swiper-button-prev");
                    new Swiper(threeSlider, {
                        slidesPerView: 1.2,
                        spaceBetween: 16,
                        slidesPerGroup: 1,
                        navigation: {
                            nextEl: next,
                            prevEl: prev,
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
                });
        },
        // slider one item
        sliderOneItems: function () {
            photoBoxs &&
                photoBoxs.forEach((item) => {
                    var pagi = item.querySelector(".swiper-pagination");
                    var slider = item.querySelector(".js__oneItems");
                    var next = slider.querySelector(".swiper-button-next");
                    var prev = slider.querySelector(".swiper-button-prev");
                    new Swiper(slider, {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        slidesPerGroup: 1,
                        effect: "fade",
                        pagination: {
                            el: pagi,
                            type: "fraction",
                        },
                        navigation: {
                            nextEl: next,
                            prevEl: prev,
                        },
                    });
                });
        },
        // scroll top
        scrollFunc: function () {
            if (backTop) {
                if (
                    document.body.scrollTop > 600 ||
                    document.documentElement.scrollTop > 600
                ) {
                    backTop.style.top = "2.25rem";
                } else {
                    backTop.style.top = "-2.25rem";
                }
            }
            backTop &&
                (backTop.style.top =
                    600 < document.body.scrollTop ||
                    600 < document.documentElement.scrollTop
                        ? "2.25rem"
                        : "-2.25rem");
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
            // slider one item
            this.sliderOneItems();
            // // slider three item
            this.sliderThreeItems();
            // // slider four item
            this.sliderFourItems();
            // // slider six item
            this.sliderSixItems();
        },
    };

    app.start();
});
