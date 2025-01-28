import { useCallback, useEffect, useRef, useState } from 'react';

function useAudio() {
  const audioRef = useRef(new Audio());

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isSrcLoading, setIsSrcLoading] = useState(undefined);
  const [duration, setDuration] = useState(0);

  const play = useCallback(async () => {
    await audioRef.current.play().then(() => setIsPlaying(true));
  }, []);

  const pause = useCallback(() => {
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const mute = useCallback(() => {
    audioRef.current.muted = true;
    setIsMuted(true);
  }, []);

  const unmute = useCallback(() => {
    audioRef.current.muted = false;
    setIsMuted(false);
  }, []);

  const seek = useCallback((time) => {
    const duration = audioRef.current.duration;
    const newTime = time >= 0 ? Math.min(time, duration) : Math.max(time, 0);

    // TODO use a less ugly way to wait for a fragment to load
    while (audioRef.current.currentTime !== newTime) {
      audioRef.current.currentTime = newTime;
    }
    setCurrentTime(newTime);
  }, []);

  const setVolumeCallback = useCallback((volume) => {
    const newVolume = volume >= 0 ? Math.min(volume, 1) : Math.max(volume, 0);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  }, []);

  const setIsLoopCallback = useCallback((loop) => {
    audioRef.current.loop = loop;
    setIsLoop(loop);
  }, []);

  const onLoadedData = () => {
    setIsSrcLoading(false);
    setDuration(audioRef.current.duration);
    setCurrentTime(0);
  };

  const onTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const onEnded = useCallback(async () => {
    pause();
    seek(0);
    if (isLoop) await play();
  }, [isLoop, pause, play, seek]);

  useEffect(() => {
    const element = audioRef.current;

    element.muted = isMuted;
    element.loop = isLoop;
    element.volume = volume;

    setIsSrcLoading(true);

    element.addEventListener('loadeddata', onLoadedData);
    element.addEventListener('timeupdate', onTimeUpdate);
    element.addEventListener('ended', onEnded);

    return () => {
      element.removeEventListener('loadeddata', onLoadedData);
      element.removeEventListener('timeupdate', onTimeUpdate);
      element.removeEventListener('ended', onEnded);
      element.pause();
    };
  }, [isLoop, isMuted, volume, onEnded]);

  const state = {
    isPlaying,
    isMuted,
    isLoop,
    currentTime,
    volume,
    isSrcLoading,
    duration,
  };

  const controls = Object.freeze({
    play,
    pause,
    mute,
    unmute,
    seek,
    setVolume: setVolumeCallback,
    setIsLoop: setIsLoopCallback,
  });

  return [state, controls, audioRef];
}

export default useAudio;
