import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../server/apiClient";

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

interface SongState {
  songs: Song[];
  status: string;
  error: string | null;
}

const initialState: SongState = {
  songs: [],
  status: "idle",
  error: null,
};

export const fetchSongs = createAsyncThunk("song/fetch", async (thunkAPI) => {
  try {
    const response = await apiClient.get("/tracks");
    return response.data;
  } catch (error) {
    // Handle errors here
    throw error;
  }
});

export const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSongs.fulfilled, (state, action) => {
        //data has been returned by AsyncThunk / fetch
        state.songs = action.payload;
        state.status = "successed"
      })
      .addCase(fetchSongs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error as string;
      });
  },
});

export default songSlice.reducer;
