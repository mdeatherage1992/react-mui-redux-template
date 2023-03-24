import { LazyLoader } from '../../config/loadable';

export const ContactPage = () => {
  return (
    <LazyLoader
      func={() => import('./index')}
      selectorFunc={module => module.ContactPage}
      opts={{ fallback: null }}
    />
  );
};
