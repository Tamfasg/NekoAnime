interface UseOrientationConfig {
    onError?: (error: Error) => void;
    onLock?: () => void;
    onUnlock?: () => void;
    onChange?: (event: Event) => void;
}
declare function useOrientation({ onError, onLock, onUnlock, onChange, }?: UseOrientationConfig): {
    orientation: ScreenOrientation;
    lockOrientation: (type: any) => void;
    unlockOrientation: () => void;
    toggleOrientation: () => void;
    api: ScreenOrientation;
};

export { UseOrientationConfig, useOrientation };
