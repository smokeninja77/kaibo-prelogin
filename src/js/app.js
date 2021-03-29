// import $ from 'jquery';
import bootstrap from 'bootstrap';
import "./module/tilt";
import "./module/horinzotalAnimate";
import "./module/form"
// import Scrollbar from 'smooth-scrollbar';



// import { TimelineMax, Power4, TweenMax  } from "gsap";
// import ScrollMagic from 'scrollmagic';
// import "debug.addIndicators";
// import "animation.gsap"
// import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js"
// import * as ScrollMagic.ind from "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js"


// window.$ = $;
// window.jQuery = $;


var controller = new ScrollMagic.Controller();

var padBoard = new TimelineMax ().add([
	TweenMax.fromTo(".pad-board", 1, {rotationX: 0, y: 0}, {rotationX: 65, y: -50, ease: "power4.out"}),
	TweenMax.fromTo(".intro-des-wrap", 1, {y:250, opacity: 0}, {y: 0, opacity:1, ease: "power4.out"}),	

	TweenMax.fromTo(".pad-board-1", 1, {rotationX: 0, y: 0, x: 0, z: 0}, {rotationX: 65, y: -30, x: 10, z: 0, ease: "power4.out"}),
	TweenMax.to(".pad-board-1", 1, {boxShadow: "10px 10px 37px -5px rgba(0,0,0 , 0.3)"}),
	TweenMax.fromTo(".pad-board-2", 1, {rotationX: 0, y: 0, x: 0, z: 0}, {rotationX: 65, y: -51, x: 0, z: 0, ease: "power4.out"}),
	TweenMax.to(".pad-board-2", 1, {boxShadow: "10px 10px 37px -5px rgba(0,0,0 , 0.3)"}),

	TweenMax.to(".mask-text", 1, {backgroundImage: "720deg, #081E72, #A64388, #D8597E"})
])

var ballsOnly = new TimelineMax ().add([
	TweenMax.fromTo(".ball-org", 1, {x:-500,}, {x: -900, ease: "power4.out"}),	
	TweenMax.fromTo(".ball-yellow", 1, {x:-600,}, {x:-900, ease: "power4.out"}),
	TweenMax.fromTo(".ball-blue", 1, {x:500,}, {x:900, ease: "power4.out"}),
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

var h = new TimelineMax();
h.set(".overlay-mask", {className:"+=active"}, 0.01)
.fromTo((".line-1"), 5, {y: 20}, {y: -300, ease: Power1.easeNone}, 4)
.fromTo((".line-1"), 2.5, { autoAlpha: 1}, {autoAlpha: 0, ease: Power1.easeNone}, 4)
.fromTo((".line-2-title"), 5, { autoAlpha: 0, y: -50}, {autoAlpha: 1, y: -150, ease: Power1.easeNone}, 4.2)
.fromTo((".line-2"), 5, { autoAlpha: 0, y: -50}, {autoAlpha: 1, y: -150, ease: Power1.easeNone}, 4.2)
.fromTo((".slide-phone-img"), 2.1, { autoAlpha: 1}, {autoAlpha: 0, ease: Power1.easeNone}, 4.2)
.fromTo((".front-phone-img"), 2.3, { autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeNone}, 4.2)

const phoneScene =  new ScrollMagic.Scene({
	triggerElement: ".sec-phone",
	triggerHook: "onLeave",
	duration: "180%",
	})
	.setPin(".sec-phone")
	.setTween(h)
	.addIndicators({
		colorTrigger: "black",
		colorStart: "black",
		colorEnd: "black",
		indent:10
	})
	.addTo(controller);


var marketingAnimate = new TimelineMax();
marketingAnimate.fromTo((".point-1"),5 , { y: 0} , { y: -600, ease: Power1.easeNone}, 1)
.fromTo((".point-2"),5 , { y: 400, zIndex: 1} , { y: -800, zIndex: 1, ease: Power1.easeNone}, 1)
.fromTo((".point-3"),7 , { y: 700, zIndex: 1} , { y: -500, zIndex: 1, ease: Power1.easeNone}, 2)

.fromTo((".img-mb-1"),2 , { autoAlpha: 1} , { autoAlpha:0, ease: Power1.easeNone}, 1.5)
.fromTo((".img-mb-2"),2 , { autoAlpha: 0}, { autoAlpha:1, ease: Power1.easeNone}, 1.5)
.fromTo((".img-mb-3"),2 , { autoAlpha: 0} , { autoAlpha:1, ease: Power1.easeNone}, 5)
.to((".img-mb-2"),2 , { autoAlpha:0, ease: Power1.easeNone}, 5)


const marketingScene = new ScrollMagic.Scene({
	triggerElement: ".sec-whattodo-marketing",
	triggerHook: "onLeave",
	duration: "500%",
	})
	.setTween(marketingAnimate)
	.setPin(".sec-whattodo-marketing")
	.addIndicators({
		colorTrigger: "yellow",
		colorStart: "yellow",
		colorEnd: "yellow",
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