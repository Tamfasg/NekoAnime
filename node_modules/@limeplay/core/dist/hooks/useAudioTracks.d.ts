interface AudioTrack {
    track: shaka.extern.Track;
    display: string;
    roles: Set<string>;
    channels: Set<number>;
    language: string;
}
declare function languageParser(locale: string): string;
declare function useAudioTracks(): {
    readonly tracks: AudioTrack[];
    readonly selectedTrack: AudioTrack;
    readonly selectTrack: (track: AudioTrack, role?: string, channelsCount?: number) => void;
};

export { languageParser, useAudioTracks };
