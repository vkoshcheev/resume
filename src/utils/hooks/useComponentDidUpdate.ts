import { useEffect, useRef } from 'react';

type Callback<T> = (prevDeps: T, currentDeps: T) => void;

const useComponentDidUpdate = <T extends ReadonlyArray<any>>(callback: Callback<T>, deps: T) => {
  const ref = useRef({ isComponentDidMount: true });
  const prevDeps = useRef(deps);

  useEffect(() => {
    if (ref.current.isComponentDidMount) {
      ref.current.isComponentDidMount = false;
    } else {
      callback(prevDeps.current, deps);
      prevDeps.current = deps;
    }
  }, deps);
};

export default useComponentDidUpdate;
