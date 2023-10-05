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

interface SongState{
    songs: Song[];
    status: string;
    error: string | null;
}

const initialState: SongState = {
  songs: [],
  status: "idle",
  error: null,
}