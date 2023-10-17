const mouseEvent = {
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: true,
				mode: "attract",
				parallax: { enable: false, force: 60, smooth: 10 },
			},
			resize: true,
		},
		modes: {
			push: { quantity: 4 },
			attract: { distance: 200, duration: 0.4, factor: 5 },
		},
	},
};
