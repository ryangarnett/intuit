$(document).ready(function(){


var $prev = $('.arrow.previous');
var $prevAvatar = $('.arrow.prev .avatar');

var $next = $('.arrow.next');
var $nextAvatar = $('.arrow.next .avatar');

var $cards = $('.cards');


var q = 'hackathon';

var data;

$.ajax ({
    url: 'https://jsonp.nodejitsu.com/?callback=&url=https%3A%2F%2Fapi.vineapp.com%2Ftimelines%2Ftags%2F' + q,
    type: 'GET',
    dataType: 'json',
    success: function(res) {
        data = res;
        var id = 0; // The vine SERP ranking
        $.each(res.data.records, function(k, v) {
            var avatar = res.data.records[id].avatarUrl;
            var summary = res.data.records[id].description;
            var username = res.data.records[id].username;
            var video = res.data.records[id].videoUrl;
            var shareUrl = res.data.records[id].shareUrl;
            var thumbnail = res.data.records[id].thumbnailUrl;
            if (id == 0) {
                $cards.append('<li class="card present" data-id="' + id + '"><video class="video-js vjs-default-skin" preload="auto" height="400" width="400" poster="' + thumbnail + '"><source src="' + video + '" type="video/mp4" /></video><div class="buttons"><button class="divided left reply">Skip thing</button><button class="divided right volley">Next thing</button></div></li>');
            } else {
                $cards.append('<li class="card future" data-id="' + id + '"><video class="video-js vjs-default-skin" preload="auto" height="400" width="400" poster="' + thumbnail + '"><source src="' + video + '" type="video/mp4" /></video><div class="buttons"><button class="divided left reply">Skip thing</button><button class="divided right volley">Next thing</button></div></li>');
            }
            id++;
        });
        


        $nextAvatar.css('background-image', 'url(' + res.data.records[1].avatarUrl + ')');
        $prevAvatar.css('background-image', 'url(' + res.data.records[0].avatarUrl + ')');
    }
});


log(data);


function nextCard() {
    var $card = $('.card.present');
    var $next = $card.next();

    if($next.length === 0) {
        $card.addClass('jiggle').delay(400).queue(function(next){
            $(this).removeClass('jiggle');
            next();
        });
    } else {

        $card.addClass('past').removeClass('present');
        $next.addClass('present').removeClass('future').removeClass('past');


        id = $('.card.present').data('id');
        $nextAvatar.css('background-image', 'url(' + res.data.records[id + 1].avatarUrl + ')');
        $prevAvatar.css('background-image', 'url(' + res.data.records[id - 1].avatarUrl + ')');


    }
}

function prevCard() {
    var $card = $('.card.present');
    var $prev = $card.prev();

    if($prev.length === 0) {
        $card.addClass('jiggle').delay(400).queue(function(next){
            $(this).removeClass('jiggle');
            next();
        });
    } else {
        $card.addClass('future').removeClass('present');
        $prev.addClass('present').removeClass('future').removeClass('past');
    }
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

$prev.on('click', function(){
    prevCard();
});

$next.on('click', function(){
    nextCard();
});




});