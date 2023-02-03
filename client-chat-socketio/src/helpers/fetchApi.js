const baseUrl = import.meta.env.VITE_BASE_URL;

export const fetchWithOutAuth = async (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;

  if (method === 'GET') {
    const resp = await fetch(url);
    return await resp.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await resp.json();
  }
};

export const fetchAuth = async (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem('token') || null;

  if (method === 'GET') {
    const resp = await fetch(url, {
      headers: {
        'x-token': token,
      },
    });

    return await resp.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: {
        'x-token': token,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await resp.json();
  }
};
