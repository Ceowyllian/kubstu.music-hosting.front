import axios from '../';

export async function trackList() {
    // TODO add request params
    return await axios.get(`api/music/tracks/`);
}

export async function trackCreate(body) {
    return await axios.post(`api/music/tracks/`, body);
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

export async function trackLikeCreate(id) {
    return await axios.post(`api/music/tracks/${id}/like/`);
}

export async function trackLikeDelete(id) {
    return await axios.delete(`api/music/tracks/${id}/like/`);
}
