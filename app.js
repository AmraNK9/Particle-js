tsParticles
	.load("canvas", {
		fpsLimit: 90,
		interactivity: {
			detectsOn: "canvas",
			events: {
				resize: true,
				onclick: { enable: true, mode: "attract" },

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
				speed:.5
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
					value: ['hello','love you'],
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
					url: ""
				  },
				type: ['circle','image'],
			},
			stroke: { color: "#21a7e0", width: 1 },
			size: {
				value: 10,
				random:true
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
