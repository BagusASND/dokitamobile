$(document).ready(function(){
    $('.main-slider-content').slick({
        autoplay: true,
        autoplaySpeed: 2000
    });
});



$('#zoomBtn').click(function() {
    $('.zoom-btn-sm').toggleClass('scale-out');
    if (!$('.zoom-card').hasClass('scale-out')) {
        $('.zoom-card').toggleClass('scale-out');
        /*$('#widgetWrap').addClass('overlay-widget');*/
        $('#phoneBtn').addClass('hide-temp');
        $('#phoneCloseBtn').removeClass('hide-temp');
    }
});

$('.zoom-btn-sm').click(function() {
    var btn = $(this);
    var card = $('.zoom-card');

    if ($('.zoom-card').hasClass('scale-out')) {
        $('.zoom-card').toggleClass('scale-out');
    }
});
