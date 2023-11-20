# JS Utils

A collection of JS utilities.

## Install

```sh
npm install @fabioquarantini/js-utils
```

## Usage

```js
import { setCookie } from 'js-utils';

setCookie("examplename", "123")
```

# API

## Cookies

### `setCookie(name, value, days)`
Sets a cookie with a name, value, and number of days until it expires.

#### Parameters
- `name` (string): The name of the cookie.
- `value` (string): The value of the cookie.
- `days` (number): The number of days until the cookie expires.

---

### `getCookie(name)`
Retrieves the value of a cookie given its name.

#### Parameters
- `name` (string): The name of the cookie.

#### Returns
- (string|null): The value of the cookie if it exists, otherwise null.

---

### `deleteCookie(name)`
Deletes a cookie given its name.

#### Parameters
- `name` (string): The name of the cookie.


## Device

### `getViewportSize()`
Match CSS media queries and JavaScript window width.

#### Returns
- {width: number, height: number}: An object containing the width and height of the viewport.

---

### `isTouchDevice()`
Checks if the current device is a touch-enabled device.

#### Returns
- {boolean}: True if the device supports touch, false otherwise.

---

### `getDeviceOrientation()`
Determines the orientation of the device.

#### Returns
- {string}: 'portrait' if the device is in portrait mode, 'landscape' otherwise.

---

### `getMousePosition(event)`
Calculates the mouse position relative to the document.

#### Parameters
- `event` (Event): The mouse event from which to extract the position.

#### Returns
- {x: number, y: number}: An object containing the x and y coordinates of the mouse.


## Language

### `getUserLanguage()`
Retrieves the user's preferred language setting from the browser.

#### Returns
- (string): The user's preferred language as a string (e.g., "en-US").

---

### `getSiteLanguage()`
Gets the language attribute of the current document.

#### Returns
- (string): The language of the current document as defined in its <html> tag (e.g., "en").

## Math

### `getRandomNumber(min, max, [decimal])`
Generates a random number within a specified range, optionally formatted to the specified decimal precision.

#### Parameters
- `min` (number): The minimum value of the range.
- `max` (number): The maximum value of the range.
- `decimal` (number, optional): The number of decimal places to include in the result.

#### Returns
- (number): A random number within the specified range, optionally formatted to the specified decimal precision.

---

### `getRandomInt(min, max)`
Generates a random integer within a specified range.

#### Parameters
- `min` (number): The minimum value of the range.
- `max` (number): The maximum value of the range.

#### Returns
- (number): A random integer within the specified range.

---

### `normalize(value, sourceMin, sourceMax, targetMin, targetMax)`
Normalizes a given value from one range to another.

#### Parameters
- `value` (number): The value to normalize.
- `sourceMin` (number): The minimum value of the source range.
- `sourceMax` (number): The maximum value of the source range.
- `targetMin` (number): The minimum value of the target range.
- `targetMax` (number): The maximum value of the target range.

#### Returns
- (number): The value normalized to the target range.

---

### `lerp(start, end, amount)`
Performs linear interpolation between two values based on an amount.

#### Parameters
- `start` (number): The start value.
- `end` (number): The end value.
- `amount` (number): The interpolation amount between the start and end values.

#### Returns
- (number): The interpolated value.

## Selectors

### `elementExist(selector)`
Checks if an element with the specified selector exists in the DOM.

#### Parameters
- `selector` (string): The CSS selector of the element to check.

#### Returns
- (boolean): True if the element exists, false otherwise.

---

### `onElementChange(selector, onAdded, onRemoved, observeConfig = {})`
Observes DOM for specified selector's element additions or removals, triggering callbacks.

#### Parameters
- `selector` (string): CSS selector for matching elements.
- `onAdded` (function): Callback for element additions matching the selector.
- `onRemoved` (function): Callback for element removals matching the selector.
- `observeConfig` (Object): Optional config for the observer (childList, subtree, attributes, characterData).

#### Returns
- (function): Function to disconnect the observer.

## Performance

### `throttle(func, limit)`
Throttles a function call, ensuring that it is only invoked at most once every specified limit in milliseconds.

#### Parameters
- `func` (Function): The function to be throttled.
- `limit` (number): The time limit in milliseconds to throttle the function calls.

#### Returns
- (Function): A throttled version of the input function.

---

### `debounce(func, wait, immediate)`
Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for N milliseconds. If 'immediate' is passed, trigger the function on the leading edge, instead of the trailing.

#### Parameters
- `func` (Function): The function to debounce.
- `wait` (number): The number of milliseconds to delay.
- `immediate` (boolean, optional): Specify invoking on the leading edge of the timeout.

#### Returns
- (Function): Returns the new debounced function.

## Events

### `dispatchCustomEvent(eventName, detail, debug = false)`
Dispatches a custom event.

#### Parameters
- `eventName` (string): The name of the custom event to dispatch.
- `detail` (*): The data to pass with the event.
- `debug` (boolean, optional, default: false): Enables logging for debugging purposes.

#### Throws
- Will throw an error if the event name is not a string or is empty.

## Validations

### `isEmail(value)`
Checks if a given value is a valid email address.

#### Parameters
- `value` (string): The value to be checked.

#### Returns
- (boolean): True if the value is a valid email address, false otherwise.

---

### `isUrl(value)`
Checks if a given value is a valid URL.

#### Parameters
- `value` (string): The value to be checked.

#### Returns
- (boolean): True if the value is a valid URL, false otherwise.

---

### `isInteger(value)`
Checks if a given value is an integer.

#### Parameters
- `value` (string): The value to be checked.

#### Returns
- (boolean): True if the value is an integer, false otherwise.

---

### `isNumeric(value)`
Checks if a given value is numeric.

#### Parameters
- `value` (string): The value to be checked.

#### Returns
- (boolean): True if the value is numeric, false otherwise.

---

### `isFloat(value)`
Checks if a given value is a floating-point number.

#### Parameters
- `value` (string): The value to be checked.

#### Returns
- (boolean): True if the value is a float, false otherwise.

---

### `isEmpty(value, ignoreWhiteSpace)`
Checks if a given value is empty. Can optionally ignore white space.

#### Parameters
- `value` (string): The value to be checked.
- `ignoreWhiteSpace` (boolean): If true, white space is ignored.

#### Returns
- (boolean): True if the value is empty, false otherwise.

## Paths

### `getUrl()`
Get the base URL of the current page. Combines protocol, host, and port information.

#### Returns
- (string): The site URL.

---

### `getFullUrl()`
Get the full URL of the current page. Includes protocol, host, path, and query string.

#### Returns
- (string): The current page URL.

---

### `getTemplateUrl()`
Get template URL from the data attributes 'data-template-url' of the body tag.

#### Returns
- (string|null): The template URL if set, or null if not found.