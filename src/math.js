/**
 * Generates a random number between a specified minimum and maximum range.
 *
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @param {number} [decimal] - The number of decimal places to include in the result.
 * @returns {number} A random number within the specified range, optionally formatted to the specified decimal precision.
 */
export function getRandomNumber(min, max, decimal) {
	const result = Math.random() * (max - min) + min;

	if (typeof decimal !== 'undefined') {
		return Number(result.toFixed(decimal));
	}
	return result;
}

/**
 * Generates a random integer between a specified minimum and maximum range, inclusive.
 *
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random integer within the specified range.
 */
export function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Normalizes a given value from one range to another.
 *
 * @param {number} value - The value to normalize.
 * @param {number} sourceMin - The minimum value of the source range.
 * @param {number} sourceMax - The maximum value of the source range.
 * @param {number} targetMin - The minimum value of the target range.
 * @param {number} targetMax - The maximum value of the target range.
 * @throws {Error} If the source or target range is invalid (i.e., max < min).
 * @returns {number} The value normalized to the target range.
 */
export function normalize(value, sourceMin, sourceMax, targetMin, targetMax) {
	if (sourceMax < sourceMin || targetMax < targetMin) {
	  throw new Error('Invalid range parameters');
	}

	const clampedValue = Math.max(Math.min(value, sourceMax), sourceMin);
	const sourceRange = sourceMax - sourceMin;
	const percentage = (clampedValue - sourceMin) / sourceRange;
	const targetRange = targetMax - targetMin;
	const targetValue = targetMin + (percentage * targetRange);

	return targetValue;
}

/**
 * Performs linear interpolation between two values based on an amount.
 *
 * @param {number} start - The start value.
 * @param {number} end - The end value.
 * @param {number} amount - The interpolation amount between the start and end values.
 * @returns {number} The interpolated value.
 */
export function lerp(start, end, amount) {
	return (1 - amount) * start + amount * end;
}
