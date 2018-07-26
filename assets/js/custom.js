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

        if($('.zoom-btn-sm').hasClass('scale-out')){
            $('#widgetWrap').removeClass('overlay-widget');
            $('#phoneBtn').addClass('fa-phone');
            $('#phoneBtn').removeClass('fa-times');
        }
        else{
            $('#widgetWrap').addClass('overlay-widget');
            $('#phoneBtn').removeClass('fa-phone');
            $('#phoneBtn').addClass('fa-times');
        }
    }
});


$('#dropdownBtn').click(function() {
    $('.dropdown-content.info').toggle();
});