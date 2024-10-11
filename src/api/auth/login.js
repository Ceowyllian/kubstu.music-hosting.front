import axios from '../';

async function login(body) {
  return await axios.post('api/auth/token/login/', body).then(({ data }) => data);
}

export default login;
