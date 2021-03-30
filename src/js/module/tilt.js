VanillaTilt.init(document.querySelectorAll(".wave-img"), {
    max: 10,
    speed: 100,
    reverse: true,
    // perspective: 1000,
    easing: "cubic-bezier(.03,.98,.52, .99)",
});

VanillaTilt.init(document.querySelectorAll(".overlay-mask.active"), {
    max: 10,
    speed: 100,
    reverse: true,
    // perspective: 1000,
    easing: "cubic-bezier(.03,.98,.52, .99)",
});