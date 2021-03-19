import $ from 'jquery';
import bootstrap from 'bootstrap';
import ScrollMagic from 'scrollmagic';
import "debug.addIndicators";
// import * as ScrollMagic.ind from "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js"



window.$ = $;
window.jQuery = $;

var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
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