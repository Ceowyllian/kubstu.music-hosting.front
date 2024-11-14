import axios from '../';
import {
  collectionTrackCreate,
  collectionTrackDelete,
  collectionTrackList,
  collectionTrackSwap,
} from './trackCollection';

export async function playlistList() {
  // TODO add request params
  return await axios.get(`api/music/playlists/`);
}

export async function playlistCreate(body) {
  return await axios.post(`api/music/playlists/`, body);
}

export async function playlistRetrieve(id) {
  return await axios.get(`api/music/playlists/${id}}/`);
}

export async function playlistUpdate(id, body) {
  return await axios.patch(`api/music/playlists/${id}/`);
}

export async function playlistDelete(id) {
  return await axios.delete(`api/music/playlists/${id}/`);
}

export async function playlistTrackList(id) {
  return await collectionTrackList('playlist', id);
}

export async function playlistTrackCreate(id, body) {
  return await collectionTrackCreate('playlist', id, body);
}

export async function playlistTrackDelete(playlistId, trackId) {
  return await collectionTrackDelete('playlist', playlistId, trackId);
}

export async function playlistTrackSwap(playlistId, body) {
  return await collectionTrackSwap('playlist', playlistId, body);
}
