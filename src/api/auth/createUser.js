import axios from '../';

async function createUser(body) {
  return await axios.post('api/auth/users/', body);
}

export default createUser;
