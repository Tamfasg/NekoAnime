/** 
* element-kit - v0.5.0.
* https://github.com/mkay581/element-kit.git
* Copyright 2015 Mark Kennedy. Licensed MIT.
*/
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ElementKit = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Element = require('./element');
var ImageElement = require('./image-element');

var elementCount = 0, cache = {}, loaded;

module.exports = (function () {

    var ElementKit = function (options) {
        this.initialize(options);
    };
    ElementKit.prototype = {
        /**
         * Does a little setup for element kit.
         */
        initialize: function () {

            var self = this;
            // can only define the element property once or an exception will be thrown
            // must also check if element kit was loaded by some other module dependency
            if (!loaded && !document.body.kit) {
                // make element kit available on ALL DOM Elements when they are created
                loaded = Object.defineProperty(window.Element.prototype, 'kit', {
                    get: function () {
                        return self.setup(this);
                    }
                });
            }
        },

        /**
         * Sets up the kit on an element.
         * @param {HTMLElement} el - The element in which to load the kit onto
         * @returns {Element|ImageElement} Returns the element instance
         */
        setup: function (el) {
            var ElementClass;
            // only add a new instance of the class if it hasnt already been added
            if (!cache[el._kitId]) {
                ElementClass = el instanceof window.HTMLImageElement ? ImageElement : Element;
                elementCount++;
                el._kitId = elementCount;
                cache[el._kitId] = new ElementClass(el);
            }
            return cache[el._kitId];
        },
        /**
         * Destroys element kit.
         */
        destroy: function () {}

    };

    return new ElementKit();

})();
},{"./element":2,"./image-element":3}],2:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var ElementKit = require('./element-kit');

var Element = function (el) {
    this.initialize(el);
};

/**
 * A class from which all Elements are based.
 * @description Bootstraps an element to allow for native JS methods (see https://developer.mozilla.org/en-US/docs/Web/API/Element)
 * @class Element
 * @param {Element} el - The element
 */
