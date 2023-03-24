import GetNews from './getNews';
import SubmitForm from './submitForm';

export const ApiClient = {
  ...GetNews(),
  ...SubmitForm(),
};
