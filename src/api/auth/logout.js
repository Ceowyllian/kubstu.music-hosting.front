import axios from 'api';

async function logout() {
  return await axios.post('api/auth/token/logout/');
}

export default logout;
