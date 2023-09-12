import shaka from 'shaka-player';

interface SubtitleTrack {
    track: shaka.extern.Track;
    display: string;
    roles: Set<string>;
    language: string;
}
declare function useTextTracks(): {
    readonly tracks: SubtitleTrack[];
    readonly selectedTrack: SubtitleTrack;
    readonly isVisible: boolean;
    readonly selectTrack: (track: SubtitleTrack) => void;
    readonly toggleVisibility: () => void;
};

export { useTextTracks };
