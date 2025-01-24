import axios from 'api';

export async function meRetrieve() {
  return await axios.get('api/me/');
}

export async function meUpdate({summary, public_email}) {
  return await axios.patch('api/me/', { summary, public_email });
}

export async function meRemoveAvatar() {
  return await axios.patch('api/me/', { avatar: null });
}

export async function meSetAvatar({avatar, extension}) {
  const formData = new FormData();
  formData.append('avatar', avatar, `avatar.${extension}`);
  return await axios.patch('api/me/', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}
