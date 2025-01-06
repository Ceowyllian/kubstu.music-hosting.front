import axios from '../index';

export async function meRetrieve() {
  return await axios.get('api/me/');
}
