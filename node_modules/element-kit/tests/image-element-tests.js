var Sinon = require('sinon');
var QUnit = require('qunit');
var TestUtils = require('test-utils');
var ElementKit = require('../src/element-kit');

module.exports = (function () {
    "use strict";

    QUnit.module('Image Element Tests');

    QUnit.test('lazy loading an image in a custom attribute', function() {
        QUnit.expect(3);
        var imageEl = document.createElement('img');
        imageEl.setAttribute('src', ''); //src should be empty initially
        var testImagePath = 'path/to/my/lazy/load/image.jpg';
        var callbackSpy = Sinon.spy();
        imageEl.setAttribute('lazy-src', testImagePath);
        imageEl.kit.load('lazy-src', callbackSpy);
        QUnit.equal(imageEl.getAttribute('src'), testImagePath, 'after calling load(), DOM image src attribute has been updated to new path');
        QUnit.equal(callbackSpy.callCount, 0, 'load callback has not yet been fired because image hasnt loaded yet');
        imageEl.onload(); // trigger image load
        QUnit.equal(callbackSpy.callCount, 1, 'once image is loaded, callback is fired');
    });

    QUnit.test('srcset lazy loading', function() {
        QUnit.expect(4);
        var imageEl = document.createElement('img');
        var callbackSpy = Sinon.spy();
        var testSrcSetPaths = 'medium.jpg 1000w, large.jpg 2000w';
        var origWindowWidth = window.innerWidth;
        window.innerWidth = 1200;
        imageEl.setAttribute('src', ''); //src should be empty initially
        imageEl.setAttribute('my-srcset', testSrcSetPaths);
        QUnit.equal(imageEl.getAttribute('src'), '', 'image src attribute is still empty because load() has not been called');
        // test load
        imageEl.kit.load('my-srcset', callbackSpy);
        QUnit.equal(imageEl.getAttribute('src'), 'medium.jpg', 'after calling load(), image src attribute was set to medium image because window width fits its requirements');
        QUnit.equal(callbackSpy.callCount, 0, 'load callback has not yet been fired because image hasnt loaded yet');
        imageEl.onload(); // trigger image load
        QUnit.equal(callbackSpy.callCount, 1, 'once image is loaded, callback is fired');
        window.innerWidth = origWindowWidth;
    });

    QUnit.test('load() call should fire a callback with the image element as first argument', function() {
        QUnit.expect(1);
        var imageEl = document.createElement('img');
        var callbackSpy = Sinon.spy();
        var srcAttribute = 'medium.jpg';
        imageEl.setAttribute('src', ''); //src should be empty initially
        imageEl.setAttribute('my-srcset', srcAttribute);
        // test load
        imageEl.kit.load('my-srcset', callbackSpy);
        imageEl.onload(); // trigger image load
        QUnit.deepEqual(callbackSpy.args[0][0], imageEl, 'once image is loaded, callback is fired with image elemnt as first argument');
    });

    QUnit.test('load() should accept any url as first parameter and load it', function() {
        QUnit.expect(1);
        var imageEl = document.createElement('img');
        var testImageUrl = 'my/faux/image.jpg';
        imageEl.setAttribute('src', ''); //src should be empty initially
        imageEl.setAttribute('data-image', testImageUrl);
        // test load
        imageEl.kit.load('data-image');
        imageEl.onload(); // trigger image load
        QUnit.deepEqual(imageEl.getAttribute('src'), testImageUrl, 'url passed was loaded');
    });

})();