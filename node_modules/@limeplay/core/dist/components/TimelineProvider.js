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

// src/components/TimelineProvider.tsx
var TimelineProvider_exports = {};
__export(TimelineProvider_exports, {
  LimeplayTimelineProvider: () => LimeplayTimelineProvider,
  useLimeplayTimeline: () => useLimeplayTimeline
});
module.exports = __toCommonJS(TimelineProvider_exports);
var import_react2 = require("react");

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

// src/components/TimelineProvider.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var LimeplayTimelineProviderContext = (0, import_react2.createContext)(void 0);
function useLimeplayTimeline() {
  const context = (0, import_react2.useContext)(LimeplayTimelineProviderContext);
  if (!context) {
    throw new Error(
      `useLimeplayTimeline hook must be used within a LimeplayTimelineProvider`
    );
  }
  return context;
}
function LimeplayTimelineProvider({
  children
}) {
  const [currentTime, setCurrentTime] = (0, import_react2.useState)(0);
  const [duration, setDuration, durationRef] = use_state_ref_default(0);
  const [isSeeking, setIsSeeking, isSeekingRef] = use_state_ref_default(false);
  const [currentProgress, setCurrentProgress] = (0, import_react2.useState)(0);
  const [seekRange, setSeekRange, seekRangeRef] = use_state_ref_default({
    start: 0,
    end: 0
  });
  const providerValue = {
    currentTime,
    setCurrentTime,
    duration,
    setDuration,
    durationRef,
    isSeeking,
    setIsSeeking,
    isSeekingRef,
    currentProgress,
    setCurrentProgress,
    seekRange,
    setSeekRange,
    seekRangeRef
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LimeplayTimelineProviderContext.Provider, { value: providerValue, children });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LimeplayTimelineProvider,
  useLimeplayTimeline
});
