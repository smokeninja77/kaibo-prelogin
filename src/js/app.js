import $ from 'jquery';
import bootstrap from 'bootstrap';
// import Scrollbar from 'smooth-scrollbar';



// import { TimelineMax, Power4, TweenMax  } from "gsap";
// import ScrollMagic from 'scrollmagic';
// import "debug.addIndicators";
// import "animation.gsap"
// import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js"
// import * as ScrollMagic.ind from "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js"


window.$ = $;
window.jQuery = $;


var controller = new ScrollMagic.Controller();

var padBoard = new TimelineMax ().add([
	// TweenMax.fromTo(".ball-org", 1, {x:0,}, {x: -900, ease: "power4.out"}),	
	// TweenMax.fromTo(".ball-yellow", 1, {x:-400,}, {x:-900, ease: "power4.out"}),
	// TweenMax.fromTo(".ball-blue", 1, {x:300,}, {x:900, ease: "power4.out"}),
	//TweenMax.to(".ball-yellow", 1, {x:-300, ease: "power4.out"}),
	TweenMax.fromTo(".pad-board", 1, {rotationX: 0, y: 0}, {rotationX: 65, y: -50, ease: "power4.out"}),
])

var ballsOnly = new TimelineMax ().add([
	TweenMax.fromTo(".ball-org", 1, {x:0,}, {x: -900, ease: "power4.out"}),	
	TweenMax.fromTo(".ball-yellow", 1, {x:-400,}, {x:-900, ease: "power4.out"}),
	TweenMax.fromTo(".ball-blue", 1, {x:300,}, {x:900, ease: "power4.out"}),
	//TweenMax.to(".ball-yellow", 1, {x:-300, ease: "power4.out"}),
	// TweenMax.fromTo(".pad-board", 1, {rotationX: 0, y: 0}, {rotationX: 65, y: 0, ease: "power4.out"}),
])

const section1 = new ScrollMagic.Scene({
	triggerElement: ".sec-intro",
	triggerHook: "onLeave",
	duration: "100%"
	})
	.setPin(".sec-intro")
	.setTween(padBoard)
	.addIndicators({
		colorTrigger: "red",
		colorStart:"red",
		colorEnd:"red",
		indent:10
	})
	.addTo(controller);

const sectionBalls =  new ScrollMagic.Scene({
	triggerElement: ".ball-trigger", duration: 1350,
	})
	.setTween(ballsOnly)
	.addIndicators({
		colorTrigger: "purple",
		colorStart:"purple",
		colorEnd:"purple",
		indent:10
	})
	.addTo(controller);

// var screneArtDraw = new ScrollMagic.Scene({
// 				triggerElement: ".ball-yellow", duration: 400, triggerHook: 0.5
// 			  })
// 				.setTween(tweenArtDraw)
// 				.addIndicators({colorTrigger: "black"})
// 				.addTo(controller);

const demo = new ScrollMagic.Scene({
	triggerElement: ".box2",
	triggerHook: "onLeave",
	duration: "300%"
	})
	.setPin(".box2")
	.addIndicators({
		colorTrigger: "green",
		colorStart:"green",
		colorEnd:"green",
		indent:10
	})
	.addTo(controller);
