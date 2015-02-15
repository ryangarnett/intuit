$(document).ready(function(){

function getJson(url) {
    return JSON.parse($.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        global: false,
        async:false,
        success: function(data) {
            return data;
        }
    }).responseText);
}

var $prev = $('.arrow.previous');
var $prevAvatar = $('.arrow.prev .avatar');

var $next = $('.arrow.next');
var $nextAvatar = $('.arrow.next .avatar');

var $skip = $('.skip');

var $cards = $('.cards');
var tags_hashtable = new Object();
var hash_count = 0;


var q = 'hackathon';

var res = getJson('https://jsonp.nodejitsu.com/?callback=&url=https%3A%2F%2Fapi.vineapp.com%2Ftimelines%2Ftags%2F' + q);



$.ajax ({
    url: 'https://jsonp.nodejitsu.com/?callback=&url=https%3A%2F%2Fapi.vineapp.com%2Ftimelines%2Ftags%2F' + q,
    type: 'GET',
    dataType: 'json',
    success: function(res) {
        var id = 0; // The vine SERP ranking
        $.each(res.data.records, function(k, v) {
            var avatar = res.data.records[id].avatarUrl;
            var summary = res.data.records[id].description;
            var tagslistarr = summary.split(' ');
            var tags_array=[];
            $.each(tagslistarr,function(i,val){
                if(tagslistarr[i].indexOf('#') == 0){
                  tags_array.push(tagslistarr[i]);  
                }
            });
            tags_hashtable[hash_count] = tags_array;
            hash_count++;
            // for(var i=0;i<tags_array.length;i++) {
            //     $(".tags").append("<label g='primary'>Collaborating</label>");
            // }
            var username = res.data.records[id].username;
            var video = res.data.records[id].videoUrl;
            var shareUrl = res.data.records[id].shareUrl;
            var thumbnail = res.data.records[id].thumbnailUrl;

            if (id == 0) {
                $cards.append('<li class="card present" id="player' + id + '" data-id="' + id + '"><video class="video-js vjs-default-skin" preload="auto" height="400" width="400" poster="' + thumbnail + '"><source src="' + video + '" type="video/mp4" /></video><button g="12 success centered large" class="skip">Skip intro</button></li>');
            } else {

                $cards.append('<li class="card future" id="player' + id + '" data-id="' + id + '"><video class="video-js vjs-default-skin" preload="auto" height="400" width="400" poster="' + thumbnail + '"><source src="' + video + '" type="video/mp4" /></video><button g="12 success centered large" class="skip">Skip intro</button></li>');

            }

            $('.cards .skip').click(function() {
                skipCard();
        
            });

            var $video = document.querySelector('.present video');
            $video.play();
            id++;
        });
        //console.log(tags_hashtable);
        $nextAvatar.css('background-image', 'url(' + res.data.records[1].avatarUrl + ')');
        $prevAvatar.css('background-image', 'url(' + res.data.records[0].avatarUrl + ')');
    }
});

function skipCard() {
    var $card = $('.card.present');
    var $next = $card.next();
    var $video = document.querySelector('.present video');
            

    if($next.length === 0) {
        $card.addClass('jiggle').delay(400).queue(function(next){
            $(this).removeClass('jiggle');
            next();
        });
    } else {

        // Get rid of and pause the current video
        $video.pause();
        $video.currentTime = 0;
        $card.addClass('past').removeClass('present');
        // Play the new video
        $next.addClass('present').removeClass('future').removeClass('past');
        var $video = document.querySelector('.present video');
        $video.play();

        id = $('.card.present').data('id');

        $nextAvatar.css('background-image', 'url(' + res.data.records[id + 1].avatarUrl + ')');
        $prevAvatar.css('background-image', 'url(' + res.data.records[id - 1].avatarUrl + ')');
        
    }
}


function nextCard() {
    var $card = $('.card.present');
    var $next = $card.next();
    var $video = document.querySelector('.present video');

    var card_id = $next.attr('data-id');
    var current_tags = (tags_hashtable[card_id]);
    $('.tags').html('');
    for(var i=0;i<current_tags.length;i++) {
        console.log(current_tags[i]);
        $('.tags').append("<label g='primary'>" + current_tags[i] + "</label><br><br>");
    }

 

    if($next.length === 0) {
        $card.addClass('jiggle').delay(400).queue(function(next){
            $(this).removeClass('jiggle');
            next();
        });
    } else {
        $('.uk-notify-message').fadeOut();
        UIkit.notify("You don't like pizza.", {pos:'top-right'});

        // Get rid of and pause the current video
        $video.pause();
        $video.currentTime = 0;
        $card.addClass('past').removeClass('present');
        // Play the new video
        $next.addClass('present').removeClass('future').removeClass('past');
        var $video = document.querySelector('.present video');
        $video.play();

        id = $('.card.present').data('id');

        $nextAvatar.css('background-image', 'url(' + res.data.records[id + 1].avatarUrl + ')');
        $prevAvatar.css('background-image', 'url(' + res.data.records[id - 1].avatarUrl + ')');
        
    }
}

function prevCard() {
    $('.uk-notify-message').fadeOut();
    var $card = $('.card.present');
    var $prev = $card.prev();
    var $video = document.querySelector('.present video');

    if($prev.length === 0) {
        $card.addClass('jiggle').delay(400).queue(function(next){
            $(this).removeClass('jiggle');
            next();
        });
    } else {
        // Get rid of and pause the current video
        $video.pause();
        $video.currentTime = 0;
        $card.addClass('future').removeClass('present');

        // Play the new video
        $prev.addClass('present').removeClass('future').removeClass('past');
        var $video = document.querySelector('.present video');
        video.play();
    }
}


//Arrow Keys Pressed
$(document).keydown(function(e) {
    var key = e.keyCode;

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
        case 40:
            // down
            skipCard();
            e.preventDefault();
            break;
        }

});

$prev.on('click', function(){
    prevCard();
});

$('body').on('swipeleft', function(){
    debugger;
    prevCard();
});

$next.on('click', function(){
    nextCard();
});

$('body').on('swiperight', function(){
    debugger;
    nextCard();
});

$('body').on('swipedown', function(){
    debugger;
    skipCard();
});

$('.uk-notify-message').on('hover', function(){
    $('.uk-notify-message').prepend('<i class="uk-icon-check"></i>');
    debugger;
});

$('body').on('mouseover', '.uk-notify-message', function () {
    message = $(this).html();
    $(this).html('Avoid similar events?');
});


});