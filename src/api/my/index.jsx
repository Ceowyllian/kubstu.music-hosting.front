import axios from 'api';

export async function myTracks({ ordering }) {
  return await axios.get(`api/my/tracks/?ordering=${ordering}`);
}

export async function myPlaylists(filters = null) {
  filters = filters || {};
  const urlParams = new URLSearchParams(filters).toString();
  return await axios.get(`api/my/playlists/?${urlParams}`);
}
