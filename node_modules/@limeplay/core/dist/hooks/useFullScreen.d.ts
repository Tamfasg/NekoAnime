import * as screenfull from 'screenfull';

interface UseFullScreenConfig {
    elementRef?: React.RefObject<HTMLElement>;
    onError?: (event: Event) => void;
    onExit?: () => void;
    onEnter?: () => void;
    onChange?: (event: Event) => void;
}
declare function useFullScreen({ elementRef, onError, onExit, onEnter, onChange, }?: UseFullScreenConfig): {
    readonly isFullScreen: boolean;
    readonly enterFullScreen: () => Promise<void>;
    readonly exitFullScreen: () => void;
    readonly toggleFullScreen: () => void;
    readonly isFullScreenSupported: boolean;
    readonly api: {
        readonly isFullscreen: boolean;
        readonly element: Element;
        readonly isEnabled: boolean;
        raw: screenfull.RawEventNames;
        request(element?: Element, options?: FullscreenOptions): Promise<void>;
        exit(): Promise<void>;
        toggle(element?: Element, options?: FullscreenOptions): Promise<void>;
        on(name: screenfull.EventName, handler: (event: Event) => void): void;
        off(name: screenfull.EventName, handler: (event: Event) => void): void;
        onchange(handler: (event: Event) => void): void;
        onerror(handler: (event: Event) => void): void;
    };
};

export { UseFullScreenConfig, useFullScreen };
