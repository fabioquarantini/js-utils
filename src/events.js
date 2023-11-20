/**
 * Dispatches a custom event.
 *
 * @param {string} eventName - The name of the custom event to dispatch.
 * @param {*} detail - The data to pass with the event.
 * @param {boolean} [debug=false] - Enables logging for debugging purposes.
 * @throws Will throw an error if the event name is not a string or is empty.
 */
export function dispatchCustomEvent(eventName, detail, debug = false) {
	if (typeof eventName !== 'string' || eventName.trim() === '') {
		throw new Error('Event name must be a non-empty string.');
	}

	const event = new window.CustomEvent(eventName, { detail });
	window.dispatchEvent(event);

	if (debug) {
		console.log('🚀 Dispatched event:', eventName);
	}
}
