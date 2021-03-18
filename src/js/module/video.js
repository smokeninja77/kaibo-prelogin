import $ from 'jquery';

(function() {

	// Run only if section exist
    if ($('.home-page').length != 1) { return 0; }
    console.log('video js');

    var video = document.getElementById("video")

	function openFullscreen() {
		if (video.requestFullscreen) {
		video.requestFullscreen();
		} else if (video.webkitRequestFullscreen) { /* Safari */
		video.webkitRequestFullscreen();
		} else if (video.msRequestFullscreen) { /* IE11 */
		video.msRequestFullscreen();
		}
	}

	function makeLandscape() {
		if (screen.orientation && screen.orientation.lock) {
			screen.orientation.lock('landscape');
		}
	}

	document.getElementsByClassName("video-activitor")[0].addEventListener('click',function(){
		$('#video, .v-closebtn').addClass('active');
		$('.container').css('zIndex','1')
		// openFullscreen()
		video.play();
		
		// makeLandscape()
	})

	$('.v-closebtn').on('click', function(){
		$('#video, .v-closebtn').removeClass('active');
		$('.container').css('zIndex','0');
		video.pause();
	})

	// $('#video').bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e) {
	// 	var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
	// 	var event = state ? 'FullscreenOn' : 'FullscreenOff';
		
	// 	if ( $('#video').hasClass( "active" ) ) {
	// 		$('#video').removeClass('active');
	// 		$('.container').css('zIndex','0');
	// 	} 
	
	// 	if (event == "FullscreenOn"){
	// 		$('#video').addClass('active');
	// 	}
	// });

	//////////////////////

	var video1 = document.getElementById("ckplayer_a1");
	var video2 = document.getElementById("ckplayer_a2");
	var video3 = document.getElementById("ckplayer_a3");
	var video4 = document.getElementById("ckplayer_a4");
	video1.play();
	video2.play();
	video3.play();
	video4.play();

	document.addEventListener(
		'WeixinJSBridgeReady',
		function() {
			var video1 = document.getElementById("ckplayer_a1");
			var video2 = document.getElementById("ckplayer_a2");
			var video3 = document.getElementById("ckplayer_a3");
			var video4 = document.getElementById("ckplayer_a4");
			video1.play();
			video2.play();
			video3.play();
			video4.play();
		},
		false
	);
	
	$(document).on('touchstart click', function (event ) {
		var video1 = document.getElementById("ckplayer_a1");
		var video2 = document.getElementById("ckplayer_a2");
		var video3 = document.getElementById("ckplayer_a3");
		var video4 = document.getElementById("ckplayer_a4");
		video1.play();
		video2.play();
		video3.play();
		video4.play();
		console.log('video clicked event')
		$( this ).off( event ); 
	})

})();
