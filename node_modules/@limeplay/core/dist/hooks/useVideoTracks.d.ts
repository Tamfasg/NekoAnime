interface UseVideoTracksConfig {
    clearBufferOnChange?: 'auto' | boolean;
    safeMargin?: number;
}
declare function useVideoTracks({ clearBufferOnChange, safeMargin, }: UseVideoTracksConfig): {
    readonly tracks: shaka.extern.Track[];
    readonly selectedTrack: shaka.extern.Track;
    readonly isAuto: boolean;
    readonly selectTrack: (track: shaka.extern.Track) => void;
    readonly setAutoMode: () => void;
};

export { UseVideoTracksConfig, useVideoTracks };
