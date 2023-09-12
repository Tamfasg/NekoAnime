// src/utils/useCallbackRef.tsx
import * as React from "react";
function useCallbackRef(callback) {
  const callbackRef = React.useRef(callback);
  React.useEffect(() => {
    callbackRef.current = callback;
  });
  return React.useMemo(
    () => (...args) => {
      var _a;
      return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
    },
    []
  );
}

export {
  useCallbackRef
};
