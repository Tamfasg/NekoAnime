import React__default from 'react';

interface UseTimelineConfig {
    /**
     * HTMLMediaElement events to listen to
     * @default Events - ['trackschanged', 'manifestparsed']
     */
    updateInterval?: number;
    seekAllowed?: boolean;
    updateWhileSliding?: boolean;
    isSlidingRef?: React__default.MutableRefObject<boolean>;
}
declare function useTimeline({ updateInterval, isSlidingRef, }?: UseTimelineConfig): {
    readonly currentTime: number;
    readonly duration: number;
    readonly currentProgress: number;
    readonly seekRange: SeekRange;
    readonly isLive: boolean;
    readonly liveLatency: number;
    readonly updateCurrentTime: (time: number) => void;
};

export { UseTimelineConfig, useTimeline };
