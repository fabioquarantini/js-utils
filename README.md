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

- `getUserLanguage()`: Returns the user's preferred language as a string (e.g., "en-US").
- `getSiteLanguage()`: Returns the current site's language as a string (e.g., "en").

## Math

- `getRandomNumber(min: number, max: number, decimal?: number)`: Returns a random number between min and max, optionally formatted to the specified decimal precision.
- `getRandomInt(min: number, max: number)`: Returns a random integer between min and max.
- `normalize(value: number, sourceMin: number, sourceMax: number, targetMin: number, targetMax: number)`: Normalizes a number from one range to another.
- `lerp(start: number, end: number, amount: number)`: Performs linear interpolation between two values based on an amount.

## Selectors

- `elementExist(selector: string)`: Checks if an element with the specified selector exists in the DOM.
- `onElementChange(selector: string, onAdded: function, onRemoved: function, observeConfig: Object)`: Observes DOM for specified selector's element additions or removals, triggering callbacks.

## Performance

- `throttle(func: function, limit: number)`: Throttles a function call, ensuring that it is only invoked at most once every specified limit in milliseconds.
- `debounce(func: function, wait: number, immediate: boolean)`: Returns a function, that, as long as it continues to be invoked, will not be triggered.

## Events

- `dispatchCustomEvent(eventName: string, detail: any, debug: boolean)`: Dispatches a custom event.

## Validations

- `isEmail(value: string)`: Checks if a given value is a valid email address.
- `isUrl(value: string)`: Checks if a given value is a valid URL.
- `isInteger(value: string)`: Checks if a given value is an integer.
- `isNumeric(value: string)`: Checks if a given value is numeric.
- `isFloat(value: string)`: Checks if a given value is a floating-point number.
- `isEmpty(value: string, ignoreWhiteSpace: boolean)`: Checks if a given value is empty. Can optionally ignore white space.

## Paths

- `getUrl()`: Get the base URL of the current page. Combines protocol, host, and port information.
- `getFullUrl()`: Get the full URL of the current page. Includes protocol, host, path, and query string.
- `getTemplateUrl()`: Get template URL from the data attributes 'data-template-url' of the body tag.