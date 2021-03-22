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

var yellowBall = new TimelineMax ().add([
TweenMax.fromTo(".ball-yellow", 1, {x:500,}, {x:-300, ease: "power4.out"}),
TweenMax.fromTo(".ball-org", 1, {x:1000,}, {x:-600, ease: "power4.out"}),
//TweenMax.to(".ball-yellow", 1, {x:-300, ease: "power4.out"}),
])
// var orgBall = new TimelineMax ().add([
// 	TweenMax.fromTo(".ball-org", 1, {x:500,}, {x:-600, ease: "power4.out"}),
// ]);

const section1 = new ScrollMagic.Scene({
	triggerElement: ".sec-intro",
	triggerHook: "onLeave",
	duration: "300%"
	})
	.setPin(".sec-intro")
	.setTween(yellowBall)
	.addIndicators({
		colorTrigger: "red",
		colorStart:"red",
		colorEnd:"red",
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
		colorTrigger: "blue",
		colorStart:"yellow",
		colorEnd:"#3dd68c",
		indent:10
	})
	.addTo(controller);


	let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

	console.log("is Chrome ? ", isChrome);

	let y = 0;

	// initial smooth-scrollbar
	let scroll = Scrollbar.init(
		document.querySelector("#container-scroll")
	  );