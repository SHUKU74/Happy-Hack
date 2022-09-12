$(function($) {
    $('.bg-switcher').bgSwitcher({
        images: ['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
        interval: 7000,
        loop: true
    });

    $('.slider'),slick({
    arrows: true,
    dots: true,
    // 表示するスライド枚数
    slidesToShow: 4,
    });
    
});

