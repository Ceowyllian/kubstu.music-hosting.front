import axios from 'api';

export async function myTracks({ ordering }) {
  return await axios.get(`api/my/tracks/?ordering=${ordering}`);
}
