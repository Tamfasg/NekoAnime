import {
  useLimeplay
} from "./chunk-WUIGF72E.mjs";
import {
  use_state_ref_default
} from "./chunk-OUCN7IQ4.mjs";

// src/hooks/useFullScreen.ts
import { useCallback, useEffect, useState } from "react";

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
  const [isFullScreenSupported, setIsFullScreenSupported] = useState(false);
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
  const fullscreenEventHandler = useCallback(
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
  useEffect(() => {
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
  useEffect(() => {
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

export {
  useFullScreen
};
