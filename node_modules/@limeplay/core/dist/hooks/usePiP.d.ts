interface UsePiPConfig {
    onError?: (event: Event) => void;
    onExit?: () => void;
    onEnter?: () => void;
    onChange?: (event: Event) => void;
    onResize?: (event: Event) => void;
}
declare function usePiP({ onError, onExit, onEnter, onChange, onResize, }?: UsePiPConfig): {
    readonly isPiPActive: boolean;
    readonly isPiPSupported: boolean;
    readonly isPiPAllowed: boolean;
    readonly pipWindow: PictureInPictureWindow;
    readonly togglePiP: () => Promise<void>;
};

export { UsePiPConfig, usePiP };
