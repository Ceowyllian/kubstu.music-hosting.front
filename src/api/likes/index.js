import axios from 'api';

export async function trackLikeCreate(id) {
  return await axios.post(`api/music/tracks/${id}/like/`);
}

export async function trackLikeDelete(id) {
  return await axios.delete(`api/music/tracks/${id}/like/`);
}

export async function albumLikeCreate(id) {
  return await axios.post(`api/music/albums/${id}/like/`);
}

export async function albumLikeDelete(id) {
  return await axios.delete(`api/music/album/${id}/like/`);
}

export async function playlistLikeCreate(id) {
  return await axios.post(`api/music/playlists/${id}/like/`);
}

export async function playlistLikeDelete(id) {
  return await axios.delete(`api/music/playlist/${id}/like/`);
}
