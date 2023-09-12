declare function composeEventHandlers<E>(originalEventHandler?: (event: E) => void, ourEventHandler?: (event: E) => void, { checkForDefaultPrevented }?: {
    checkForDefaultPrevented?: boolean;
}): (event: E) => void;

export { composeEventHandlers };
