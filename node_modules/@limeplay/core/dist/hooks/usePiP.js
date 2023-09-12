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

// src/hooks/usePiP.ts
var usePiP_exports = {};
__export(usePiP_exports, {
  usePiP: () => usePiP
});
module.exports = __toCommonJS(usePiP_exports);
var import_react3 = require("react");

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

// src/hooks/usePiP.ts
function usePiP({
  onError,
  onExit,
  onEnter,
  onChange,
  onResize
} = {}) {
  const { playbackRef, playerRef } = useLimeplay();
  const playback = playbackRef.current;
  const player = playerRef.current;
  const [isPiPActive, setIsPiPActive, isPiPActiveRef] = use_state_ref_default(false);
  const [isPiPSupported, setIsPiPSupported] = (0, import_react3.useState)(false);
  const [isPiPAllowed, setIsPiPAllowed] = (0, import_react3.useState)(false);
  const [pipWindow, setPipWindow] = (0, import_react3.useState)(
    null
  );
  const pipError = (error) => {
    if (onError && typeof onError === "function") {
      onError(error);
    }
  };
  const togglePiP = async () => {
    if (!document.pictureInPictureElement) {
      playback.requestPictureInPicture().then((_pipWindow) => {
        setPipWindow(_pipWindow);
        if (onEnter && typeof onEnter === "function") {
          onEnter();
        }
        _pipWindow.addEventListener("resize", (event) => {
          if (onResize && typeof onResize === "function") {
            onResize(event);
          }
        });
      }).catch(pipError);
    } else {
      document.exitPictureInPicture().then(() => {
        setPipWindow(null);
        if (onExit && typeof onExit === "function") {
          onExit();
        }
      }).catch(pipError);
    }
  };
  (0, import_react3.useEffect)(() => {
    if (!document.pictureInPictureEnabled) {
      setIsPiPSupported(false);
      return void 0;
    }
    if (!playback.disablePictureInPicture) {
      setIsPiPAllowed(true);
    }
    setIsPiPSupported(true);
    if (document.pictureInPictureElement) {
      if (document.pictureInPictureElement !== playback) {
        document.exitPictureInPicture();
      } else {
        setIsPiPActive(true);
      }
    }
    const pipEventHandler = (_event) => {
      if (document.pictureInPictureElement) {
        setIsPiPActive(true);
      } else {
        setIsPiPActive(false);
      }
      if (onChange && typeof onChange === "function") {
        onChange(_event);
      }
    };
    const trackChangeHandler = async () => {
      if (player.isAudioOnly() && isPiPActiveRef.current) {
        await togglePiP();
      }
    };
    const events = ["enterpictureinpicture", "leavepictureinpicture"];
    events.forEach((event) => {
      playback.addEventListener(event, pipEventHandler);
    });
    if (player) {
      player.addEventListener("trackschanged", trackChangeHandler);
    }
    return () => {
      if (playback) {
        events.forEach((event) => {
          playback.removeEventListener(event, pipEventHandler);
        });
      }
      if (player) {
        player.removeEventListener("trackschanged", trackChangeHandler);
      }
    };
  }, [onChange, onResize]);
  return {
    isPiPActive,
    isPiPSupported,
    isPiPAllowed,
    pipWindow,
    togglePiP
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  usePiP
});
