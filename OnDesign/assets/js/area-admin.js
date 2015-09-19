/// <reference path="vendor/jquery-1.11.2.min.js" />

$(document).ready(function () {
    PosicionaFooter();

    $(window).resize(function () {
        PosicionaFooter();
    });
});


function PosicionaFooter() {
    if ($('footer').length) {
        var docHeight = $(window).height();
        var footerHeight = $('footer').height();
        var footerTop = $('footer').position().top + footerHeight + 5;

        if (footerTop < docHeight) {
            $('footer').css('margin-top', (docHeight - footerTop) + 'px');
        }
    }
}