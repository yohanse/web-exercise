import { useEffect, useState } from "react";
import apiClient from "../server/apiClient";

export interface Artist {
  name: string;
  popularity: number;
  image_url: string;
  followers: number;
  _id: string;
}

export interface Song {
  _id: string;
  name: string;
  duration_ms: number;
  image_url: string;
  release_date: string;
  artist: Artist;
}

const useTracks = (endpoint: string) => {
  const [songs, setSongs] = useState<Song[]>([]);
  useEffect(() => {
    apiClient
      .get<Song[]>(endpoint)
      .then((res) => {
        setSongs(res.data)})
      .catch((err) => {
        console.log(err.message)});
  }, []);
  return {songs, setSongs};
};

export default useTracks;
