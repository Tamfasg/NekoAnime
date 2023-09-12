import {
  useLimeplay
} from "./chunk-WUIGF72E.mjs";
import {
  getPercentage
} from "./chunk-47P3ZNHN.mjs";

// src/hooks/useBufferInfo.ts
import { useEffect, useRef, useState } from "react";
function useBufferInfo({ updateInterval = 1e3 } = {}) {
  const [bufferInfo, setBufferInfo] = useState([]);
  const currentTimerId = useRef(-1);
  const { playbackRef, playerRef } = useLimeplay();
  const player = playerRef.current;
  const playback = playbackRef.current;
  useEffect(() => {
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

export {
  useBufferInfo
};
