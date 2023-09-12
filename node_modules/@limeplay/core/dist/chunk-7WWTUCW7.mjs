import {
  useLimeplay
} from "./chunk-WUIGF72E.mjs";
import {
  use_state_ref_default
} from "./chunk-OUCN7IQ4.mjs";

// src/hooks/useVideoTracks.ts
import { useCallback, useEffect, useRef, useState } from "react";
function useVideoTracks({
  clearBufferOnChange = "auto",
  safeMargin = 0
}) {
  const { playerRef } = useLimeplay();
  const player = playerRef.current;
  const loadMode = useRef(player == null ? void 0 : player.getLoadMode());
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack, selectedTrackRef] = use_state_ref_default(null);
  const [isAuto, setIsAuto, isAutoRef] = use_state_ref_default(false);
  const previousTrack = useRef(null);
  function setAutoMode() {
    const config = {
      abr: {
        enabled: true
      }
    };
    player.configure(config);
    setIsAuto(true);
  }
  const selectTrack = useCallback(
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
  const updateQualityHandler = useCallback(() => {
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
  useEffect(() => {
    if (player) {
      const _config = player.getConfiguration();
      updateQualityHandler();
      setIsAuto(_config.abr.enabled);
    }
  }, [updateQualityHandler, loadMode.current, setIsAuto]);
  useEffect(() => {
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

export {
  useVideoTracks
};
