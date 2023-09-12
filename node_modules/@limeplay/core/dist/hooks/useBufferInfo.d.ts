interface UseBufferConfig {
    events?: ShakaPlayerEvents;
    updateInterval?: number;
}
type Buffer = {
    start: number;
    end: number;
    width: number;
    startPosition: number;
};
declare function useBufferInfo({ updateInterval }?: UseBufferConfig): {
    bufferInfo: Buffer[];
};

export { UseBufferConfig, useBufferInfo };
