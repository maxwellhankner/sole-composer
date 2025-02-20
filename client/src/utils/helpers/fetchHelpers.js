export const simpleFetch = async (link, method) => {
  const response = await fetch(link, { method: method });
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  }
  return response;
};

export const designFetch = async (link, method, body) => {
  const response = await fetch(link, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response.json();
};
