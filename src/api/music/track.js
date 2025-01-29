import axios from 'api';

export async function trackList(params) {
  return await axios.get(`api/music/tracks/?${params}`);
}

export async function trackCreate(body) {
  const formData = new FormData();
  Object.entries(body).map(([k, v]) => formData.append(k, v));
  return await axios.post(`api/music/tracks/`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}

export async function trackRetrieve(id) {
  return await axios.get(`api/music/tracks/${id}`);
}

export async function trackUpdate(id, body) {
  return await axios.patch(`api/music/tracks/${id}`, body);
}

export async function trackDelete(id) {
  return await axios.delete(`api/music/tracks/${id}`);
}
