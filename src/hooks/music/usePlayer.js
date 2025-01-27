import { useAudio } from 'hooks/music';
import React, { createContext, useCallback, useContext, useState } from 'react';

const PlayerContext = createContext(undefined);

export const PlayerProvider = ({ children }) => {
  const [playingTrack, setPlayingTrack] = useState(null);
  const [state, controls, setSource] = useAudio();

  const isPlaying = useCallback(
    ({ id }) => {
      return id === playingTrack?.id;
    },
    [playingTrack],
  );

  const setTrack = useCallback(
    async (track) => {
      setPlayingTrack(track);
      const { sound_file } = track;
      await setSource(sound_file);
    },
    [setSource],
  );

  const removeTrack = useCallback(async () => {
    await setSource(null);
    setPlayingTrack(null);
  }, [setSource]);

  return (
    <PlayerContext.Provider
      value={{
        state,
        controls,
        playingTrack,
        setTrack,
        removeTrack,
        isPlaying,
        source: state.source,
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
