/* Credits: http://css-tricks.com/examples/SimpleSlideshow/ */

var playing = true;
var seconds_per_slide = 9;

$(document).ready(function() {
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
        if (playing) {
            $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow')
            }
    }, seconds_per_slide * 1000);

    $('#slideshow-pause').click(function(event) {
	event.preventDefault();
	$('#slideshow-pause').hide();
	$('#slideshow-play').show();
	playing = false;
    });

    $('#slideshow-play').click(function(event) {
	event.preventDefault();
	$('#slideshow-play').hide();
	$('#slideshow-pause').show();
	playing = true;
    });

});
