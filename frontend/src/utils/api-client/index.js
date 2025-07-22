import { BACKEND_API_URL } from "../../config/app.config";

const createApiRequest = (baseURL) => {
  return async (endpoint, options = {}) => {
    const url = `${baseURL}${endpoint}`;

    const config = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { data, status: response.status };
  };
};

const apiRequest = createApiRequest(BACKEND_API_URL);

export const apiGet = async (endpoint) => {
  return apiRequest(endpoint, { method: "GET" });
};

export const apiPost = async (endpoint, data) => {
  return apiRequest(endpoint, {
    method: "POST",
    body: JSON.stringify(data),
  });
};