Element.prototype = /** @lends Element */{

    initialize: function (el) {
        this.el = el;
        this.classList = this._getClassList();
        this._eventListenerMap = this._eventListenerMap || [];

        Object.defineProperty(this, 'dataset', {
            get: function () {
                return this.getData();
            }.bind(this)
        });
    },

    /**
     * Bubbles up each parent node of the element, triggering the callback on each element until traversal
     * either runs out of parent nodes, reaches the document element, or if callback returns a falsy value
     * @param {Function} callback - A callback that fires which gets passed the current element
     * @param {HTMLElement} [startEl] - The element where traversal will begin (including the passed element), defaults to current el
     * @private
     */
    _traverseEachParent: function (callback, startEl) {
        var parentNode = startEl || this.el,
            predicate;
        // check if the node has classname property, if not, we know we're at the #document element
        while (parentNode && typeof parentNode.className === 'string') {
            predicate = callback(parentNode);
            if (predicate !== undefined && !predicate) {
                break;
            }
            parentNode = parentNode.parentNode;
        }
    },

    /**
     * Wrap a parent container element around the element.
     * @param {string} html - The wrapper html
     */
    appendOuterHtml: function (html) {
        var parent = this.el.parentNode,
            container = utils.createHtmlElement(html);
        if (parent) {
            parent.replaceChild(container, this.el);
        } else {
            parent = document.createDocumentFragment();
            parent.appendChild(container);
        }
        container.appendChild(this.el);
        return container;
    },

    /**
     * Retrieves the unique identifier of the element.
     * @private
     */
    getUniqueId: function () {
        return this.el._kitId;
    },

    /**
     * Gets the closest ancestor element that has a css class.
     * @param {string} className - The class name that the ancestor must have to match
     */
    getClosestAncestorElementByClassName: function (className) {
        var result;
        this._traverseEachParent(function (parent) {
            if (parent.kit._hasClass(className)) {
                result = parent;
                return false;
            }
        }, this.el.parentNode);
        return result;
    },

    /**
     * Adds an event listener to the element.
     * @param {string} event - The event to listen to
     * @param {string|Function} listener - The name of the function (or the function itself) that should fire when the event happens
     * @param {Object} [context] - The context in which the function should be called
     * @param {Object} [options] - Object containing additional options
     * @param {Object} [options.useCapture] - Whether to use capture (see Web.API.EventTarget.addEventListener)
     */
    addEventListener: function (event, listener, context, options) {
        var _listener = listener;
        options = options || {};

        if (typeof _listener !== 'function') {
            _listener = this._createEventListener(context[listener], context);
        }

        this.el.addEventListener(event, _listener, options.useCapture);

        this._eventListenerMap.push({
            event: event,
            listener: _listener,
            listenerId: listener,
            context: context
        });
    },

    /**
     * Creates an event listener bounded to a context (useful for adding and removing events).
     * @param {Function} listener - The listener function
     * @param {Object} context - The context that should be used when the function is called
     * @returns {Function} Returns an event listener function bounded to the context
     * @private
     */
    _createEventListener: function (listener, context) {
        return function (e) {
            context = context || this;
            listener.apply(context, arguments);
        }
    },

    /**
     * Removes an event listener from the element.
     * @param {string} event - The event to remove
     * @param {string|Function} listener - The event listener function or (name of it) to be removed
     * @param {Object} [context] - The context of the listener that is being removed
     */
    removeEventListener: function (event, listener, context) {
        var map = this._eventListenerMap || [],
            i,
            obj;

        if (map.length) {
            for (i = 0; i < map.length; i++) {
                obj = map[i];
                if (obj && obj.event === event && obj.listenerId === listener && obj.context === context) {
                    this.el.removeEventListener(event, obj.listener);
                    this._eventListenerMap[i] = null;
                    break;
                }
            }
        }
    },

    /**
     * Builds a transition promise that waits to resolve until the el's CSS transition is completed.
     * @param {Function} callback - The callback that is fired when the transition time is complete
     * @returns {HTMLElement} Returns the html element
     */
    waitForTransition: function (callback) {
        var duration = this.getTransitionDuration();
        if (callback) {
            if (duration > 0) {
                setTimeout(callback.bind(this, this.el), duration);
            } else {
                callback(this.el);
            }
        }
    },

    /**
     * Gets the time is takes for the element to transition to its show state.
     * @returns {Number} Returns the total CSS transition time in milliseconds
     */
    getTransitionDuration: function () {
        var delayProp = this.getCssComputedProperty('transition-delay') || '0ms',
            durationProp = this.getCssComputedProperty('transition-duration') || '0ms',
            times = Array.isArray(durationProp) ? durationProp : [durationProp],
            delay = Array.isArray(delayProp) ? delayProp : [delayProp],
            highest = 0,
            map;

        times.push.apply(times, delay); // account for delay

        // calculate highest number of time
        times.forEach(function (value) {
            value.split(',').forEach(function (v) {
                v = this._convertCssTimeValueToMilliseconds(v);
                map = this._getCssPropUnitMap(v);
                if (map.num > highest) {
                    highest = map.num;
                }
            }.bind(this));
        }.bind(this));

        return highest;
    },

    /**
     * Gets the computed property of the element.
     * @param {string} prop - The name of the property to get
     * @returns {string} Returns the value of the property
     */
    getCssComputedProperty: function (prop) {
        var style = window.getComputedStyle(this.el);
        return style.getPropertyValue(prop) || this.el.style[this._getJsPropName(prop)];
    },

    /**
     * Takes a value and separates the number and unit into a key/value map.
     * @param v - The value
     * @returns {{num: Number, unit: string}} Returns the map
     * @private
     */
    _getCssPropUnitMap: function (v) {
        v.trim();
        var num = v.match('[0-9\.]+'),
            unit = 'ms';

        num = num ? num[0] : '';
        if (num) {
            unit = v.split(num)[1];
            num = Number(num);
        }
        return {
            num: num,
            unit: unit
        };
    },

    /**
     * Converts a css timing unit value into milliseconds.
     * @param {string} val - The value string
     * @returns {string} Returns the timing unit value in milliseconds
     * @private
     */
    _convertCssTimeValueToMilliseconds: function (val) {
        var number = this._getCssPropUnitMap(val).num,
            unit = val.replace(number, '');
        if (unit === 's') {
            val = number * 1000;
        } else {
            val = number;
        }
        return val + 'ms';
    },

    /**
     * Gets the class list of an element.
     * @returns {Array} Returns an array of class names.
     * @private
     */
    _getClassList: function () {
        return {
            add: this._addClass.bind(this),
            remove: this._removeClass.bind(this),
            contains: this._hasClass.bind(this),
            toggle: this._toggleClass.bind(this)
        };
    },

    /**
     * Gets the class list of an element.
     * @returns {Array} Returns an array of class names.
     * @private
     */
    _getCssClasses: function () {
        return this.el.className.split(' ');
    },

    /**
     * Toggles (adds/removes) a css class on the element.
     * @param {string} className - The css class value to add/remove
     * @private
     */
    _toggleClass: function (className) {
        if (!this._hasClass(className)) {
            this._addClass(className);
        } else {
            this._removeClass(className);
        }
    },

    /**
     * Adds a CSS class to the element.
     * @param {...string} arguments - The arguments containing css classes to add
     * @private
     */
    _addClass: function  () {
        if (('classList' in document.createElement('_'))) {
            // browser supports classList!
            this._each(arguments, function (className) {
                this.el.classList.add(className);
            }.bind(this));
        } else {
            this._each(arguments, function (className) {
                if (!this._hasClass(className)) {
                    this.el.className = this.el.className ? this.el.className + ' ' + className : className;
                }
            }.bind(this));
        }
    },

    /**
     * Triggers a callback function for a set of items.
     * @param {Array} items - An array of items
     * @param {Function} method - The function to execute for each item
     * @private
     */
    _each: function (items, method) {
        var count = items.length,
            i;
        for (i = 0; i < count; i++) {
            method(items[i]);
        }
    },

    /**
     * Removes a CSS class from the element.
     * @param {...string} arguments - The arguments containing css classes to remove
     * @private
     */
    _removeClass: function () {
        var re;
        if ('classList' in document.createElement('_')) {
            this._each(arguments, function (className) {
                this.el.classList.remove(className);
            }.bind(this));
        } else {
            this._each(arguments, function (className) {
                if (this.el.className === className) {
                    // if the only class that exists,  remove it and make empty string
                    this.el.className = '';
                } else {
                    re = '[\\s]*' + className;
                    re = new RegExp(re, 'i');
                    this.el.className = this.el.className.replace(re, '');
                }
            }.bind(this));
        }
    },

    /**
     * Checks if the element has a class.
     * @param {string} className - The css class value to check
     * @private
     */
    _hasClass: function (className) {
        var classes = this._getCssClasses();
        return classes.indexOf(className) !== -1;
    },

    /**
     * Takes a css property name and returns the javascript version of it.
     * @param {string} cssProp - The css property
     * @returns {string} Returns the javascript version
     * @private
     */
    _getJsPropName: function (cssProp) {
        // convert to camelCase
        cssProp = cssProp.replace(/-([a-z])/g, function (letter) {
            return letter[1].toUpperCase();
        });
        return cssProp;
    },

    /**
     * Gets a simplified mapping of all attributes of an element.
     * @returns {object} - Returns an object containing all attribute mappings
     */
    getAttributes: function () {
        var attrs = this.el.attributes,
            map = {};
        if (attrs.length) {
            for (var i = 0; i < attrs.length; i++) {
                map[attrs[i].name] = attrs[i].value;
            }
        }
        return map;
    },

    /**
     * Gets the elements current data attributes that have been assigned in the DOM.
     * @returns {{}}
     * @private
     */
    _getDomData: function () {
        var attrs = this.getAttributes(), data = {}, key, value;
        for (key in attrs) {
            if (attrs.hasOwnProperty(key)) {
                value = attrs[key];
                if (key.indexOf('data-') === 0) {
                    // data attribute found!
                    key = key.substr(5);
                    data[key] = value;
                }
            }
        }
        return data;
    },

    /**
     * Returns an object of the element's current data attributes.
     * @returns {*|{}}
     */
    getData: function () {
        var key;

        this._data = utils.extend({}, this._data, this._getDomData());

        // convert all current data properties to be "watchable".
        for (key in this._data) {
            if (this._data.hasOwnProperty(key)) {
                var value = this._data[key];
                // TODO: we should only convert it if it isnt already a "watchable" obj
                Object.defineProperty(this._data, key, {
                    writeable: true,
                    get: function () {
                        return value;
                    }.bind(this),
                    set: function (value) {
                        this.setData.bind(this, key, value)
                    }.bind(this)
                });
            }
        }
        return this._data;

    },

    /**
     * When data is being set.
     * @param {string} key - The key of which to be set
     * @param {*} value - The value
     */
    setData: function (key, value) {
        this.el.setAttribute('data-' + key, value);
        this._data[key] = value;

    },

    /**
     * Destroys the kit on the element.
     */
    destroy: function () {}
};

