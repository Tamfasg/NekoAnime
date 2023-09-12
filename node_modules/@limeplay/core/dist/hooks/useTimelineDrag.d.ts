interface SliderHandlerConfig {
    min: number;
    max: number;
    orientation?: React.AriaAttributes['aria-orientation'];
    disabled?: boolean;
    dir?: 'ltr' | 'rtl';
    inverted?: boolean;
    step?: number;
    skipStep?: number;
}
interface UseTimelineSliderConfig {
    sliderHandlerConfig: SliderHandlerConfig;
    ref: React.RefObject<HTMLElement>;
    onSlideStart?: (value: number) => void;
    onSlide?: (value: number) => void;
    onSlideEnd?: (value: number) => void;
    initialValue?: number;
}
declare function useTimelineDrag({ sliderHandlerConfig, ref, onSlideStart, onSlide, onSlideEnd, initialValue, }: UseTimelineSliderConfig): {
    value: number;
    isSliding: boolean;
};

export { useTimelineDrag };
