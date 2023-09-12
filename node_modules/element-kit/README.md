# Element Kit

A lightweight library that allows you to use [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) and
[HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) methods in browsers that don't natively support them (like IE8 and IE9).

The library also adds some other helpful goodies (methods) to your elements that we think are missing in the Element API. Read more below.

## API Documentation

See the full [API Documentation](https://github.com/mkay581/element-kit/blob/master/docs/element.md).


## Usage

### Binding a new 'this' reference to event listeners


[addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener) and
[removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.removeEventListener) methods are
available in modern browsers (even IE9!). But they do not allow you to bind a different `this` when your callback listener is invoked.

Additionally, using [Function.prototype.bind(this)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
doesn't work because binding a new `this` to the listener function makes it an entirely new function, making the listener impossible to remove from the event.

Element Kit, however, does give you this missing functionality.


```javascript
var element = document.getElementByTagName('div')[0];

var fooClass = {
    bar: function () {
        // the 'this' reference here is the class! (not the 'window' or anything else)
    }
};
// add a click event that uses the fooClass as the 'this' reference
element.kit.addEventListener('click', 'bar', fooClass);

// remove event listener
element.kit.removeEventListener('click', 'bar', fooClass);
```

### Adding and removing css classes

Adding and removing classes in a cross-browser way can be difficult, especially since
[Element.classList.remove()](https://developer.mozilla.org/en-US/docs/Web/API/Element.classList) and
[Element.classList.add()](https://developer.mozilla.org/en-US/docs/Web/API/Element.classList) are not available on older browsers like IE9.

Element Kit exposes this SAME API to work in older browsers like IE9.


```javascript
var element = document.getElementByTagName('div')[0];
element.kit.classList.add('new-class');  // add a new class
element.kit.classList.remove('new-class'); // remove the class
```

### Wait for CSS Transitions

Let's say you have the problem (that many of us have) where you need
to detect the completion of an element's [CSS transition](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions)
in javascript before your code can continue. Given the following CSS...


```css
.animate {
    transition-property: background-color;
    transition-duration: 100ms;
    transition-timing-function: ease-out;
}
```

You could use element kit to wait until the element finishes its transition before doing other things in your javascript code. Like so:

```javascript
var element = document.getElementByTagName('div')[0];
element.kit.classList.add('animate'); // transition element's background color
element.kit.waitForTransition(element, function () {
    // 100 milliseconds later...
    console.log('transition complete!');
});
```

More methods and usage can be found on the [docs](https://github.com/mkay581/element-kit/blob/master/docs) page.

## Release History

 * 2015-01-24   v0.2.0   New Lazy-loading for HTMLImageElements.
 * 2014-12-08   v0.1.0   Official release.
