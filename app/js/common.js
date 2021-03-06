$('.select-menu').selectmenu();

$('.dropDown-wrapper').click(function () {
    $(this).find('.dropDown-container').fadeToggle();
});

$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".dropDown-wrapper"); // тут указываем ID элемента
    var btn = $('.dropDown-container');
    if (!div.is(e.target) // если клик был не по нашему блоку
        && !btn.is(e.target) && btn.has(e.target).length === 0
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        // div.fadeOut(); // скрываем его
        btn.fadeOut();
    }
});

$('.main-home__slider').slick({
    slidesToShow: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    fade: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                arrows: false
            }
        }
    ]
});

$('.staff-slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    appendArrows: '.staff-slider__nav',
    infinite: true,
    appendDots: '.staff-slider__dots',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                appendArrows: '.staff-slider',
            }
        }
    ]
});

$('.reviews-slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    appendArrows: '.reviews-slider__nav',
    appendDots: '.reviews-slider__dots',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                appendArrows: '.reviews-slider',
            }
        }
    ]
});

$('.popular-category-slider').slick({
    slidesToShow: 4,
    variableWidth: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    appendArrows: '.popular-category-slider__nav',
    appendDots: '.popular-category-slider__dots',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                appendArrows: '.popular-category-slider',
            }
        }
    ]
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


// slick active
// $('.products-tabs').slick({
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     arrows: false,
//     variableWidth: true,
//     centerMode: true
// });



$('.btn-burger').click(function () {
   $('.mobile-menu').fadeIn();
});

$('.btn-close').click(function () {
    $('.mobile-menu').fadeOut();
});

$('.form-search-mobile').click(function (e) {
    e.preventDefault();
    $('.form-search-pc').fadeIn();
    $('.form-search-mobile').fadeOut();
});


$(window).on('load resize', function() {
    if ($(window).width() < 831) {
        $(document).mouseup(function (e) { // событие клика по веб-документу
            var div = $(".form-search-pc"); // тут указываем ID элемента
            var btn = $('.form-search-mobile');
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.fadeOut();
                btn.fadeIn();
            }
        });
    }

    if ($(window).width() < 576) {
        $('.products-tabs:not(.slick-initialized)').slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            arrows: false,
            variableWidth: true,
            centerMode: true,
            adaptiveHeight: true
        });
    } else {
        $(".products-tabs.slick-initialized").slick("unslick");
    }
});

$('ul.tabs__caption').on('click', 'li:not(.active)', function () {

    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    $('.products-tabs').slick('setPosition');
});


var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
var isWindows = /windows phone/i.test(navigator.userAgent.toLowerCase());
var isBlackberry = /blackberry/i.test(navigator.userAgent.toLowerCase());
var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());

if(isAndroid || isWindows || isBlackberry || isiDevice){
    $('.catalog-item__drop-icon').click(function () {
        $(this).parents('.catalog-item').toggleClass('active');
        $('.header-dropDown').fadeToggle();
    });
    $('.menu-dropDown__links').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active').siblings('.menu-dropDown-submenu').slideToggle().parents('.menu-dropDown__item').siblings('.menu-dropDown__item').fadeToggle();
    });

    $('.menu-dropDown-submenu__links').click(function (e) {
        e.preventDefault();
        $(this).siblings('.menu-dropDown-submenu-level2').fadeToggle().parents('.menu-dropDown-submenu__item').siblings('.menu-dropDown-submenu__item').fadeToggle().parents('.menu-dropDown__item').find('.menu-dropDown__links').toggleClass('opened');
    });

}else{
    $('.catalog-item__drop-icon').click(function () {
        $(this).parents('.catalog-item').toggleClass('active');
        $('.header-dropDown').fadeToggle();
    });

    $('.catalog-dropdown .menu-dropDown__item').hover(function () {
        $('.catalog-dropdown .menu-dropDown__item').removeClass('active');
        $(this).addClass('active').parents('.header-dropDown').addClass('open');
    });

    $('.catalog-dropdown .menu-dropDown-submenu__item').hover(function () {
        $('.catalog-dropdown .menu-dropDown-submenu__item').removeClass('active');
        $(this).addClass('active').parents('.catalog-dropdown .menu-dropDown__item').addClass('active');
    });

    $(document).mouseout(function (e) { // событие клика по веб-документу
        var div = $(".catalog-dropdown"); // тут указываем ID элемента
        var btn = $('.header-dropDown');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.find('.catalog-item').removeClass('active');
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
}