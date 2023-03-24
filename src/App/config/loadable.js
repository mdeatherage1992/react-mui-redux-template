import React, { lazy, Suspense } from 'react';

export function LazyLoader(props) {
  let lazyFactory = () => props.func;
  if (props.selectorFunc) {
    lazyFactory = () =>
      props.func().then(module => ({ default: props.selectorFunc(module) }));
  }

  const LazyComponent = lazy(lazyFactory);

  return (
    <Suspense fallback={props.opts.fallback}>
      <LazyComponent />
    </Suspense>
  );
}
