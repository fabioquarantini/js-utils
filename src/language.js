/**
 * Retrieves the user's preferred language setting from the browser.
 *
 * @returns {string} The user's preferred language as a string (e.g., "en-US").
 */
export function getUserLanguage() {
    return navigator.language || navigator.userLanguage;
}

/**
 * Gets the language attribute of the current document.
 *
 * @returns {string} The language of the current document as defined in its <html> tag (e.g., "en").
 */
export function getSiteLanguage() {
    return document.documentElement.lang;
}
