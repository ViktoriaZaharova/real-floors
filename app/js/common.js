$('.select-menu').selectmenu();

$('.catalog-item').hover(function () {
    $(this).addClass('active');
    $('.header-dropDown').fadeIn();
});

$('.menu-dropDown__item').hover(function () {
    $('.menu-dropDown__item').removeClass('active');
    $(this).addClass('active').parents('.header-dropDown').addClass('open');
});
//
$('.menu-dropDown-submenu__item').hover(function () {
    $('.menu-dropDown-submenu__item').removeClass('active');
    $(this).addClass('active').parents('.menu-dropDown__item').addClass('active');
});

$(document).mouseout(function (e) { // событие клика по веб-документу
    var div = $(".catalog-item"); // тут указываем ID элемента
    var btn = $('.header-dropDown');
    if (!div.is(e.target) // если клик был не по нашему блоку
        && !btn.is(e.target) && btn.has(e.target).length === 0) {
        div.removeClass('active');
        btn.fadeOut();
    }
});

$(document).mouseout(function (e) { // событие клика по веб-документу
    var div = $(".menu-dropDown__item"); // тут указываем ID элемента
    var blockParent = $('.header-dropDown');
    if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass('active');
        blockParent.removeClass('open');
    }
});

$('.main-home__slider').slick({
    slidesToShow: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    fade: true
});

$('.staff-slider').slick({
    slidesToShow: 4,
    variableWidth: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    appendArrows: '.staff-slider__nav',
    infinite: false,
    appendDots: '.staff-slider__dots'
});

$('.reviews-slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    appendArrows: '.reviews-slider__nav',
    appendDots: '.reviews-slider__dots'
});

$('.popular-category-slider').slick({
    slidesToShow: 4,
    variableWidth: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    appendArrows: '.popular-category-slider__nav',
    appendDots: '.popular-category-slider__dots'
});

$('.article-slider').slick({
    slidesToShow: 1,
    appendArrows: '.article-slider__nav',
    prevArrow: '<button type="button" class="slick-prev">' +
        '<svg width="8" height="14" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M0.386377 7.38366L6.85102 13.8483C7.06504 14.055 7.40607 14.0491 7.61277 13.835C7.81441 13.6263 7.81441 13.2953 7.61277 13.0866L1.52899 7.00279L7.61277 0.919022C7.82309 0.708668 7.82309 0.367633 7.61277 0.157279C7.40238 -0.0530424 7.06138 -0.0530425 6.85103 0.157279L0.386377 6.62192C0.176055 6.8323 0.176055 7.1733 0.386377 7.38366Z"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next">' +
        '<svg width="8" height="14" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M7.61362 6.61634L1.14898 0.151707C0.934961 -0.054985 0.593926 -0.0490507 0.387234 0.164964C0.185592 0.373739 0.185592 0.704704 0.387234 0.913448L6.47101 6.99721L0.387231 13.081C0.176909 13.2913 0.176909 13.6324 0.387231 13.8427C0.597616 14.053 0.93862 14.053 1.14897 13.8427L7.61362 7.37809C7.82394 7.1677 7.82394 6.8267 7.61362 6.61634Z"/>\n' +
        '</svg>\n</button>',
});

$(".article-slider").on('afterChange', function(event, slick, currentSlide){
    $(".cp").text(currentSlide<10?`0${currentSlide+1}`:currentSlide+1);
});

$("body").on("click", ".btn-scroll-top", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

$('.popular-category__box').click(function () {
    $(this).toggleClass('click');
})

// Menu Tachscrin. если есть выпадающий список по hover. Первый клик-выпадает меню, второй клик-переход по ссылке
function isTouchDevice() {
    return typeof window.ontouchstart !== 'undefined';
}

jQuery(document).ready(function () {
    /* If mobile browser, prevent click on parent nav item from redirecting to URL */
    if (isTouchDevice()) {
        // 1st click, add "clicked" class, preventing the location change. 2nd click will go through.
        jQuery(".top-menu__item--parent > a").click(function (event) {
            // Perform a reset - Remove the "clicked" class on all other menu items
            jQuery(".top-menu__item--parent > a").not(this).removeClass("clicked");
            jQuery(this).toggleClass("clicked");
            if (jQuery(this).hasClass("clicked")) {
                event.preventDefault();
            }
        });
    }
});
// Menu Tachscrin end
// new line

