import axios from '../';
import {
    collectionTrackCreate,
    collectionTrackDelete,
    collectionTrackList,
    collectionTrackSwap,
} from './trackCollection';

export async function albumList() {
    // TODO add request params
    return await axios.get(`api/music/albums/`);
}

export async function albumCreate(body) {
    return await axios.post(`api/music/albums/`, body);
}

export async function albumRetrieve(id) {
    return await axios.get(`api/music/albums/${id}}/`);
}

export async function albumUpdate(id, body) {
    return await axios.patch(`api/music/albums/${id}/`);
}

export async function albumDelete(id) {
    return await axios.delete(`api/music/albums/${id}/`);
}

export async function albumLikeCreate(id) {
    return await axios.post(`api/music/albums/${id}/like/`);
}

export async function albumLikeDelete(id) {
    return await axios.delete(`api/music/album/${id}/like/`);
}

export async function albumTrackList(id) {
    return await collectionTrackList('album', id)
}

export async function albumTrackCreate(id, body) {
    return await collectionTrackCreate('album', id, body);
}

export async function albumTrackDelete(albumId, trackId) {
    return await collectionTrackDelete('album', albumId, trackId);
}

export async function albumTrackSwap(albumId, body) {
    return await collectionTrackSwap('album', albumId, body);
}
