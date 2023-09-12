interface LimeplayTimelineProviderContextType {
    currentTime: number;
    setCurrentTime: (time: number) => void;
    duration: number;
    setDuration: (duration: number) => void;
    durationRef: React.MutableRefObject<number>;
    isSeeking: boolean;
    setIsSeeking: (isSeeking: boolean) => void;
    isSeekingRef: React.MutableRefObject<boolean>;
    currentProgress: number;
    setCurrentProgress: (progress: number) => void;
    seekRange: SeekRange;
    setSeekRange: (seekRange: SeekRange) => void;
    seekRangeRef: React.MutableRefObject<SeekRange>;
}
declare function useLimeplayTimeline(): LimeplayTimelineProviderContextType;
declare function LimeplayTimelineProvider({ children, }: {
    children: React.ReactNode;
}): JSX.Element;

export { LimeplayTimelineProvider, useLimeplayTimeline };
