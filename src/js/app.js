// import $ from 'jquery';
import bootstrap from 'bootstrap';
import "./module/tilt";
import "./module/horinzotalAnimate";
import "./module/form";
import "./module/selectDropdown";
// import Scrollbar from 'smooth-scrollbar';



// import { TimelineMax, Power4, TweenMax  } from "gsap";
// import ScrollMagic from 'scrollmagic';
// import "debug.addIndicators";
// import "animation.gsap"
// import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js"
// import * as ScrollMagic.ind from "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js"



var $window = $(window);

function checkWidth() {
	var windowsize = $window.width();
	if (windowsize > 768) {
		console.log('dekstop')
		var controller = new ScrollMagic.Controller();

var padBoard = new TimelineMax ().add([
	TweenMax.fromTo(".pad-board", 1, {rotationX: 0, y: 0}, {rotationX: 65, y: -50, ease: "power4.out"}),
	TweenMax.fromTo(".intro-des-wrap", 1, {y:250, opacity: 0}, {y: 0, opacity:1, ease: "power4.out"}),	

	TweenMax.fromTo(".pad-board-1", 1, {rotationX: 0, y: 0, x: 0, z: 0}, {rotationX: 65, y: -30, x: 10, z: 0, ease: "power4.out"}),
	TweenMax.to(".pad-board-1", 1, {boxShadow: "10px 10px 37px -5px rgba(0,0,0 , 0.3)"}),
	TweenMax.fromTo(".pad-board-2", 1, {rotationX: 0, y: 0, x: 0, z: 0}, {rotationX: 65, y: -51, x: 0, z: 0, ease: "power4.out"}),
	TweenMax.to(".pad-board-2", 1, {boxShadow: "10px 10px 37px -5px rgba(0,0,0 , 0.3)"}),

	// TweenMax.fromTo(".pad-board-3", 1, {rotationX: 0, y: 0, x: 0, z: 0, scale: 1}, {rotationX: 65, y: 319, x: 0, z: 0, scale: 0.8, ease: "power4.out"}),
	TweenMax.fromTo(".pad-board-3", 1.1, {rotationX: 0, y: 0, x: 0, z: 0, scale: 1}, {rotationX: 65, y: 0, x: 0, z: 0, scale: 1, ease: "power4.out"}),
	TweenMax.to(".pad-board-3", 1, {boxShadow: "10px 10px 37px -5px rgba(0,0,0 , 0.3)"}),

	TweenMax.fromTo(".pad-board-4", 1, {rotationX: 0, y: -10, x: -50, z: 0, scale: 1}, {rotationX: 65, y: 80, x: -50, z: 0, scale: 0.8, ease: "power4.out"}),
	TweenMax.to(".pad-board-4", 1, {boxShadow: "-1px 8px 20px -9px rgba(0,0,0 , 0.68)"}),

	TweenMax.to(".mask-text", 1, {backgroundImage: "720deg, #081E72, #A64388, #D8597E"})
])
padBoard.stop();

var ballsOnly = new TimelineMax ().add([
	TweenMax.fromTo(".ball-org", 1, {x:-500,}, {x: -900, ease: "power4.out"}),	
	TweenMax.fromTo(".ball-yellow", 1, {x:-600,}, {x:-900, ease: "power4.out"}),
	TweenMax.fromTo(".ball-blue", 1, {x:500,}, {x:900, ease: "power4.out"}),
])

var section1 = new ScrollMagic.Scene({
	triggerElement: ".sec-intro",
	triggerHook: "onLeave",
	duration: "100%"
	})
	.setPin(".sec-intro")
	.setTween(padBoard.play())
	.addTo(controller);

const sectionBalls =  new ScrollMagic.Scene({
	triggerElement: ".ball-trigger", duration: 1350,
	})
	.setTween(ballsOnly)
	.addTo(controller);


var h = new TimelineMax();
h.set(".overlay-mask", {className:"+=active"}, 0.01)
.fromTo((".line-1"), 5, {y: 20}, {y: -200, ease: Power1.easeNone}, 4)
.fromTo((".line-1"), 1, { autoAlpha: 1}, {autoAlpha: 0, ease: Power1.easeNone}, 4)
.fromTo((".line-2-title"), 5, { autoAlpha: 0.1, y: 15}, {autoAlpha: 1, y: -135, ease: Power1.easeNone}, 4.2)
.fromTo((".line-2"), 5, { autoAlpha: 0.1, y: 15, backgroundImage: "linear-gradient(to top, transparent 0%, #383838 100%)"}, {autoAlpha: 1, y: -135, backgroundImage: "linear-gradient(to top, transparent 0%, #383838 0%)", ease: Power1.easeNone}, 4.2)
.fromTo((".slide-phone-img"), 2.1, { autoAlpha: 1}, {autoAlpha: 0, ease: Power1.easeNone}, 4.2)
.fromTo((".front-phone-img"), 2.3, { autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeNone}, 4.2)
.to(".main-text", 10, {backgroundImage: "720deg, #081E72, #A64388, #D8597E"}, 0)

const phoneScene =  new ScrollMagic.Scene({
	triggerElement: ".sec-phone",
	triggerHook: "onLeave",
	duration: "180%",
	})
	.setPin(".sec-phone")
	.setTween(h)
	.addTo(controller);


var marketingAnimate = new TimelineMax();
marketingAnimate.fromTo((".point-1"),5 , { y: 0} , { y: -600, ease: Power1.easeNone}, 1)
.fromTo((".point-2"),5 , { y: 400, zIndex: 1} , { y: -800, zIndex: 1, ease: Power1.easeNone}, 1)
.fromTo((".point-3"),7 , { y: 700, zIndex: 1} , { y: -500, zIndex: 1, ease: Power1.easeNone}, 2)

.fromTo((".img-mb-1"),1 , { autoAlpha: 1} , { autoAlpha:0, ease: Power1.easeNone}, 1.5)
.fromTo((".img-mb-2"),1 , { autoAlpha: 0}, { autoAlpha:1, ease: Power1.easeNone}, 1.5)
.fromTo((".img-mb-3"),2 , { autoAlpha: 0} , { autoAlpha:1, ease: Power1.easeNone}, 5)
.to((".img-mb-2"),2 , { autoAlpha:0, ease: Power1.easeNone}, 5)


const marketingScene = new ScrollMagic.Scene({
	triggerElement: ".sec-whattodo-marketing",
	triggerHook: "onLeave",
	duration: "500%",
	})
	.setTween(marketingAnimate)
	.setPin(".sec-whattodo-marketing")
	.addTo(controller);


var number = 0;
var containers = $('.container');




// var myInterval = setInterval(function() {
//     document.getElementById('my-id').style.backgroundColor = colors[(++cur_color) % colors.length];
// }, 2000);

// $('.horizontal-wrap').each(function () {
// 	var $this = $(this);
// 	jQuery({ Counter: 0 }).animate( {
// 	  duration: 1000,
// 	  easing: 'swing',
// 	  step: function () {
// 		for (var i = 0; i < 100	; i++) {
// 			// console.log(number);
// 			$this.css('transform', 'translate3d('+ ++number +'px, 0, 0)');  
// 		}
// 	  }
// 	});
//   });

var horizontalMove = new TimelineMax();
horizontalMove.fromTo((".horizontal-wrap"),50 , { x: 0} , { x: -3000, ease: Linear.easeNone}, )
// sozai.repeat(2).yoyo(true).play()

const textScene =  new ScrollMagic.Scene({
	triggerElement: ".sec-whattodo"
	})
	.setTween(horizontalMove)
	.addTo(controller);

var enterKaibo = new TimelineMax().set(".ver-text", {className:"+=active"}, 0.01)

const enterKaiboScene =  new ScrollMagic.Scene({
	triggerElement: ".sec-whattodo-marketing"
	})
	.setTween(enterKaibo)
	.addTo(controller);

// gradient greensock

var tweenGradientAi = new TimelineMax ().add([
		TweenMax.to(".ai-title", 1, {backgroundImage: "720deg, #081E72, #A64388, #D8597E"})
      ]);

var tweenGradientAiScreen = new ScrollMagic.Scene({
				triggerElement: ".ai-title", duration: 1000
				})
				.setTween(tweenGradientAi)
				//.addIndicators() // add indicators (requires plugin)
				.addTo(controller);

var tweenGradientAnalyze = new TimelineMax ().add([
		TweenMax.to(".text-grad", 1, {backgroundImage: "720deg, #081E72, #A64388, #D8597E"})
	]);

var sceneMainText = new ScrollMagic.Scene({
	triggerElement: ".text-grad", duration: 1000
	})
	.setTween(tweenGradientAnalyze)
	// .addIndicators() // add indicators (requires plugin)
	.addTo(controller);

// END gradient greensock


var cardImgSlideIn1 = new TimelineMax().set(".card-img-1", {className:"+=active"}, 0.01)
var cardImgSlideIn2 = new TimelineMax().set(".card-img-2", {className:"+=active"}, 0.01)
var cardImgSlideIn3 = new TimelineMax().set(".card-img-3", {className:"+=active"}, 0.01)
// var cardImgSlideIn4 = new TimelineMax().set(".card-img-4", {className:"+=active"}, 0.01)

const cardImgSlideInScene =  new ScrollMagic.Scene({
	triggerElement: ".card-img-1",
	reverse: false
	})
	.setTween(cardImgSlideIn1)
	.addTo(controller);

const cardImgSlideInScene2 =  new ScrollMagic.Scene({
	triggerElement: ".card-img-2",
	reverse: false
	})
	.setTween(cardImgSlideIn2)
	.addTo(controller);

const cardImgSlideInScene3 =  new ScrollMagic.Scene({
	triggerElement: ".card-img-3",
	reverse: false
	})
	.setTween(cardImgSlideIn3)
	.addTo(controller);


var arrowPointDown = new TimelineMax().set(".arrow-point-down", {className:"+=active"}, 0.01)
const arrowPointDownScene =  new ScrollMagic.Scene({
	triggerElement: ".card-img-4",
	reverse: false
	})
	.setTween(arrowPointDown)
	.addTo(controller);


var cardImgSlideIn5 = new TimelineMax().set(".card-img-5", {className:"+=active"}, 0.01)
const cardImgSlideInScene5 =  new ScrollMagic.Scene({
	triggerElement: ".arrow-point-down",
	reverse: false
	})
	.setTween(cardImgSlideIn5)
	.addTo(controller);

	}else{
		console.log('mobile');

		var controller = new ScrollMagic.Controller();

		var horizontalMove = new TimelineMax();
		horizontalMove.fromTo((".horizontal-wrap"),50 , { x: 0} , { x: -3000, ease: Linear.easeNone}, )
		// sozai.repeat(2).yoyo(true).play()

		const textScene =  new ScrollMagic.Scene({
			triggerElement: ".sec-phone"
			})
			.setTween(horizontalMove)
			//.addIndicators()
			.addTo(controller);	
			
		var bnwLogo = new TimelineMax();
		bnwLogo.fromTo((".bnw-logo-wrap"),10 , { x: 0} , { x: -420, ease:Linear.easeNone,}, )
		// sozai.repeat(2).yoyo(true).play()

		const bnwLogoScene =  new ScrollMagic.Scene({
			triggerElement: ".trigger-bnw", duration: 600
			})
			.setTween(bnwLogo)
			// .addIndicators()
			.addTo(controller)		

	}
		
}

$(window).resize(checkWidth);
checkWidth();


$(function(){
    var hasBeenTrigged = false;
    $(window).scroll(function() {
		console.log( $(this).scrollTop() );
        if ($(this).scrollTop() > 890 && !hasBeenTrigged) { 
			$('.blureffect').css("opacity", "1")
            hasBeenTrigged = true;
        }
		if ($(this).scrollTop() < 890 && hasBeenTrigged) { 
            $('.blureffect').css("opacity", "0")
            hasBeenTrigged = false;
        }
    });
});0