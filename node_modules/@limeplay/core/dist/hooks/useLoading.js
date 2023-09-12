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

// src/hooks/useLoading.ts
var useLoading_exports = {};
__export(useLoading_exports, {
  useLoading: () => useLoading
});
module.exports = __toCommonJS(useLoading_exports);
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

// src/hooks/useLoading.ts
function useLoading() {
  const [isLoading, setIsLoading] = (0, import_react2.useState)(false);
  const { playerRef } = useLimeplay();
  const player = playerRef.current;
  (0, import_react2.useEffect)(() => {
    const loadingEventHandler = () => {
      const isBuffering = player.isBuffering();
      setIsLoading(isBuffering);
    };
    const events = ["buffering", "loading"];
    events.forEach((event) => {
      player.addEventListener(event, loadingEventHandler);
    });
    return () => {
      if (player) {
        events.forEach((event) => {
          player.removeEventListener(event, loadingEventHandler);
        });
      }
    };
  }, []);
  return {
    isLoading
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useLoading
});
