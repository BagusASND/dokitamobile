$(document).ready(function(){

    $('.main-slider-content').slick({
        autoplay: true,
        autoplaySpeed: 2000
    });



    $('.zoomBtn').click(function() {
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


    $('#confirmCall').hide();
    $('#call2').click(function () {
       $('#confirmCall').show(500);
    });
    $('#closeConfirmCall').click(function () {
        $('#confirmCall').hide(500);
    });




    /*
    $('#dropdownBtn').click(function() {
        $('.dropdown-content.info').toggle();
    });*/

    'use strict';

    (function() {

        var _btns = document.querySelectorAll('.btn'),

            _eachBtn = function(callback) {
                Array.prototype.forEach.call(_btns, function(elem) {
                    callback.call(this, elem);
                });
            },
            _initListener = function(e) {
                e.preventDefault();
                e.stopPropagation();
                _eachBtn(function(btn) {
                    btn.classList.remove('dropdown-open')
                });
                this.classList.toggle('dropdown-open');
            },
            _hideAll = function() {
                _eachBtn(function(btn) {
                    btn.classList.remove('dropdown-open');
                });
            };

        _eachBtn(function(btn) {
            btn.addEventListener('touchend', function(e) {
                _initListener.call(this, e);
            });

            btn.addEventListener('click', function(e) {
                _initListener.call(this, e);
            });
        });

        document.addEventListener('touchend', function() {
            _hideAll();
        });

        document.addEventListener('click', function() {
            _hideAll();
        });

    })();

});