var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/hooks/useFullScreen.ts
var useFullScreen_exports = {};
__export(useFullScreen_exports, {
  useFullScreen: () => useFullScreen
});
module.exports = __toCommonJS(useFullScreen_exports);
var import_react3 = require("react");

// ../../node_modules/.pnpm/screenfull@6.0.2/node_modules/screenfull/index.js
var methodMap = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  // New WebKit
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  // Old WebKit
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
];
var nativeAPI = (() => {
  if (typeof document === "undefined") {
    return false;
  }
  const unprefixedMethods = methodMap[0];
  const returnValue = {};
  for (const methodList of methodMap) {
    const exitFullscreenMethod = methodList == null ? void 0 : methodList[1];
    if (exitFullscreenMethod in document) {
      for (const [index, method] of methodList.entries()) {
        returnValue[unprefixedMethods[index]] = method;
      }
      return returnValue;
    }
  }
  return false;
})();
var eventNameMap = {
  change: nativeAPI.fullscreenchange,
  error: nativeAPI.fullscreenerror
};
var screenfull = {
  // eslint-disable-next-line default-param-last
  request(element = document.documentElement, options) {
    return new Promise((resolve, reject) => {
      const onFullScreenEntered = () => {
        screenfull.off("change", onFullScreenEntered);
        resolve();
      };
      screenfull.on("change", onFullScreenEntered);
      const returnPromise = element[nativeAPI.requestFullscreen](options);
      if (returnPromise instanceof Promise) {
        returnPromise.then(onFullScreenEntered).catch(reject);
      }
    });
  },
  exit() {
    return new Promise((resolve, reject) => {
      if (!screenfull.isFullscreen) {
        resolve();
        return;
      }
      const onFullScreenExit = () => {
        screenfull.off("change", onFullScreenExit);
        resolve();
      };
      screenfull.on("change", onFullScreenExit);
      const returnPromise = document[nativeAPI.exitFullscreen]();
      if (returnPromise instanceof Promise) {
        returnPromise.then(onFullScreenExit).catch(reject);
      }
    });
  },
  toggle(element, options) {
    return screenfull.isFullscreen ? screenfull.exit() : screenfull.request(element, options);
  },
  onchange(callback) {
    screenfull.on("change", callback);
  },
  onerror(callback) {
    screenfull.on("error", callback);
  },
  on(event, callback) {
    const eventName = eventNameMap[event];
    if (eventName) {
      document.addEventListener(eventName, callback, false);
    }
  },
  off(event, callback) {
    const eventName = eventNameMap[event];
    if (eventName) {
      document.removeEventListener(eventName, callback, false);
    }
  },
  raw: nativeAPI
};
Object.defineProperties(screenfull, {
  isFullscreen: {
    get: () => Boolean(document[nativeAPI.fullscreenElement])
  },
  element: {
    enumerable: true,
    get: () => {
      var _a;
      return (_a = document[nativeAPI.fullscreenElement]) != null ? _a : void 0;
    }
  },
  isEnabled: {
    enumerable: true,
    // Coerce to boolean in case of old WebKit.
    get: () => Boolean(document[nativeAPI.fullscreenEnabled])
  }
});
if (!nativeAPI) {
  screenfull = { isEnabled: false };
}
var screenfull_default = screenfull;

// src/utils/use-state-ref.ts
var import_react = require("react");
var isFunction = (setStateAction) => typeof setStateAction === "function";
var useStateRef = (initialState) => {
  const [state, setState] = (0, import_react.useState)(initialState);
  const ref = (0, import_react.useRef)(state);
  const dispatch = (0, import_react.useCallback)(
    (setStateAction) => {
      ref.current = isFunction(setStateAction) ? setStateAction(ref.current) : setStateAction;
      setState(ref.current);
    },
    []
  );
  return [state, dispatch, ref];
};
var use_state_ref_default = useStateRef;

