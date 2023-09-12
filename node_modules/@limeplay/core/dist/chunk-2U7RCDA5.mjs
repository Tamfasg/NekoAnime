import {
  useLimeplay
} from "./chunk-WUIGF72E.mjs";

// src/hooks/usePlayback.ts
import { useEffect, useState } from "react";
function usePlayback() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { playbackRef } = useLimeplay();
  const playback = playbackRef.current;
  const [isEnded, setIsEnded] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const togglePlayback = () => {
    if (!playback.duration)
      return;
    if (playback.paused)
      playback.play();
    else
      playback.pause();
  };
  useEffect(() => {
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

export {
  usePlayback
};
