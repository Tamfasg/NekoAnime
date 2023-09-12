# ImageElement.kit

The following methods will be available to you under the "kit" property of all of your HTMLImageElements (your `<img>` tags).


### ImageElement.kit.load

`ImageElement.kit.load(attr, callback)`

This method is excellent for lazy-loading or loading images based on conditions (i.e loading low-quality images on lower bandwidths for mobile, for instance).
It loads and shows an image using the url path specified in the custom attribute `attr` that you pass it. `attr` is a string denoting
the custom attribute (on the element) that will contain the path of the image to be loaded. The second argument `callback`
 should be a function that you want fired when the image is successfully fetched from the server, loaded and shown to the user.

```javascript
var imageEl = document.getElementByClassName('img')[0];

imageEl.setAttribute('data-lazy-src', 'http://path/to/my/image'); // set url on custom attribute

imageEl.load('data-lazy-src', function () {
    // image done loading!
});

```