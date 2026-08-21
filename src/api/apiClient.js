// Base API client with AbortController support and error handling
const BASE_URL = 'https://vlionserver.in/ini-work/public';

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export async function apiFetch(url, signal) {
  try {
    const response = await fetch(url, { signal });
    if (!response.ok) {
      throw new ApiError(`HTTP error ${response.status}`, response.status);
    }
    const data = await response.json();
    if (!data.success) {
      throw new ApiError(data.message || 'API returned unsuccessful response');
    }
    return data;
  } catch (err) {
    if (err.name === 'AbortError') {
      throw err; // Re-throw abort errors silently
    }
    if (err instanceof ApiError) {
      throw err;
    }
    throw new ApiError(err.message || 'Network error');
  }
}

export { BASE_URL };
