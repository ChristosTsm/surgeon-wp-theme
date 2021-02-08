// Slider Initialize
var swiper = new Swiper(".swiper-container", {
	slidesPerView: 3,
	initialSlide: 1,
	centeredSlides: true,
	spaceBetween: 30,
	autoHeight: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		340: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 40,
			initialSlide: 2,
		},
	},
});

// Gsap Animations

if (window.matchMedia("(min-width: 601px)").matches) {
	if (document.getElementById("geniki-xeirourgiki")) {
		let cta_1 = document.getElementById("geniki-xeirourgiki");
		let cta_2 = document.getElementById("xeirourgiki-ogkologia");
		let cta_3 = document.getElementById("laparoskopiki-xeirourgiki");

		var tl = gsap.timeline({ delay: 1 });
		var tl_2 = gsap.timeline({ delay: 1 });
		var tl_3 = gsap.timeline({ delay: 1 });

		let handler = 0;

		cta_1.addEventListener("click", () => {
			handler = 1;
			gsap.set("#circle-2", { zIndex: 2 });
			gsap.set("#circle-1", { zIndex: 3 });
			gsap.set("#circle-3", { zIndex: 1 });
			gsap.set("#geniki-xeirourgiki-text", { display: "block" });
			gsap.set("#xeirourgiki-ogkologia-text", { display: "none" });
			gsap.set("#laparoskopiki-xeirourgiki-text", { display: "none" });

			tl.to("#circle-1", {
				x: 820,
				ease: "expo.inOut",
				duration: 2,
				transform: "scale(1.35)",
				// filter: "blur(0px)",
			});
			tl.to(
				"#circle-2",
				{
					x: 400,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=2"
			);
			tl.to(
				"#geniki-xeirourgiki-img",
				{
					opacity: 1,
					duration: 1,
					ease: "expo.inOut",
				},
				"-=.5"
			);
			tl.to(
				"#circle-1",
				{
					opacity: 0,
					duration: 1.5,
				},
				"-=0.5"
			);
			tl.to(
				"#geniki-xeirourgiki-text",
				{
					y: 0,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=1.5"
			);
			tl.to(
				".animation-links a",
				{
					opacity: 0,
					stagger: 0.2,
					duration: 1,
					ease: "expo.inOut",
				},
				"-=2"
			);
			tl.to(
				".animation-links a",
				{
					pointerEvents: "none",
				},
				"-=1"
			);
			tl.to(
				"#cta-more-btn",
				{
					opacity: 0,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=1"
			);
			tl.to(
				"#circle-3",
				{
					opacity: 0,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=5"
			);
			tl.to(
				"#reverse-animation",
				{
					opacity: 1,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=1"
			);
		});

		document
			.getElementById("reverse-animation")
			.addEventListener("click", () => {
				document.getElementById("cta-more-btn").style.position =
					"relative";
				// document.getElementById("circle-1").style.zIndex = "blur(2px)";
				// document.getElementById("circle-2").style.filter = "blur(2px)";
				// document.getElementById("circle-3").style.zIndex = "blur(2px)";

				if (handler === 1) {
					tl.timeScale(2);
					tl.reverse();
				}
				if (handler === 2) {
					tl_2.timeScale(2);
					tl_2.reverse();
				}
				if (handler === 3) {
					tl_3.timeScale(2);
					tl_3.reverse();
				}
			});

		cta_1.addEventListener("click", () => {
			document.getElementById("cta-more-btn").style.position = "relative";
			document.getElementById("cta-more-btn").style.zIndex = "4";
			if (handler === 1) {
				tl.timeScale(1);
				tl.play();
			}
		});

		cta_2.addEventListener("click", () => {
			document.getElementById("cta-more-btn").style.position = "relative";
			document.getElementById("cta-more-btn").style.zIndex = "4";
			if (handler === 2) {
				tl_2.timeScale(1);
				tl_2.play();
			}
		});

		cta_3.addEventListener("click", () => {
			document.getElementById("cta-more-btn").style.position = "relative";
			document.getElementById("cta-more-btn").style.zIndex = "4";
			if (handler === 3) {
				tl_3.timeScale(1);
				tl_3.play();
			}
		});

		cta_2.addEventListener("click", () => {
			handler = 2;
			gsap.set("#circle-2", { zIndex: 3 });
			gsap.set("#circle-1", { zIndex: 2 });
			gsap.set("#circle-3", { zIndex: 1 });
			gsap.set("#geniki-xeirourgiki-text", { display: "none" });
			gsap.set("#xeirourgiki-ogkologia-text", { display: "block" });
			gsap.set("#laparoskopiki-xeirourgiki-text", { display: "none" });

			tl_2.to("#circle-1", {
				x: 750,
				ease: "expo.inOut",
				duration: 2,
				transform: "scale(1.3)",
				// opacity: 0.5,
			});
			tl_2.to(
				"#circle-2",
				{
					x: 328,
					ease: "expo.inOut",
					duration: 2,
					// filter: "blur(0px)",
				},
				"-=2"
			);
			tl_2.to(
				"#circle-3",
				{
					opacity: 0,
					ease: "expo.inOut",
					duration: 2,
					filter: "blur(0px)",
				},
				"-=2"
			);
			tl_2.to(
				"#xeirourgiki-ogkologia-img",
				{
					opacity: 1,
					duration: 1,
					ease: "expo.inOut",
				},
				"-=.5"
			);
			tl_2.to(
				"#xeirourgiki-ogkologia-text",
				{
					y: 0,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=1.5"
			);
			tl_2.to(
				".animation-links a",
				{
					opacity: 0,
					stagger: 0.2,
					duration: 1,
					ease: "expo.inOut",
				},
				"-=2"
			);
			tl_2.to(
				".animation-links a",
				{
					pointerEvents: "none",
				},
				"-=1"
			);
			tl_2.to(
				"#cta-more-btn",
				{
					opacity: 0,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=1"
			);
			tl_2.to(
				"#reverse-animation",
				{
					opacity: 1,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=1"
			);
		});

		cta_3.addEventListener("click", () => {
			handler = 3;
			gsap.set("#circle-2", { zIndex: 2 });
			gsap.set("#circle-1", { zIndex: 1 });
			gsap.set("#circle-3", { zIndex: 3 });
			gsap.set("#geniki-xeirourgiki-text", { display: "none" });
			gsap.set("#xeirourgiki-ogkologia-text", { display: "none" });
			gsap.set("#laparoskopiki-xeirourgiki-text", { display: "block" });

			tl_3.to("#circle-1", {
				x: 750,
				ease: "expo.inOut",
				duration: 2,
				transform: "scale(1.3)",
			});
			tl_3.to(
				"#circle-2",
				{
					x: 365,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=2"
			);
			tl_3.to(
				"#circle-3",
				{
					transform: "scale(3.5)",
					ease: "expo.inOut",
					duration: 2,
					x: -90,
				},
				"-=2"
			);
			tl_3.to(
				"#circle-3",
				{
					opacity: 0,
				},
				"-=0.5"
			);
			tl_3.to(
				"#laparoskopiki-xeirourgiki-img",
				{
					opacity: 1,
					duration: 2,
					ease: "expo.inOut",
				},
				"-=1.5"
			);
			tl_3.to(
				"#laparoskopiki-xeirourgiki-text",
				{
					y: 0,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=1.5"
			);
			tl_3.to(
				".animation-links a",
				{
					opacity: 0,
					stagger: 0.2,
					duration: 1,
					ease: "expo.inOut",
				},
				"-=2"
			);
			tl_3.to(
				".animation-links a",
				{
					pointerEvents: "none",
				},
				"-=1"
			);
			tl_3.to(
				"#cta-more-btn",
				{
					opacity: 0,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=1"
			);
			tl_3.to(
				"#reverse-animation",
				{
					opacity: 1,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=1"
			);
		});

		cta_1.addEventListener("mouseenter", () => {
			document.getElementById("circle-1").style.filter = "blur(0px)";
		});
		cta_1.addEventListener("mouseleave", () => {
			document.getElementById("circle-1").style.filter = "blur(5px)";
		});
		cta_2.addEventListener("mouseenter", () => {
			document.getElementById("circle-2").style.filter = "blur(0px)";
		});
		cta_2.addEventListener("mouseleave", () => {
			document.getElementById("circle-2").style.filter = "blur(5px)";
		});
		cta_3.addEventListener("mouseenter", () => {
			document.getElementById("circle-3").style.filter = "blur(0px)";
		});
		cta_3.addEventListener("mouseleave", () => {
			document.getElementById("circle-3").style.filter = "blur(5px)";
		});
	}
}

if (window.matchMedia("(max-width:600px").matches) {
	if (document.getElementById("geniki-xeirourgiki")) {
		let cta_1 = document.getElementById("geniki-xeirourgiki");
		let cta_2 = document.getElementById("xeirourgiki-ogkologia");
		let cta_3 = document.getElementById("laparoskopiki-xeirourgiki");

		var tl = gsap.timeline({ delay: 1 });
		var tl_2 = gsap.timeline({ delay: 1 });
		var tl_3 = gsap.timeline({ delay: 1 });

		let handler = 0;

		cta_1.addEventListener("click", () => {
			handler = 1;
			gsap.set("#circle-2", { zIndex: 2 });
			gsap.set("#circle-1", { zIndex: 3 });
			gsap.set("#circle-3", { zIndex: 1 });
			gsap.set("#geniki-xeirourgiki-text", { display: "block" });
			gsap.set("#xeirourgiki-ogkologia-text", { display: "none" });
			gsap.set("#laparoskopiki-xeirourgiki-text", { display: "none" });

			tl.to("#circle-1", {
				x: 820,
				ease: "expo.inOut",
				duration: 2,
				transform: "scale(1.35)",
				filter: "blur(0px)",
			});
			tl.to(
				"#circle-2",
				{
					x: 400,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=2"
			);
			tl.to(
				"#geniki-xeirourgiki-img",
				{
					opacity: 1,
					duration: 1,
					ease: "expo.inOut",
				},
				"-=.5"
			);
			tl.to(
				"#circle-1",
				{
					opacity: 0,
					duration: 1.5,
				},
				"-=0.5"
			);
			tl.to(
				"#geniki-xeirourgiki-text",
				{
					y: 0,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=1.5"
			);
			tl.to(
				".animation-links a",
				{
					opacity: 0,
					stagger: 0.2,
					duration: 1,
					ease: "expo.inOut",
				},
				"-=2"
			);
			tl.to(
				".animation-links a",
				{
					pointerEvents: "none",
				},
				"-=1"
			);
			tl.to(
				"#cta-more-btn",
				{
					opacity: 0,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=1"
			);
			tl.to(
				"#circle-3",
				{
					opacity: 0,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=5"
			);
			tl.to(
				"#reverse-animation",
				{
					opacity: 1,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=1"
			);
		});

		document
			.getElementById("reverse-animation")
			.addEventListener("click", () => {
				if (handler === 1) {
					tl.timeScale(2);
					tl.reverse();
				}
				if (handler === 2) {
					tl_2.timeScale(2);
					tl_2.reverse();
				}
				if (handler === 3) {
					tl_3.timeScale(2);
					tl_3.reverse();
				}
			});

		cta_1.addEventListener("click", () => {
			if (handler === 1) {
				tl.timeScale(1);
				tl.play();
			}
		});

		cta_2.addEventListener("click", () => {
			if (handler === 2) {
				tl_2.timeScale(1);
				tl_2.play();
			}
		});

		cta_3.addEventListener("click", () => {
			if (handler === 3) {
				tl_3.timeScale(1);
				tl_3.play();
			}
		});

		cta_2.addEventListener("click", () => {
			handler = 2;
			gsap.set("#circle-2", { zIndex: 3 });
			gsap.set("#circle-1", { zIndex: 2 });
			gsap.set("#circle-3", { zIndex: 1 });
			gsap.set("#geniki-xeirourgiki-text", { display: "none" });
			gsap.set("#xeirourgiki-ogkologia-text", { display: "block" });
			gsap.set("#laparoskopiki-xeirourgiki-text", { display: "none" });

			tl_2.to("#circle-1", {
				x: 750,
				ease: "expo.inOut",
				duration: 2,
				transform: "scale(1.3)",
				// opacity: 0.5,
			});
			tl_2.to(
				"#circle-2",
				{
					x: 328,
					ease: "expo.inOut",
					duration: 2,
					filter: "blur(0px)",
				},
				"-=2"
			);
			tl_2.to(
				"#circle-3",
				{
					opacity: 0,
					ease: "expo.inOut",
					duration: 2,
					filter: "blur(0px)",
				},
				"-=2"
			);
			tl_2.to(
				"#xeirourgiki-ogkologia-img",
				{
					opacity: 1,
					duration: 1,
					ease: "expo.inOut",
				},
				"-=.5"
			);
			tl_2.to(
				"#xeirourgiki-ogkologia-text",
				{
					y: 0,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=1.5"
			);
			tl_2.to(
				".animation-links a",
				{
					opacity: 0,
					stagger: 0.2,
					duration: 1,
					ease: "expo.inOut",
				},
				"-=2"
			);
			tl_2.to(
				".animation-links a",
				{
					pointerEvents: "none",
				},
				"-=1"
			);
			tl_2.to(
				"#cta-more-btn",
				{
					opacity: 0,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=1"
			);
			tl_2.to(
				"#reverse-animation",
				{
					opacity: 1,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=1"
			);
		});

		cta_3.addEventListener("click", () => {
			handler = 3;
			gsap.set("#circle-2", { zIndex: 2 });
			gsap.set("#circle-1", { zIndex: 1 });
			gsap.set("#circle-3", { zIndex: 3 });
			gsap.set("#geniki-xeirourgiki-text", { display: "none" });
			gsap.set("#xeirourgiki-ogkologia-text", { display: "none" });
			gsap.set("#laparoskopiki-xeirourgiki-text", { display: "block" });

			tl_3.to("#circle-1", {
				x: 750,
				ease: "expo.inOut",
				duration: 2,
				transform: "scale(1.3)",
			});
			tl_3.to(
				"#circle-2",
				{
					x: 365,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=2"
			);
			tl_3.to(
				"#circle-3",
				{
					transform: "scale(3.5)",
					ease: "expo.inOut",
					duration: 2,
					x: -90,
				},
				"-=2"
			);
			tl_3.to(
				"#circle-3",
				{
					opacity: 0,
				},
				"-=0.5"
			);
			tl_3.to(
				"#laparoskopiki-xeirourgiki-img",
				{
					opacity: 1,
					duration: 2,
					ease: "expo.inOut",
				},
				"-=1.5"
			);
			tl_3.to(
				"#laparoskopiki-xeirourgiki-text",
				{
					y: 0,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=1.5"
			);
			tl_3.to(
				".animation-links a",
				{
					opacity: 0,
					stagger: 0.2,
					duration: 1,
					ease: "expo.inOut",
				},
				"-=2"
			);
			tl_3.to(
				".animation-links a",
				{
					pointerEvents: "none",
				},
				"-=1"
			);
			tl_3.to(
				"#cta-more-btn",
				{
					opacity: 0,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=1"
			);
			tl_3.to(
				"#reverse-animation",
				{
					opacity: 1,
					ease: "expo.inOut",
					duration: 2,
				},
				"-=1"
			);
		});

		cta_1.addEventListener("mouseenter", () => {
			document.getElementById("circle-1").style.filter = "blur(0px)";
		});
		cta_1.addEventListener("mouseleave", () => {
			document.getElementById("circle-1").style.filter = "blur(5px)";
		});
		cta_2.addEventListener("mouseenter", () => {
			document.getElementById("circle-2").style.filter = "blur(0px)";
		});
		cta_2.addEventListener("mouseleave", () => {
			document.getElementById("circle-2").style.filter = "blur(5px)";
		});
		cta_3.addEventListener("mouseenter", () => {
			document.getElementById("circle-3").style.filter = "blur(0px)";
		});
		cta_3.addEventListener("mouseleave", () => {
			document.getElementById("circle-3").style.filter = "blur(5px)";
		});
	}
}

if (document.getElementById("open-burger-menu")) {
	document
		.querySelector("#open-burger-menu")
		.addEventListener("click", () => {
			document.querySelector("#mobile-menu").style.display = "block";
		});
	document
		.querySelector("#close-burger-menu")
		.addEventListener("click", () => {
			document.querySelector("#mobile-menu").style.display = "none";
		});
}
