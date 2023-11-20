/**
 * Checks if an element with the specified selector exists in the DOM.
 *
 * @param {string} selector - The CSS selector of the element to check.
 * @returns {boolean} True if the element exists, false otherwise.
 */
export function elementExist(selector) {
    return document.querySelector(selector) !== null;
}

/**
 * Observes DOM for specified selector's element additions or removals, triggering callbacks.
 *
 * @param {string} selector - CSS selector for matching elements.
 * @param {function} onAdded - Callback for element additions matching the selector.
 * @param {function} onRemoved - Callback for element removals matching the selector.
 * @param {Object} observeConfig - Optional config for the observer (childList, subtree, attributes, characterData).
 * @returns {function} Function to disconnect the observer.
 *
 * @example
 * const stopObserving = onElementChange('.my-class',
 *     addedElement => console.log('Added:', addedElement),
 *     removedElement => console.log('Removed:', removedElement),
 *     { attributes: true }
 * );
 * stopObserving();
 */
export function onElementChange(selector, onAdded, onRemoved, observeConfig = {}) {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.matches && node.matches(selector)) {
                    onAdded(node);
                }
                node.querySelectorAll(selector).forEach(matchedNode => {
                    onAdded(matchedNode);
                });
            });

            mutation.removedNodes.forEach((node) => {
                if (node.matches && node.matches(selector)) {
                    onRemoved(node);
                }
                node.querySelectorAll(selector).forEach(matchedNode => {
                    onRemoved(matchedNode);
                });
            });
        });
    });

    const config = {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
        ...observeConfig
    };

    observer.observe(document, config);

    return () => observer.disconnect();
}

