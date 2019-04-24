const baseUrl = 'https://api.justgiving.com/';
const appId = process.env.APP_ID;
const apiUrl = `${baseUrl}/${appId}/v1/`;

async function get (url) {
  const response = await fetch(`${apiUrl}${url}`, { headers: getRequestHeaders() });
  return handleResponse(response);
}

export default {
  get
};

function getRequestHeaders() {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  return headers;
}

function handleResponse(response) {
  if (!response.ok) {
    const error = new Error(response.statusText);
    throw error;
  }

  return response.json();
}
