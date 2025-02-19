import React from 'react';

function formatTime(seconds) {
  const hh = Math.floor(seconds / 3600);
  seconds %= 3600;
  const mm = Math.floor(seconds / 60);
  const ss = Math.round(seconds % 60);
  return hh ? `${hh}:${mm}:${ss}` : `${mm}:${ss}`;
}

function TrackDuration({ currentTime, duration, color = 'black' }) {
  const played = formatTime(currentTime);
  const total = formatTime(duration);
  return (
    <span className={`text-nowrap float-end text-${color}`}>
      {played} / {total}
    </span>
  );
}

export default TrackDuration;
