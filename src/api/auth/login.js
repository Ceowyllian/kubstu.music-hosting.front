import axios from 'api';

async function login({login, password}) {
  const body = {
    email: login,
    password: password,
  };
  return await axios.post('api/auth/token/login/', body);
}

export default login;
