import { API_URL } from 'shared/constants';

export function streamAudio(filename) {
  const f = filename.replace(API_URL, '').replace('media/tracks/', '');
  return `${API_URL}api/stream_audio/${f}/`;
}
