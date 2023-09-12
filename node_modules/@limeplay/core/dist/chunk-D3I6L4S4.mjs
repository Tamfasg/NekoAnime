import {
  useLimeplay
} from "./chunk-WUIGF72E.mjs";

// src/hooks/useLoading.ts
import { useEffect, useState } from "react";
function useLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const { playerRef } = useLimeplay();
  const player = playerRef.current;
  useEffect(() => {
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

export {
  useLoading
};
