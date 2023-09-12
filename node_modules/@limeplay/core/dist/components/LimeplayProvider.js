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

// src/components/LimeplayProvider.tsx
var LimeplayProvider_exports = {};
__export(LimeplayProvider_exports, {
  LimeplayProvider: () => LimeplayProvider,
  useLimeplay: () => useLimeplay
});
module.exports = __toCommonJS(LimeplayProvider_exports);
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

// src/components/LimeplayProvider.tsx
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
function LimeplayProvider({ children }) {
  const [player, setPlayer, playerRef] = use_state_ref_default(
    null
  );
  const [playback, setPlayback, playbackRef] = use_state_ref_default(null);
  const defaultContext = (0, import_react2.useMemo)(
    () => ({
      playbackRef,
      playerRef,
      containerRef: (0, import_react2.createRef)(),
      player,
      setPlayer,
      playback,
      setPlayback
    }),
    [playback, player]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LimeplayProviderContext.Provider, { value: defaultContext, children });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LimeplayProvider,
  useLimeplay
});
