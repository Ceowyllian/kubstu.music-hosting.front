import axios from 'api';

async function login({email, password}) {
  return await axios.post('api/auth/token/login/', {email, password});
}

export default login;
