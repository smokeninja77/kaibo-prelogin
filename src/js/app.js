import $ from 'jquery';
import bootstrap from 'bootstrap';
import "./module/tilt"
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
	TweenMax.fromTo(".pad-board", 1, {rotationX: 0, y: 0}, {rotationX: 65, y: -50, ease: "power4.out"}),
	TweenMax.fromTo(".intro-des-wrap", 1, {y:250, opacity: 0}, {y: 0, opacity:1, ease: "power4.out"}),	
])

var ballsOnly = new TimelineMax ().add([
	TweenMax.fromTo(".ball-org", 1, {x:0,}, {x: -900, ease: "power4.out"}),	
	TweenMax.fromTo(".ball-yellow", 1, {x:-400,}, {x:-900, ease: "power4.out"}),
	TweenMax.fromTo(".ball-blue", 1, {x:300,}, {x:900, ease: "power4.out"}),
])

// var introTextFloat = new TimelineMax ().add([
// 	TweenMax.fromTo(".intro-des-wrap", 1, {y:-250,}, {y: -0, ease: "power4.out"}),	
// ])

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


var phoneText = new TimelineMax().add([
	TweenMax.fromTo(".line-1", 1, {y:0, autoAlpha:1}, {y: -900, autoAlpha: 0, ease: "power4.out"}),	
])

var phoneFade = new TimelineMax().add([
	TweenMax.to(".slide-phone-img", .4, {autoAlpha:0, ease: Linear.easeNone}),
])

const phoneScene =  new ScrollMagic.Scene({
	triggerElement: ".sec-phone",
	triggerHook: "onLeave",
	duration: "300%"
	})
	.setPin(".sec-phone")
	.setTween(phoneText)
	.addIndicators({
		colorTrigger: "black",
		colorStart: "black",
		colorEnd: "black",
		indent:10
	})
	.addTo(controller);


const phoneFadeScene =  new ScrollMagic.Scene({
	triggerElement: ".phone-trigger",
	})
	.setTween(phoneFade)
	.addIndicators({
		colorTrigger: "pink",
		colorStart:"pink",
		colorEnd:"pink",
		indent:10
	})
	.addTo(controller);








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