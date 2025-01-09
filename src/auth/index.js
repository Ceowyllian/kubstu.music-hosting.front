export function setUser({
  id,
  user_id,
  username,
  avatar,
  summary,
  public_email,
}) {
  localStorage.setItem('person_id', id);
  localStorage.setItem('user_id', user_id);
  localStorage.setItem('username', username);
  localStorage.setItem('avatar', avatar);
  localStorage.setItem('summary', summary);
  localStorage.setItem('public_email', public_email);
}

export function removeUser() {
  localStorage.removeItem('person_id');
  localStorage.removeItem('user_id');
  localStorage.removeItem('username');
  localStorage.removeItem('avatar');
  localStorage.removeItem('summary');
  localStorage.removeItem('public_email');
}

export function getUser() {
  return {
    person_id: localStorage.getItem('person_id'),
    user_id: localStorage.getItem('user_id'),
    username: localStorage.getItem('username'),
    avatar: localStorage.getItem('avatar'),
    summary: localStorage.getItem('summary'),
    public_email: localStorage.getItem('public_email'),
  };
}

export function isUserAuthenticated() {
  const user_id = localStorage.getItem('user_id');
  return user_id != null;
}
