/**
 * Sets a cookie with a name, value, and number of days until it expires.
 *
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {number} days - The number of days until the cookie expires.
 */
export function setCookie(name, value, days) {
	let expires;

	if (days) {
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = `; expires=${date.toGMTString()}`;
	} else {
		expires = '';
	}

	document.cookie = `${name}=${value}${expires}; path=/`;
}

/**
 * Retrieves the value of a cookie given its name.
 *
 * @param {string} name - The name of the cookie.
 * @return {string|null} The value of the cookie if it exists, otherwise null.
 */
export function getCookie(name) {
	const nameEQ = `${name}=`;
	const ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i].trim();
		if (c.startsWith(nameEQ)) {
			return c.substring(nameEQ.length);
		}
	}
	return null;
}

/**
 * Deletes a cookie given its name.
 *
 * @param {string} name - The name of the cookie.
 */
export function deleteCookie(name) {
	setCookie(name, '', -1);
}
