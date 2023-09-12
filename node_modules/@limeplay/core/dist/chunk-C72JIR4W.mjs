import {
  __commonJS,
  __toESM
} from "./chunk-XALKSG2U.mjs";

// ../../node_modules/.pnpm/o9n@2.1.1/node_modules/o9n/index.js
var require_o9n = __commonJS({
  "../../node_modules/.pnpm/o9n@2.1.1/node_modules/o9n/index.js"(exports, module) {
    "use strict";
    function getOrientation() {
      if (typeof window === "undefined")
        return void 0;
      var screen2 = window.screen;
      var orientation2;
      if (typeof window.ScreenOrientation === "function" && screen2.orientation instanceof ScreenOrientation && typeof screen2.orientation.addEventListener == "function" && screen2.orientation.onchange === null && typeof screen2.orientation.type === "string") {
        orientation2 = screen2.orientation;
      } else {
        orientation2 = createOrientation();
      }
      return orientation2;
    }
    module.exports = {
      orientation: getOrientation(),
      getOrientation,
      install: function install() {
        var screen2 = window.screen;
        if (typeof window.ScreenOrientation === "function" && screen2.orientation instanceof ScreenOrientation) {
          return screen2.orientation;
        }
        window.screen.orientation = orientation;
        return orientation;
      }
    };
    function createOrientation() {
      var orientationMap = {
        "90": "landscape-primary",
        "-90": "landscape-secondary",
        "0": "portrait-primary",
        "180": "portrait-secondary"
      };
      function ScreenOrientation2() {
      }
      var or = new ScreenOrientation2();
      var found = findDelegate(or);
      ScreenOrientation2.prototype.addEventListener = delegate(
        "addEventListener",
        found.delegate,
        found.event
      );
      ScreenOrientation2.prototype.dispatchEvent = delegate(
        "dispatchEvent",
        found.delegate,
        found.event
      );
      ScreenOrientation2.prototype.removeEventListener = delegate(
        "removeEventListener",
        found.delegate,
        found.event
      );
      ScreenOrientation2.prototype.lock = getLock();
      ScreenOrientation2.prototype.unlock = getUnlock();
      Object.defineProperties(or, {
        onchange: {
          get: function() {
            return found.delegate["on" + found.event] || null;
          },
          set: function(cb) {
            found.delegate["on" + found.event] = wrapCallback(cb, or);
          }
        },
        type: {
          get: function() {
            var screen2 = window.screen;
            return screen2.msOrientation || screen2.mozOrientation || orientationMap[window.orientation + ""] || (getMql().matches ? "landscape-primary" : "portrait-primary");
          }
        },
        angle: {
          value: 0
        }
      });
      return or;
    }
    function delegate(fnName, delegateContext, eventName) {
      var that = this;
      return function delegated() {
        var args = Array.prototype.slice.call(arguments);
        var actualEvent = args[0].type ? args[0].type : args[0];
        if (actualEvent !== "change") {
          return;
        }
        if (args[0].type) {
          args[0] = getOrientationChangeEvent(eventName, args[0]);
        } else {
          args[0] = eventName;
        }
        var wrapped = wrapCallback(args[1], that);
        if (fnName === "addEventListener") {
          addTrackedListener(args[1], wrapped);
        }
        if (fnName === "removeEventListener") {
          removeTrackedListener(args[1]);
        }
        args[1] = wrapped;
        return delegateContext[fnName].apply(delegateContext, args);
      };
    }
    var trackedListeners = [];
    var originalListeners = [];
    function addTrackedListener(original, wrapped) {
      var idx = originalListeners.indexOf(original);
      if (idx > -1) {
        trackedListeners[idx] = wrapped;
      } else {
        originalListeners.push(original);
        trackedListeners.push(wrapped);
      }
    }
    function removeTrackedListener(original) {
      var idx = originalListeners.indexOf(original);
      if (idx > -1) {
        originalListeners.splice(idx, 1);
        trackedListeners.splice(idx, 1);
      }
    }
    function wrapCallback(cb, orientation2) {
      var idx = originalListeners.indexOf(cb);
      if (idx > -1) {
        return trackedListeners[idx];
      }
      return function wrapped(evt) {
        if (evt.target !== orientation2) {
          defineValue(evt, "target", orientation2);
        }
        if (evt.currentTarget !== orientation2) {
          defineValue(evt, "currentTarget", orientation2);
        }
        if (evt.type !== "change") {
          defineValue(evt, "type", "change");
        }
        cb(evt);
      };
    }
    function getLock() {
      var err = "lockOrientation() is not available on this device.";
      var delegateFn;
      var screen2 = window.screen;
      if (typeof screen2.msLockOrientation == "function") {
        delegateFn = screen2.msLockOrientation.bind(screen2);
      } else if (typeof screen2.mozLockOrientation == "function") {
        delegateFn = screen2.mozLockOrientation.bind(screen2);
      } else {
        delegateFn = function() {
          return false;
        };
      }
      return function lock(lockType) {
        var Promise2 = window.Promise;
        if (delegateFn(lockType)) {
          return Promise2.resolve(lockType);
        } else {
          return Promise2.reject(new Error(err));
        }
      };
    }
    function getUnlock() {
      var screen2 = window.screen;
      return screen2.orientation && screen2.orientation.unlock.bind(screen2.orientation) || screen2.msUnlockOrientation && screen2.msUnlockOrientation.bind(screen2) || screen2.mozUnlockOrientation && screen2.mozUnlockOrientation.bind(screen2) || function unlock() {
        return;
      };
    }
    function findDelegate(orientation2) {
      var events = [
        "orientationchange",
        "mozorientationchange",
        "msorientationchange"
      ];
      for (var i = 0; i < events.length; i++) {
        if (screen["on" + events[i]] === null) {
          return {
            delegate: screen,
            event: events[i]
          };
        }
      }
      if (typeof window.onorientationchange != "undefined") {
        return {
          delegate: window,
          event: "orientationchange"
        };
      }
      return {
        delegate: createOwnDelegate(orientation2),
        event: "change"
      };
    }
    function getOrientationChangeEvent(name, props) {
      var orientationChangeEvt;
      try {
        orientationChangeEvt = new Event(name, props);
      } catch (e) {
        orientationChangeEvt = { type: "change" };
      }
      return orientationChangeEvt;
    }
    function createOwnDelegate(orientation2) {
      var ownDelegate = /* @__PURE__ */ Object.create({
        addEventListener: function addEventListener(evt, cb) {
          if (!this.listeners[evt]) {
            this.listeners[evt] = [];
          }
          if (this.listeners[evt].indexOf(cb) === -1) {
            this.listeners[evt].push(cb);
          }
        },
        dispatchEvent: function dispatchEvent(evt) {
          if (!this.listeners[evt.type]) {
            return;
          }
          this.listeners[evt.type].forEach(function(fn) {
            fn(evt);
          });
          if (typeof orientation2.onchange == "function") {
            orientation2.onchange(evt);
          }
        },
        removeEventListener: function removeEventListener(evt, cb) {
          if (!this.listeners[evt]) {
            return;
          }
          var idx = this.listeners[evt].indexOf(cb);
          if (idx > -1) {
            this.listeners[evt].splice(idx, 1);
          }
        }
      });
      ownDelegate.listeners = {};
      var mql = getMql();
      if (mql && typeof mql.matches === "boolean") {
        mql.addListener(function() {
          ownDelegate.dispatchEvent(getOrientationChangeEvent("change"));
        });
      }
      return ownDelegate;
    }
    function getMql() {
      if (typeof window.matchMedia != "function") {
        return {};
      }
      return window.matchMedia("(orientation: landscape)");
    }
    function defineValue(obj, key, val) {
      Object.defineProperty(obj, key, {
        value: val
      });
    }
  }
});

