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
interface UseTimelineSliderHoverConfig {
    sliderHandlerConfig: SliderHandlerConfig;
    ref: React.RefObject<HTMLElement>;
    onSlideStart?: (value: number) => void;
    onSlide?: (value: number) => void;
    onSlideEnd?: (value: number) => void;
}
declare function useTimelineHover({ sliderHandlerConfig, ref, onSlideStart, onSlide, onSlideEnd, }: UseTimelineSliderHoverConfig): {
    value: number;
    isHovering: boolean;
};

export { useTimelineHover };
