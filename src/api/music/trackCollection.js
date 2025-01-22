import axios from 'api';

export async function collectionTrackList(collectionName, id) {
  return await axios.get(`api/music/${collectionName}/${id}/tracks/`);
}

export async function collectionTrackCreate(collectionName, id, body) {
  return await axios.post(`api/music/${collectionName}/${id}/tracks/`, body);
}

export async function collectionTrackDelete(
  collectionName,
  collectionId,
  trackId,
) {
  const url = `api/music/${collectionName}/${collectionId}/tracks/${trackId}/`;
  return await axios.delete(url);
}

export async function collectionTrackSwap(collectionName, id, body) {
  return await axios.post(`api/music/${collectionName}/${id}/`, body);
}
