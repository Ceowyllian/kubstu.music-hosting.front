import axios from 'api';

export async function commentUpdate(id, body) {
  return await axios.patch(`api/comments/${id}/`, body);
}

export async function commentDelete(id) {
  return await axios.delete(`api/comments/${id}/`);
}

export async function trackCommentCreate(track_id, body) {
  return await axios.post(`api/music/tracks/${track_id}/comments/`, body);
}

export async function trackCommentList(id) {
  return await axios.get(`api/music/tracks/${id}/comments/`);
}

export async function albumCommentCreate(id, body) {
  return await axios.post(`api/music/tracks/${id}/comments/`, body);
}

export async function albumCommentList(id) {
  return await axios.get(`api/music/albums/${id}/comments/`);
}

export async function playlistCommentCreate(id, body) {
  return await axios.post(`api/music/playlists/${id}/comments/`, body);
}

export async function playlistCommentList(id) {
  return await axios.get(`api/music/playlists/${id}/comments/`);
}
