# Element.kit

The following methods will be available to you under the "kit" property of all of your HTMLElements.


### Element.kit.appendOuterHtml

`Element.kit.appendOuterHtml(html)`

Appends a parent element. `html` is a string of HTML to wrap and append to the parent of the current element.

```javascript
var el = document.getElementByClassName('div')[0],
    containerHtml = '<div class="wrapper"></div>',
    container = el.kit.appendOuterHtml(el, containerHtml);

container.innerHTML
=>  '<div class="wrapper"><p class="my-existing-content"></p></div>'

```

### Element.kit.waitForTransition

`Element.kit.waitForTransition(callback)`

Waits until the CSS transition for an element completes before firing a callback.
`callback` is a function that will be called when the element's css transition completes.


*This assumes there is a `<div>` element on your page that has its `transition-duration` property set to `100ms`*

```javascript
var el = document.getElementByTagName('div')[0];
el.kit.classList.add('animate'); // add "animate" class that will transition element
el.kit.waitForTransition(el, function (el) {
    // 100 milliseconds later...
    console.log('transition complete!');
});
```

### Element.kit.getCssComputedProperty

`Element.kit.getCssComputedProperty(property)`

Gets the then-current value of the element's css property (even after its been manipulated). The `property` passed in can be the same string that is used in css (no javascript version needed).

*This assumes there is a `<div>` element on your page that has a width of 300 pixels*

```javascript
var el = document.getElementByTagName('div')[0];
el.kit.getCssComputedProperty('width');
=> '300px'

```

### Element.kit.addEventListener

Adds an event listener to the element.
This has similar interface to the [EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener), however Element Kit's version provides a few more enhancements.

`Element.kit.addEventListener(event, listener, context, options)`

The `event` is the event string.
The `listener` is a callback function that is called when the event is triggered.
`context` is the context of which should be used when the `callback` function fires. And `options` is an Object containing the additional options available via the [EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener) interface.

```javascript
var el = document.getElementByTagName('div')[0],
    obj = {},
    callback = function (){
         // click event was fired!
    };
el.kit.addEventListener('click', callback, obj, {useCapture: true});
```

### Element.kit.removeEventListener

When adding an event listener using Element Kit, you'll need to also remove it using the exact same parameters passed to the original `addEventListener()` call.
The interface is similar to the [EventTarget.removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.removeEventListener) interface.

`Element.kit.removeEventListener(event, listener, context, options)`

The `event` is the event string.
The `listener` is a callback function that is called when the event is triggered.
`context` is context of which should be used when the `callback` function fires. And `options` is an Object containing additional options available via the [EventTarget.removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.removeEventListener) interface.

```javascript
var el = document.getElementByTagName('div')[0],
    obj = {},
    callback = function (){
         // click event was fired!
    };
el.kit.removeEventListener('click', callback, obj, {useCapture: true});
```

## Element.kit.classList

The classList property in Element Kit has the same API as the [Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element.classList).

### Element.kit.classList.add

`Element.kit.classList.add(className)`

The `className` is the new css class string that will be added.

```javascript
var el = document.getElementByTagName('div')[0];
el.kit.classList.add('my-class'); // adds a new "my-class" css class to the element
```

### Element.kit.classList.remove

Removes a css class from the element.

`Element.kit.classList.remove(className)`

The `className` is the css class string that will be removed.

```javascript
var el = document.getElementByTagName('div')[0];
el.kit.classList.remove('my-class');
```

### Element.kit.classList.contains

Returns a boolean-like value that is `true` if the element contains css class. Falsy if not.

`Element.kit.classList.contains(className)`

The `className` is the css class string that should be checked.

```javascript
var el = document.getElementByTagName('div')[0];
el.kit.classList.contains('my-class');
```

### Element.kit.classList.toggle

Adds a css class to the element if it doesnt exist. If it does exist, it removes the class.

`Element.kit.classList.toggle(className)`

The `className` is the css class string that should be added/removed.

```javascript
var el = document.getElementByTagName('div')[0];
el.kit.classList.toggle('mytoggle');
el.kit.classList.contains('mytoggle'); // true
el.kit.classList.toggle('mytoggle');
el.kit.classList.contains('mytoggle'); // false
```

### Element.kit.dataset

Element Kit provides you with the [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.dataset) API interface which can be used similar to the following.

```javascript
var el = document.getElementById('person');
el.kit.dataset.id = 2038;
el.kit.dataset.name = 'johndoe';
el.kit.dataset.dob = '1960-10-03';

console.log('name' in el.kit.dataset); // true!
console.log('location' in el.kit.dataset); // false!
```