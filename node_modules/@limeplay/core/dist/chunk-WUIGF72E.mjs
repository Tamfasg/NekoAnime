import {
  use_state_ref_default
} from "./chunk-OUCN7IQ4.mjs";

// src/components/LimeplayProvider.tsx
import { createContext, createRef, useContext, useMemo } from "react";
import { jsx } from "react/jsx-runtime";
var LimeplayProviderContext = createContext(null);
function useLimeplay() {
  const context = useContext(LimeplayProviderContext);
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
  const defaultContext = useMemo(
    () => ({
      playbackRef,
      playerRef,
      containerRef: createRef(),
      player,
      setPlayer,
      playback,
      setPlayback
    }),
    [playback, player]
  );
  return /* @__PURE__ */ jsx(LimeplayProviderContext.Provider, { value: defaultContext, children });
}

export {
  useLimeplay,
  LimeplayProvider
};
