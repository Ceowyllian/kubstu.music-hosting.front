import { lazy } from 'react';

export const Home = lazy(() => import('pages/home'));
export const Login = lazy(() => import('pages/login'));
export const Registration = lazy(() => import('pages/registration'));
export const Me = lazy(() => import('pages/me'));
export const SearchResults = lazy(() => import('pages/search-results'));
export const UploadTrack = lazy(() => import('pages/upload-track'));
export const MyTracks = lazy(() => import('pages/my-tracks'));
export const MyPlaylists = lazy(() => import('pages/my-playlists'));
