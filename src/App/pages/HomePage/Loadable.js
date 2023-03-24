import { LazyLoader } from '../../config/loadable.js';

export const HomePage = () => {
  return (
    <LazyLoader
      func={() => import('./index')}
      selectorFunc={module => module.HomePage}
      opts={{ fallback: null }}
    />
  );
};
