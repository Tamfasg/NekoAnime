// src/utils/use-state-ref.ts
import { useCallback, useRef, useState } from "react";
var isFunction = (setStateAction) => typeof setStateAction === "function";
var useStateRef = (initialState) => {
  const [state, setState] = useState(initialState);
  const ref = useRef(state);
  const dispatch = useCallback(
    (setStateAction) => {
      ref.current = isFunction(setStateAction) ? setStateAction(ref.current) : setStateAction;
      setState(ref.current);
    },
    []
  );
  return [state, dispatch, ref];
};
var use_state_ref_default = useStateRef;

export {
  use_state_ref_default
};
