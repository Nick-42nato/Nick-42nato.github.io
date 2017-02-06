TweenMax.staggerFrom(document.querySelectorAll("[data-bit]"), 0.75, { y: 200, autoAlpha: 0 }, -0.15);
TweenMax.from(document.querySelectorAll("[data-allBits]"), 1.5, { y: 100, ease: Back.easeOut.config(4) });
