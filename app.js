$(document).ready(function(){


var $left = $('.arrow.previous');
var $right = $('.arrow.next');


function nextCard() {
    var card = $('.card.present');
    var next = card.next();

    if(next.length === 0) {
        card.addClass('jiggle').delay(400).queue(function(next){
            $(this).removeClass('jiggle');
            next();
        });
    } else {
        card.addClass('past').removeClass('present');
        next.addClass('present').removeClass('future').removeClass('past');
    }
}

function prevCard() {
    var card = $('.card.present');
    var prev = card.prev();

    if(prev.length === 0) {
        card.addClass('jiggle').delay(400).queue(function(next){
            $(this).removeClass('jiggle');
            next();
        });
    } else {
        card.addClass('future').removeClass('present');
        prev.addClass('present').removeClass('future').removeClass('past');
    }
}

function playCard() {
    var count = 0;
    var timerId = setInterval(function() {
        count++;

        if (count == 0) {
            $('#weather-data').load('jquery-fetch/fetch-weatherdata.php?place=' + myplace);
            clearInterval(timerId);
            countdown();
        }
    }, 1000);
}



//Arrow Keys Pressed
$(document).keydown(function(e) {
    var key = e.keyCode;
    // console.log(key);
    switch (key) {
        case 37:
            // left
            prevCard();
            e.preventDefault();
            break;
        case 39:
            // right
            nextCard();
            e.preventDefault();
            break;
        }
});

$left.on('click', function(){
    prevCard();
});

$right.on('click', function(){
    nextCard();
});




});