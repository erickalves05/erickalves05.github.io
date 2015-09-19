$(document).ready(function () {

    if ($('.slider').length) {
        $('.slider').bxSlider({
            controls: false
        });
    }

    if ($('.video-slider').length) {
        $('.video-slider').bxSlider({
            pager: false,
            minSlides: 3,
            maxSlides: 3,
            slideWidth:280
        });
    }

    PosicionaFooter();

    $(window).resize(function () {
        PosicionaFooter();
    });
});

function PosicionaFooter() {
    var docHeight = $(window).height();
    var footerHeight = $('footer').height();
    var footerTop = $('footer').position().top + footerHeight + 5;

    if (footerTop < docHeight) {
        $('footer').css('margin-top', (docHeight - footerTop) + 'px');
    }
}