// src/hooks/useOrientation.ts
var import_o9n = __toESM(require_o9n());
import { useEffect, useState } from "react";
function useOrientation({
  onError,
  onLock,
  onUnlock,
  onChange
} = {}) {
  const [orientation2, setOrientation] = useState(
    import_o9n.default.orientation
  );
  const orientationError = (error) => {
    if (onError && typeof onError === "function") {
      onError(error);
    }
  };
  const lockOrientation = (type) => {
    import_o9n.default.orientation.lock(type).then(() => {
      if (onLock && typeof onLock === "function") {
        onLock();
      }
    }).catch(orientationError);
  };
  const unlockOrientation = () => {
    import_o9n.default.orientation.unlock();
    if (onUnlock && typeof onUnlock === "function") {
      onUnlock();
    }
  };
  const toggleOrientation = () => {
    if (import_o9n.default.orientation.angle === 0 || import_o9n.default.orientation.angle === 180) {
      lockOrientation("landscape");
    } else {
      lockOrientation("portrait");
    }
  };
  useEffect(() => {
    const orientationEventHandler = (_event) => {
      setOrientation(import_o9n.default.orientation);
      if (onChange && typeof onChange === "function") {
        onChange(_event);
      }
    };
    import_o9n.default.orientation.addEventListener("change", orientationEventHandler);
    return () => {
      import_o9n.default.orientation.removeEventListener(
        "change",
        orientationEventHandler
      );
    };
  }, [onChange]);
  return {
    orientation: orientation2,
    lockOrientation,
    unlockOrientation,
    toggleOrientation,
    api: import_o9n.default.orientation
  };
}

export {
  useOrientation
};
