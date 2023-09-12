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

// src/hooks/useAudioTracks.ts
var useAudioTracks_exports = {};
__export(useAudioTracks_exports, {
  languageParser: () => languageParser,
  useAudioTracks: () => useAudioTracks
});
module.exports = __toCommonJS(useAudioTracks_exports);
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

// src/hooks/useAudioTracks.ts
function languageParser(locale) {
  switch (locale) {
    case "mul":
      return "Multiple Languages";
    case "und":
      return "Default";
    case "zxx":
      return "Not applicable";
    default:
      break;
  }
  if (window.Intl && "DisplayNames" in Intl) {
    const userLanguage = navigator.language;
    try {
      const languageNames = new Intl.DisplayNames([userLanguage], {
        type: "language"
      });
      const language2 = languageNames.of(locale);
      return language2.charAt(0).toUpperCase() + language2.slice(1);
    } catch (e) {
      return `Unrecognized (${locale})`;
    }
  }
  const language = shaka.util.LanguageUtils.getBase(locale);
  return `Unrecognized (${locale})`;
}
function useAudioTracks() {
  const { playerRef } = useLimeplay();
  const player = playerRef.current;
  const [tracks, setTracks] = (0, import_react3.useState)([]);
  const [selectedTrack, setSelectedTrack, selectedTrackRef] = use_state_ref_default(null);
  const previousTrack = (0, import_react3.useRef)(null);
  const selectTrack = (0, import_react3.useCallback)(
    (track, role, channelsCount) => {
      role = role != null ? role : track.roles[0];
      channelsCount = channelsCount != null ? channelsCount : track.channels[0];
      player.selectAudioLanguage(track.language, role, channelsCount);
    },
    []
  );
  const updateQualityHandler = (0, import_react3.useCallback)(() => {
    const currTracks = player.getVariantTracks();
    let currSelectedTrack = null;
    const uniqueTracks = /* @__PURE__ */ new Set();
    const audioTracks = [];
    currTracks.forEach((track) => {
      if (!uniqueTracks.has(track.language)) {
        uniqueTracks.add(track.language);
        audioTracks.push({
          track,
          display: languageParser(track.language),
          roles: new Set(track.roles),
          channels: /* @__PURE__ */ new Set([track.channelsCount]),
          language: track.language
        });
      } else {
        const existingTrack = audioTracks.find(
          (audioTrack) => audioTrack.language === track.language
        );
        track.roles.forEach((role) => existingTrack.roles.add(role));
        existingTrack.channels.add(track.channelsCount);
      }
    });
    currTracks.forEach((track) => {
      if (track.active) {
        currSelectedTrack = audioTracks.find(
          (audioTrack) => audioTrack.language === track.language
        );
      }
    });
    setSelectedTrack((prevTrack) => {
      previousTrack.current = prevTrack;
      return currSelectedTrack != null ? currSelectedTrack : null;
    });
    setTracks(audioTracks);
  }, []);
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
    selectTrack
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  languageParser,
  useAudioTracks
});
