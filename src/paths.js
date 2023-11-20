/**
 * Get the base URL of the current page. Combines protocol, host, and port information.
 *
 * @returns {string} The site URL.
 */
export function getUrl() {
	return window.location.origin;
}

/**
 * Get the full URL of the current page. Includes protocol, host, path, and query string.
 *
 * @returns {string} The current page URL.
 */
export function getFullUrl() {
    return window.location.href;
}

/**
 * Get template URL from the data attributes 'data-template-url' of the body tag.
 * @returns {string|null} The template URL if set, or null if not found.
 */
export function getTemplateUrl() {
	return document.body.dataset.templateUrl || null;
}