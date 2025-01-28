import { useAudio } from 'hooks/music';
import React, { createContext, useCallback, useContext, useState } from 'react';

const PlayerContext = createContext(undefined);

export const PlayerProvider = ({ children }) => {
  const [playerTrack, setPlayerTrack] = useState(null);
  const [state, controls, audioRef] = useAudio();

  const isPlaying = useCallback(
    ({ id }) => {
      return id === playerTrack?.id;
    },
    [playerTrack],
  );

  const setTrack = async (track) => {
    setPlayerTrack(track);
    audioRef.current.src = track.sound_file;
  };

  return (
    <PlayerContext.Provider
      value={{
        state,
        controls,
        isPlaying,
        playerTrack,
        setTrack,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayerContext used within PlayerProvider');
  }
  return context;
};
