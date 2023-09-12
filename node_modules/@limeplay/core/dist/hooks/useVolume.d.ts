interface UseVolumeConfig {
    /**
     * HTMLMediaElement events to listen to
     * @default Events - ['volumechange']
     */
    initialVolume?: number;
    syncMuteState?: boolean;
}
declare function useVolume({ initialVolume, // Do not provide default value as playback.volume will be used
syncMuteState, }?: UseVolumeConfig): {
    readonly volume: number;
    readonly muted: boolean;
    readonly lastVolume: number;
    readonly toggleMute: () => void;
    readonly updateCurrentVolume: (vol: number) => void;
};

export { UseVolumeConfig, useVolume };
