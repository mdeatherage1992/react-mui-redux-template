// import { commonHeader, request } from '../config/helpers';

export default function SubmitForm() {
  const submitForm = params => {
    // const url = `http://universities.hipolabs.com/search?country=United+States`;
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     ...commonHeader(),
    //   },
    //   body: JSON.stringify({
    //     contactMessage: {
    //       ...params,
    //     },
    //   }),
    // };
    //
    // return request(url, options);
    console.log('formdata______________________-');
    console.log(params);
    console.log('formdata________________________');
  };

  return {
    submitForm,
  };
}
