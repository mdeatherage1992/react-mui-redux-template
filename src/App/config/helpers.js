export const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  return {
    token: storedToken,
  };
};

export const commonHeader = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
  };
};

export async function request(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}
