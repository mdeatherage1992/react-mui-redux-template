import { commonHeader, request } from '../config/helpers';

export default function GetNews() {
  const getNews = () => {
    const url = `http://universities.hipolabs.com/search?country=United+States`;
    const options = {
      method: 'GET',
      headers: {
        ...commonHeader(),
      },
    };

    return request(url, options);
  };

  return {
    getNews,
  };
}
