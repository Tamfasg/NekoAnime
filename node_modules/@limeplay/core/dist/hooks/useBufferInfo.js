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

// src/hooks/useBufferInfo.ts
var useBufferInfo_exports = {};
__export(useBufferInfo_exports, {
  useBufferInfo: () => useBufferInfo
});
module.exports = __toCommonJS(useBufferInfo_exports);
var import_react2 = require("react");

// src/utils/get-percentage.ts
function getPercentage(time, total, PRECISION = 3) {
  return Math.round(time / total * 100 * 10 ** PRECISION) / 10 ** PRECISION;
}

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

// src/hooks/useBufferInfo.ts
function useBufferInfo({ updateInterval = 1e3 } = {}) {
  const [bufferInfo, setBufferInfo] = (0, import_react2.useState)([]);
  const currentTimerId = (0, import_react2.useRef)(-1);
  const { playbackRef, playerRef } = useLimeplay();
  const player = playerRef.current;
  const playback = playbackRef.current;
  (0, import_react2.useEffect)(() => {
    const updateSeekHandler = () => {
      clearInterval(currentTimerId.current);
      currentTimerId.current = window.setInterval(() => {
        const [buffer] = player.getBufferedInfo().total;
        const seekRange = player.seekRange();
        const seekRangeSize = seekRange.end - seekRange.start;
        if (player.getBufferFullness() && buffer) {
          const clampedBufferStart = Math.max(
            buffer.start,
            seekRange.start
          );
          const clampedBufferEnd = Math.min(
            buffer.end,
            seekRange.end
          );
          const bufferStartDistance = clampedBufferStart - seekRange.start;
          const bufferEndDistance = clampedBufferEnd - seekRange.start;
          const bufferWidth = getPercentage(
            bufferEndDistance - bufferStartDistance,
            seekRangeSize
          );
          const bufferStartPosition = getPercentage(
            bufferStartDistance,
            seekRangeSize
          );
          setBufferInfo([
            {
              start: bufferStartDistance,
              end: bufferEndDistance,
              width: bufferWidth,
              startPosition: bufferStartPosition
            }
          ]);
        }
      }, updateInterval);
    };
    const events = ["trackschanged", "manifestparsed"];
    events.forEach((event) => {
      playback.addEventListener(event, updateSeekHandler);
    });
    updateSeekHandler();
    return () => {
      if (playback) {
        events.forEach((event) => {
          playback.removeEventListener(event, updateSeekHandler);
        });
      }
      clearInterval(currentTimerId.current);
    };
  }, [updateInterval]);
  return {
    bufferInfo
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useBufferInfo
});
