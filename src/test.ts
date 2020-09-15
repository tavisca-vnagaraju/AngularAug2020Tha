// write the jest initialization for testing the angular w/o DOM
import 'jest-preset-angular';
// if the code to test contains CSS then the WIndow Object must have CSS
// the inline styles to HTML elements and also the styles applied
// externally .css files
Object.defineProperty(window, 'CSS', { value: null });
// define ptroperty for all computed styles
// referred from external Styles Frameworks /libs
// e.g. bootstrap or iotaCSS (.scss to .css)
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance']
    };
  }
});

// HTML Template parsing using docType
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});
// parse the HTML DOcument for any type of dynamic
// transformations e.g. event binding that generate HTML dynamically

Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});
