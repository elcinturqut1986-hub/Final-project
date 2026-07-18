const API_BASE = 'https://gundem-teal.vercel.app/api/v1';

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function getAnonId() {
  let id = localStorage.getItem('anonId');
  if (!id) {
    id = uuidv4();
    localStorage.setItem('anonId', id);
  }
  return id;
}

async function request(path, options = {}) {
  const url = `${API_BASE}${path}`;
  const headers = new Headers(options.headers || {});
  headers.set('Accept', 'application/json');
  if (options.body && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  const token = localStorage.getItem('token');
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const anon = getAnonId();
  if (anon) headers.set('X-Anon-Id', anon);

  const res = await fetch(url, { ...options, headers });
  const text = await res.text();
  let data;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
  } else {
    data = null;
  }
  if (!res.ok) {
    const err = new Error(data?.error?.message || res.statusText || 'API error');
    err.status = res.status;
    err.body = data;
    throw err;
  }
  return data;
}

export const api = {
  login: (email, password) => request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  }),
  register: (name, email, password) => request('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password })
  }),
  me: () => request('/auth/me', { method: 'GET' }),

  getFeed: (params = '') => request(`/feed${params}`),

  getArticleById: (id) => request(`/articles/${id}`, { method: 'GET' }),
  getArticleComments: (id) => request(`/articles/${id}/comments`, { method: 'GET' }),
  addComment: (id, body) => request(`/articles/${id}/comments`, {
    method: 'POST',
    body: JSON.stringify({ body })
  }),
  likeArticle: (id, liked = true) => request(`/articles/${id}/like`, {
    method: 'POST',
    body: JSON.stringify({ liked })
  }),
  viewArticle: (id) => request(`/articles/${id}/view`, {
    method: 'POST'
  }),
  saveArticle: (id, saved = true) => request(`/articles/${id}/save`, {
    method: 'POST',
    body: JSON.stringify({ saved })
  }),
  deleteComment: (id) => request(`/comments/${id}`, {
    method: 'DELETE'
  }),

  getTopics: () => request('/topics', { method: 'GET' }),

  getMyTopics: () => request('/me/topics', { method: 'GET' }),
  updateMyTopics: (topicIds, digestHour) => request('/me/topics', {
    method: 'PUT',
    body: JSON.stringify({ topicIds, digestHour })
  }),
  updateMySettings: (settings) => request('/me/settings', {
    method: 'PATCH',
    body: JSON.stringify(settings)
  }),
};

export default api;