// src/components/LimeplayProvider.tsx
var import_react2 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var LimeplayProviderContext = (0, import_react2.createContext)(null);
function useLimeplay() {
  const context = (0, import_react2.useContext)(LimeplayProviderContext);
  if (!context) {
    throw new Error(
      `useLimeplay hook must be used within a LimeplayProvider`
    );
  }
  return context;
}

// src/hooks/useFullScreen.ts
function useFullScreen({
  elementRef,
  onError,
  onExit,
  onEnter,
  onChange
} = {}) {
  const { playbackRef } = useLimeplay();
  const playback = playbackRef.current;
  const [isFullScreen, setIsFullScreen, isFullScreenRef] = use_state_ref_default(false);
  const [isFullScreenSupported, setIsFullScreenSupported] = (0, import_react3.useState)(false);
  async function enterFullScreen() {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      }
      if (screenfull_default.isEnabled) {
        await screenfull_default.request(elementRef.current, {
          navigationUI: "hide"
        });
      } else if (playback && playback.webkitSupportsFullscreen) {
        playback.webkitEnterFullscreen();
      }
      if (onEnter && typeof onEnter === "function") {
        onEnter();
      }
    } catch (error) {
      if (onError && typeof onError === "function") {
        onError(error);
      }
    }
  }
  function exitFullScreen() {
    if (screenfull_default.isEnabled) {
      screenfull_default.exit();
    } else if (playback && playback.webkitSupportsFullscreen) {
      playback.webkitExitFullscreen();
    }
    if (onExit && typeof onExit === "function") {
      onExit();
    }
  }
  function toggleFullScreen() {
    if (isFullScreenRef.current) {
      exitFullScreen();
    } else {
      enterFullScreen();
    }
  }
  const fullscreenEventHandler = (0, import_react3.useCallback)(
    (_event) => {
      var _a;
      if (screenfull_default.isEnabled) {
        setIsFullScreen((_a = screenfull_default.isFullscreen) != null ? _a : false);
      } else if (playback && playback.webkitSupportsFullscreen) {
        setIsFullScreen(playback.webkitDisplayingFullscreen);
      }
      if (onChange && typeof onChange === "function") {
        onChange(_event);
      }
    },
    [onChange]
  );
  (0, import_react3.useEffect)(() => {
    function checkFullScreenSupport() {
      if (screenfull_default.isEnabled) {
        return true;
      }
      if (playback && playback.webkitSupportsFullscreen) {
        return true;
      }
      return false;
    }
    setIsFullScreenSupported(checkFullScreenSupport());
    function checkSupport_() {
      setIsFullScreenSupported(checkFullScreenSupport());
    }
    playback.addEventListener("loadedmetadata", checkSupport_);
    playback.addEventListener("loadeddata", checkSupport_);
    fullscreenEventHandler({});
    return () => {
      playback.removeEventListener("loadedmetadata", checkSupport_);
      playback.removeEventListener("loadeddata", checkSupport_);
    };
  }, []);
  (0, import_react3.useEffect)(() => {
    if (screenfull_default.isEnabled) {
      screenfull_default.on("change", fullscreenEventHandler);
      if (onError && typeof onError === "function") {
        screenfull_default.on("error", onError);
      }
    }
    if (playback && playback.webkitSupportsFullscreen) {
      playback.addEventListener(
        "webkitfullscreenchange",
        fullscreenEventHandler
      );
    }
    return () => {
      if (screenfull_default.isEnabled) {
        screenfull_default.off("change", fullscreenEventHandler);
        if (onError && typeof onError === "function") {
          screenfull_default.off("error", onError);
        }
      }
      if (playback && playback.webkitSupportsFullscreen) {
        playback.removeEventListener(
          "webkitfullscreenchange",
          fullscreenEventHandler
        );
      }
    };
  }, [onError, onChange, fullscreenEventHandler]);
  return {
    isFullScreen,
    enterFullScreen,
    exitFullScreen,
    toggleFullScreen,
    isFullScreenSupported,
    api: screenfull_default
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useFullScreen
});
