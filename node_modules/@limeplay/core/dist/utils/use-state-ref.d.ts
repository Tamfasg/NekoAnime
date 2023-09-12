import { Dispatch, SetStateAction } from 'react';

type ReadOnlyRefObject<T> = {
    readonly current: T;
};
type UseStateRef = {
    <S>(initialState: S | (() => S)): [
        S,
        Dispatch<SetStateAction<S>>,
        ReadOnlyRefObject<S>
    ];
    <S = undefined>(): [
        S | undefined,
        Dispatch<SetStateAction<S | undefined>>,
        ReadOnlyRefObject<S | undefined>
    ];
};
declare const useStateRef: UseStateRef;

export { useStateRef as default };
