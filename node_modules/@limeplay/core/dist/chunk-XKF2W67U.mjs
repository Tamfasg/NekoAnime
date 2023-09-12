import {
  useLimeplay
} from "./chunk-WUIGF72E.mjs";
import {
  use_state_ref_default
} from "./chunk-OUCN7IQ4.mjs";

// src/hooks/useAudioTracks.ts
import { useCallback, useEffect, useRef, useState } from "react";
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
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack, selectedTrackRef] = use_state_ref_default(null);
  const previousTrack = useRef(null);
  const selectTrack = useCallback(
    (track, role, channelsCount) => {
      role = role != null ? role : track.roles[0];
      channelsCount = channelsCount != null ? channelsCount : track.channels[0];
      player.selectAudioLanguage(track.language, role, channelsCount);
    },
    []
  );
  const updateQualityHandler = useCallback(() => {
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
    selectTrack
  };
}

export {
  languageParser,
  useAudioTracks
};
