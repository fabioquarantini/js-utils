/**
 * Match CSS media queries and JavaScript window width.
 *
 * @see http://stackoverflow.com/a/11310353
 * @returns {{width: number, height: number}} An object containing the width and height of the viewport.
 */
export function getViewportSize() {
	let e = window;
	let a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return {
		width: e[`${a}Width`],
		height: e[`${a}Height`],
	};
}

/**
 * Checks if the current device is a touch-enabled device.
 *
 * @returns {boolean} True if the device supports touch, false otherwise.
 */
export function isTouchDevice() {
	return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}

/**
 * Determines the orientation of the device.
 *
 * @returns {string} 'portrait' if the device is in portrait mode, 'landscape' otherwise.
 */
export function getDeviceOrientation() {
	const mql = window.matchMedia('(orientation: portrait)');
	return mql.matches ? 'portrait' : 'landscape';
}

/**
 * Calculates the mouse position relative to the document.
 *
 * @see http://www.quirksmode.org/js/events_properties.html#position
 * @param {Event} event - The mouse event from which to extract the position.
 * @returns {{x: number, y: number}} An object containing the x and y coordinates of the mouse.
 */
export function getMousePosition(event) {
	let posx = 0;
	let posy = 0;
	if (!event) {
		event = window.event;
	}
	if (event.pageX || event.pageY) {
		posx = event.pageX;
		posy = event.pageY;
	} else if (event.clientX || event.clientY) {
		posx =
			event.clientX +
			document.body.scrollLeft +
			document.documentElement.scrollLeft;
		posy =
			event.clientY +
			document.body.scrollTop +
			document.documentElement.scrollTop;
	}
	return {
		x: posx,
		y: posy,
	};
}
