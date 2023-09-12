var QUnit = require('qunit');
var TestUtils = require('test-utils');
var ElementKit = require('../src/element-kit');

module.exports = (function () {
    "use strict";

    QUnit.module('Kit Tests');

    QUnit.test('initialization', function() {
        QUnit.expect(1);
        var firstEl = document.createElement('div');
        var secondEl = document.createElement('div');
        QUnit.notDeepEqual(firstEl.kit, secondEl.kit, 'after kits initialized, each kit has a different instance');
    });

    QUnit.test('ensuring the same instance is used', function() {
        QUnit.expect(3);
        var firstEl = document.createElement('div');
        QUnit.deepEqual(firstEl, firstEl.kit.el, 'after initializing first el, its kit instance references the first el also');
        var secondEl = document.createElement('div');
        QUnit.deepEqual(secondEl, secondEl.kit.el, 'after initialize second el, its kit instance references the second el same el');
        QUnit.deepEqual(firstEl, firstEl.kit.el, 'first kit\'s el still references the first el');
    });

})();