module.exports = Element;
},{"./element-kit":1,"./utils":4}],3:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var Element = require('./element');

/**
 * A class from which all image elements are based.
 * @class ImageElement
 * @param {Element} el - The element
 * @todo: find a more simple way to extend Element class along with its prototypes
 */
var ImageElement = function (el) {
    Element.prototype.initialize.call(this, el);
};
ImageElement.prototype = utils.extend({}, Element.prototype, {
    /**
     * Loads the image asset from a provided source url.
     * @param {string} srcAttr - The attribute on the element which has the image source url or any url
     * @param {Function} [callback] - The callback fired when the image has loaded
     */
    load: function (srcAttr, callback) {
        var el = this.el,
            src = el.getAttribute(srcAttr) || srcAttr;

        if (!src) {
            console.warn('ElementKit error: ImageElement has no "' + srcAttr + '" attribute to load');
        }

        if (src.indexOf(',') !== -1) {
            // image is a srcset!
            src = this._getImageSourceSetPath(src);
        }
        this._loadImage(src, callback);
        return this;
    },

    /**
     * Loads an image in a virtual DOM which will be cached in the browser and shown.
     * @param {string} src - The image source url
     * @param {Function} callback - Function that is called when image has loaded
     * @private
     */
    _loadImage: function (src, callback) {
        var img = this.el;
        img.onload = function () {
            callback ? callback(img) : null;
        };
        img.src = src;
    },

    /**
     * Sniffs srcset attribute and detects the images viewport size to return the correct source image to display
     * FYI: browsers do have this functionality natively but some of them have it turned by default (Firefox, IE, etc)
     * @param {string} srcSet - The source set attribute
     * @returns {string} Returns the source image path
     * @private
     */
    _getImageSourceSetPath: function (srcSet) {
        var viewportWidth = window.innerWidth,
            viewportHeight = window.innerHeight,
            src,
            widthHeightMap,
            width,
            height,
            found;
        srcSet.split(',').forEach(function (str) {
            widthHeightMap = this._buildSourceMapWidthHeight(str);
            width = widthHeightMap.width || 0;
            height = widthHeightMap.height || 0;
            if (!found && viewportWidth >= width && viewportHeight >= height) {
                src = str.split(' ')[0];
                found = true;
            }
        }.bind(this));
        return src;
    },

    /**
     * Builds a mapping of width and height within a srcset attribute.
     * @param {String} str - The srcset attribute string
     * @param {Object} [map] - The object that width and height keys will be attached to
     * @returns {*|{}}
     * @private
     */
    _buildSourceMapWidthHeight: function (str, map) {
        var frags = str.split(' '),
            attrId,
            getNumber = function (frag) {
                return Number(frag.substr(0, frag.length - 1))
            };

        map = map || {};

        frags.shift(); // remove first item since we know it is the filename

        frags.forEach(function (frag) {
            attrId = frag.charAt(frag.length - 1);
            if (attrId === 'w') {
                map.width = getNumber(frag);
            } else if (attrId === 'h') {
                map.height = getNumber(frag);
            }
        });
        return map;
    }

});

module.exports = ImageElement;
},{"./element":2,"./utils":4}],4:[function(require,module,exports){
module.exports = {
    /**
     * Creates an HTML Element from an html string.
     * @param {string} html - String of html
     * @returns {HTMLElement} - Returns and html element node
     */
    createHtmlElement: function (html) {
        var tempParentEl,
            el;
        if (html) {
            html = html.trim(html);
            tempParentEl = document.createElement('div');
            tempParentEl.innerHTML = html;
            el = tempParentEl.childNodes[0];
            return tempParentEl.removeChild(el);
        }
    },

    /**
     * Merges the contents of two or more objects.
     * @param {object} obj - The target object
     * @param {...object} - Additional objects who's properties will be merged in
     */
    extend: function (target) {
        var merged = target,
            source, i;
        for (i = 1; i < arguments.length; i++) {
            source = arguments[i];
            for (var prop in source) {
                if (source.hasOwnProperty(prop)) {
                    merged[prop] = source[prop];
                }
            }
        }
        return merged;
    }
};
},{}]},{},[1,2,3,4])(4)
});