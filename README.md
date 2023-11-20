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

- `setCookie(name: string, value: string, days: number)`: Sets a cookie with the given name and value, which expires after the specified number of days.
- `getCookie(name: string)`: Returns the value of the cookie with the given name, or null if the cookie does not exist.
- `deleteCookie(name: string)`: Deletes the cookie with the given name.

## Device

- `getViewportSize()`: Returns the current viewport size as an object { width: number, height: number }.
- `isTouchDevice()`: Returns a boolean indicating whether the current device is a touch device.
- `getDeviceOrientation()`: Returns the current device orientation as a string ('portrait' or 'landscape').
- `getMousePosition(event: Event)`: Returns the current mouse position as an object { x: number, y: number }.

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