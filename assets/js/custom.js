$(document).ready(function(){
    $('.main-slider-content').slick({
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('#showMore').click(function () {
        $('.content-more').removeClass('hide-temp').effects( scale, options, 500, callback );
    })
});

$( function() {
    // run the currently selected effect
    function runEffect() {
        // get effect type from
        var selectedEffect = "slide";

        // Most effect types need no options passed by default
        var options = {};
        // some effects have required parameters
        if ( selectedEffect === "scale" ) {
            options = { percent: 50 };
        } else if ( selectedEffect === "size" ) {
            options = { to: { width: 280, height: 185 } };
        }

        // Run the effect
        $( "#effect" ).show( selectedEffect, options, 500, callback );
    };

    //callback function to bring a hidden box back
    function callback() {
        /*setTimeout(function() {
            $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
        }, 1000 );*/
    };

    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
        runEffect();
    });

    $( "#effect" ).hide();
} );

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