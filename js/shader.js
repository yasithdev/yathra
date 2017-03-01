$(function() {
	var $body = $(document.body),
		$window = $(window);

	// Background

	var canvas = document.createElement('canvas');

	backgroundEnabled = canvas.getContext && canvas.getContext('2d') && $('#background-container').css('display') != 'none';

	if (backgroundEnabled) {
		config.background = {
			enabled: true,

			RENDER: {
				renderer: 'canvas'
			},

			MESH: {
				width: 1.2,
				height: 1.2,
				depth: 10,
				segments: 16,
				slices: 8,
				xRange: 0.8,
				yRange: 0.1,
				zRange: 1.0,
				ambient: '#555555',
				diffuse: '#FFFFFF',
				speed: 0.0005
			},

			LIGHT: {
				count: 2,
				xyScalar: 1,
				zOffset: 150,
				ambient: '#880066',
				diffuse: '#D77600',
				speed: 0.001,
				gravity: 1200,
				dampening: 0.15,
				minLimit: 8,
				maxLimit: null,
				minDistance: 20,
				maxDistance: 400,
				autopilot: true,
				draw: false
			}
		}


		if ($body.hasClass('theme-ice')) {
			config.background.LIGHT.ambient = '#1165A4';
			config.background.LIGHT.diffuse = '#514311';
		} else if ($body.hasClass('theme-nature')) {
			config.background.LIGHT.ambient = '#00935B';
			config.background.LIGHT.diffuse = '#02480A';
		} else if ($body.hasClass('theme-sea')) {
			config.background.LIGHT.ambient = '#76E4CE';
			config.background.LIGHT.diffuse = '#0E411F';
			config.background.LIGHT.zOffset = 100;
		} else if ($body.hasClass('theme-candy')) {
			config.background.LIGHT.ambient = '#A42D71';
			config.background.LIGHT.diffuse = '#4E2F1B';
		} else if ($body.hasClass('theme-peach')) {
			config.background.LIGHT.ambient = '#FF7171';
			config.background.LIGHT.diffuse = '#895321';
			config.background.LIGHT.zOffset = 100;
		} else if ($body.hasClass('theme-light')) {
			config.background.LIGHT.ambient = '#DBAA95';
			config.background.LIGHT.diffuse = '#4F460B';
		} else if ($body.hasClass('theme-darkness')) {
			config.background.LIGHT.ambient = '#3C3C3C';
			config.background.LIGHT.diffuse = '#494949';
			config.background.LIGHT.zOffset = 200;
		}

		initBackground();
	}
});