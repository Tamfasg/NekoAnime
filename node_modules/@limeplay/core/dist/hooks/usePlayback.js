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

// src/hooks/usePlayback.ts
var usePlayback_exports = {};
__export(usePlayback_exports, {
  usePlayback: () => usePlayback
});
module.exports = __toCommonJS(usePlayback_exports);
var import_react2 = require("react");

// src/components/LimeplayProvider.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var LimeplayProviderContext = (0, import_react.createContext)(null);
function useLimeplay() {
  const context = (0, import_react.useContext)(LimeplayProviderContext);
  if (!context) {
    throw new Error(
      `useLimeplay hook must be used within a LimeplayProvider`
    );
  }
  return context;
}

// src/hooks/usePlayback.ts
function usePlayback() {
  const [isPlaying, setIsPlaying] = (0, import_react2.useState)(false);
  const { playbackRef } = useLimeplay();
  const playback = playbackRef.current;
  const [isEnded, setIsEnded] = (0, import_react2.useState)(false);
  const [isRepeat, setIsRepeat] = (0, import_react2.useState)(false);
  const togglePlayback = () => {
    if (!playback.duration)
      return;
    if (playback.paused)
      playback.play();
    else
      playback.pause();
  };
  (0, import_react2.useEffect)(() => {
    const playbackEventHandler = () => setIsPlaying(!playback.paused);
    const events = ["play", "pause", "waiting", "seeking", "seeked"];
    events.forEach((event) => {
      playback.addEventListener(event, playbackEventHandler);
    });
    playbackEventHandler();
    return () => {
      if (playback) {
        events.forEach((event) => {
          playback.removeEventListener(event, playbackEventHandler);
        });
      }
    };
  }, []);
  return {
    isPlaying,
    togglePlayback
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  usePlayback
});
