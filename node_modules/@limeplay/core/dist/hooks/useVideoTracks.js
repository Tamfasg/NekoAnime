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

// src/hooks/useVideoTracks.ts
var useVideoTracks_exports = {};
__export(useVideoTracks_exports, {
  useVideoTracks: () => useVideoTracks
});
module.exports = __toCommonJS(useVideoTracks_exports);
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

// src/hooks/useVideoTracks.ts
function useVideoTracks({
  clearBufferOnChange = "auto",
  safeMargin = 0
}) {
  const { playerRef } = useLimeplay();
  const player = playerRef.current;
  const loadMode = (0, import_react3.useRef)(player == null ? void 0 : player.getLoadMode());
  const [tracks, setTracks] = (0, import_react3.useState)([]);
  const [selectedTrack, setSelectedTrack, selectedTrackRef] = use_state_ref_default(null);
  const [isAuto, setIsAuto, isAutoRef] = use_state_ref_default(false);
  const previousTrack = (0, import_react3.useRef)(null);
  function setAutoMode() {
    const config = {
      abr: {
        enabled: true
      }
    };
    player.configure(config);
    setIsAuto(true);
  }
  const selectTrack = (0, import_react3.useCallback)(
    (track) => {
      const config = {
        abr: {
          enabled: false
        }
      };
      player.configure(config);
      setIsAuto(false);
      if (clearBufferOnChange === "auto" && previousTrack.current && selectedTrackRef.current) {
        if (previousTrack.current.bandwidth < selectedTrackRef.current.bandwidth) {
          player.selectVariantTrack(track, true, safeMargin);
        } else {
          player.selectVariantTrack(track, false, safeMargin);
        }
      } else {
        player.selectVariantTrack(
          track,
          Boolean(clearBufferOnChange),
          safeMargin
        );
      }
    },
    [clearBufferOnChange, safeMargin, setIsAuto]
  );
  const updateQualityHandler = (0, import_react3.useCallback)(() => {
    const currConfig = player.getConfiguration();
    let currTracks = player.getVariantTracks();
    const currSelectedTrack = currTracks.find((track) => track.active);
    if (currConfig.abr.enabled !== isAutoRef.current) {
      setIsAuto(currConfig.abr.enabled);
    }
    if (currSelectedTrack) {
      currTracks = currTracks.filter(
        (track) => track.language === currSelectedTrack.language && track.channelsCount === currSelectedTrack.channelsCount
      );
    }
    currTracks = currTracks.filter((track, idx) => {
      const otherIdx = player.isAudioOnly() ? currTracks.findIndex((t) => t.bandwidth === track.bandwidth) : currTracks.findIndex((t) => t.height === track.height);
      return otherIdx === idx;
    });
    if (player.isAudioOnly()) {
      currTracks.sort((a, b) => a.bandwidth - b.bandwidth);
    } else {
      currTracks.sort((a, b) => a.height - b.height);
    }
    setSelectedTrack((prevTrack) => {
      previousTrack.current = prevTrack;
      return currSelectedTrack || null;
    });
    setTracks(currTracks);
  }, []);
  (0, import_react3.useEffect)(() => {
    if (player) {
      const _config = player.getConfiguration();
      updateQualityHandler();
      setIsAuto(_config.abr.enabled);
    }
  }, [updateQualityHandler, loadMode.current, setIsAuto]);
  (0, import_react3.useEffect)(() => {
    const events = [
      "variantchanged",
      "abrstatuschanged",
      "trackschanged",
      "adaptation"
    ];
    events.forEach((event) => {
      player.addEventListener(event, updateQualityHandler);
    });
    return () => {
      if (player) {
        events.forEach((event) => {
          player.removeEventListener(event, updateQualityHandler);
        });
      }
    };
  }, [updateQualityHandler]);
  return {
    tracks,
    selectedTrack,
    isAuto,
    selectTrack,
    setAutoMode
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useVideoTracks
});
