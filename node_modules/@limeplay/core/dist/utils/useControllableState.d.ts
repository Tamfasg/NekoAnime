import * as React from 'react';

type UseControllableStateParams<T> = {
    prop?: T | undefined;
    defaultProp?: T | undefined;
    onChange?: (state: T) => void;
};
declare function useControllableState<T>({ prop, defaultProp, onChange, }: UseControllableStateParams<T>): readonly [T, React.Dispatch<React.SetStateAction<T>>];

export { useControllableState };
