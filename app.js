//Network Animation
tsParticles
	.load("canvas", {
		fpsLimit: 90,
		interactivity: {
			detectsOn: "canvas",
			events: {
				resize: true,
				onclick: { enable: true, mode: "attract" },
				onhover: {
					enable: true,
					mode: "bubble",
					parallax: {
						enable: false,
						force: 2,
						smooth: 10,
					},
				},
				onDiv: {
					selectors: "#repulse-div",
					enable: false,
					mode: "repulse",
					type: "circle",
				},
			},
			modes: {
				trail: {
					delay: 1,
					pauseOnStop: false,
					quantity: 1,
				},
				attract: {
					distance: 200,
					duration: 0.4,
					easing: "ease-out-quad",
					factor: 1,
					maxSpeed: 50,
					speed: 1,
				},
				bounce: {
					distance: 200,
				},
				bubble: {
					distance: 40,
					duration: 2,
					mix: false,
					opacity: 8,
					size: 16,
					divs: {
						distance: 200,
						duration: 0.4,
						mix: false,
						selectors: {},
					},
				},
				connect: {
					distance: 80,
					links: {
						opacity: 0.5,
					},
					radius: 60,
				},
				grab: {
					distance: 400,
					links: {
						blink: false,
						consent: false,
						opacity: 1,
					},
				},
				push: {
					default: true,
					groups: {},
					quantity: 4,
				},
				remove: {
					quantity: 2,
				},
				repulse: {
					distance: 200,
					duration: 0.4,
					factor: 100,
					speed: 1,
					maxSpeed: 50,
					easing: "ease-out-quad",
					divs: {
						distance: 200,
						duration: 0.4,
						factor: 100,
						speed: 1,
						maxSpeed: 50,
						easing: "ease-out-quad",
						selectors: {},
					},
				},
				slow: {
					factor: 1,
					radius: 0,
				},
				light: {
					area: {
						gradient: {
							start: {
								value: "#ffffff",
							},
							stop: {
								value: "#000000",
							},
						},
						radius: 1000,
					},
					shadow: {
						color: {
							value: "#000000",
						},
						length: 2000,
					},
				},
			},
		},

		particles: {
			color: { value: "#2ec4c7" },
			links: {
				color: "#2ed5da",
				distance: 100,
				enable: true,
				opacity: 1,
				width: 1,
			},
			number: { value: 40 },
			move: {
				enable: true,
				speed: 0.2,
			},
			opacity: {
				value: 1,
				random: true,
			},
			shape: {
				character: {
					fill: false,
					font: "Verdana",
					style: "10px",
					value: ["hello", "love you"],
					weight: "3",
				},
				image: [
					{
						height: 100,
						replace_color: true,
						src: "sample.png",
						width: 100,
					},
					{
						height: 100,
						replace_color: true,
						src: "sample.png",
						width: 100,
					},
					{
						height: 100,
						replace_color: true,
						src: "sample2.png",
						width: 100,
					},
				],
				polygon: { nb_sides: 3 },
				polygon: {
					draw: { enable: true, lineColor: "#4b80c2", lineWidth: 0.5 },
					move: { radius: 10 },
					scale: 1,
					type: "none",
					url: "",
				},
				type: ["circle", "image"],
			},
			stroke: { color: "#21a7e0", width: 1 },
			size: {
				value: 10,
				random: true,
			},
		},
		retina_detect: true,
	})
	.then((container) => {
		tsParticles.setOnClickHandler((e, particles) => {
			for (const p of particles) {
				// let preVelocityHorizontal = p.velocity.horizontal
				// let preVelocityVertical = p.velocity.vertical
				// let preSize = p.size.value
				// let preOpacity = p.size.value
				// console.log(p)
				// p.size.value = 100
				// p.opacity.value = 1
				// p.velocity.horizontal = 0
				// p.velocity.vertical = 0
				// setTimeout(() => {
				// 	p.size.value = preSize
				// 	p.opacity.value = preOpacity
				// 	p.velocity.horizontal = preVelocityHorizontal
				// 	p.velocity.vertical = preVelocityVertical
				// }, 1000);
			}
		});
	});

//Text Animation
$(document).ready(function () {
	$(".header1").textillate({
		initialDelay: 0,
		in: {
			effect: "fadeInRight",

			delay: "10",
			speed: "1000",
		},
	});
	$(".header2").textillate({
		initialDelay: 200,
		in: {
			effect: "fadeInRight",
			delay: "10",
			speed: "5000",
		},
	});
	$(".sub-header").textillate({
		initialDelay: 500,
		in: {
			effect: "bounceIn",
			delay: "5",
			speed: "1000",
			sync: false,
			shuffle: false,
			reverse: false,

		},
	});
});

//Scroll Reveal
ScrollReveal().reveal('.apply-btn',
{
	delay:750,
	distance: '150%',
    origin: 'bottom',
}
);
