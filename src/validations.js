/**
 * Checks if a given value is a valid email address.
 *
 * @param {string} value - The value to be checked.
 * @returns {boolean} True if the value is a valid email address, false otherwise.
 */
export function isEmail(value) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
}

/**
 * Checks if a given value is a valid URL.
 *
 * @param {string} value - The value to be checked.
 * @returns {boolean} True if the value is a valid URL, false otherwise.
 */
export function isUrl(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
}

/**
 * Checks if a given value is an integer.
 *
 * @param {string} value - The value to be checked.
 * @returns {boolean} True if the value is an integer, false otherwise.
 */
export function isInteger(value) {
    return /^-?\d+$/.test(value);
}

/**
 * Checks if a given value is numeric.
 *
 * @param {string} value - The value to be checked.
 * @returns {boolean} True if the value is numeric, false otherwise.
 */
export function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

/**
 * Checks if a given value is a floating-point number.
 *
 * @param {string} value - The value to be checked.
 * @returns {boolean} True if the value is a float, false otherwise.
 */
export function isFloat(value) {
    return /-?\d+\.\d+/.test(value);
}

/**
 * Checks if a given value is empty. Can optionally ignore white space.
 *
 * @param {string} value - The value to be checked.
 * @param {boolean} ignoreWhiteSpace - If true, white space is ignored.
 * @returns {boolean} True if the value is empty, false otherwise.
 */
export function isEmpty(value, ignoreWhiteSpace) {
    return (ignoreWhiteSpace ? value.trim().length : value.length) === 0;
}
