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
    initialValue?: number;
    onDragStart?: (value: number) => void;
    onDrag?: (value: number) => void;
    onDragEnd?: (value: number) => void;
    onPointerEnter?: () => void;
    onPointerMove?: (value: number) => void;
    onPointerLeave?: () => void;
}
declare function useSliderEvents({ sliderHandlerConfig, ref, initialValue, onDragStart, onDrag, onDragEnd, onPointerEnter, onPointerMove, onPointerLeave, }: UseTimelineSliderConfig): {
    value: number;
    isSliding: boolean;
    isHovering: boolean;
    isInside: boolean;
};

export { useSliderEvents };
