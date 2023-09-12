type Direction = 'ltr' | 'rtl';
type OnSliderHandlerProps = {
    min: number;
    max: number;
    step: number;
    orientation: React.AriaAttributes['aria-orientation'];
    disabled: boolean;
    dir: Direction;
    inverted: boolean;
};
declare function useSliderMove(event: React.MouseEvent<HTMLElement>, callback: (value: number) => void, props: OnSliderHandlerProps): number;

export { useSliderMove };
