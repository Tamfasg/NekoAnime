declare function usePlayback(): {
    readonly isPlaying: boolean;
    readonly togglePlayback: () => void;
};

export { usePlayback };
