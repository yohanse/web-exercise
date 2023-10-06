import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  singleSong: null | Song;
  status: string;
  error: string | null;
}

interface CreateSong{
  artistName: string;
  songName: string;
  imageUrl: string;
}

const initialState: SongState = {
  songs: [],
  singleSong: null,
  status: "idle",
  error: null,
};

export const fetchSongs = createAsyncThunk("song/fetch", async () => {
  try {
    const response = await apiClient.get("/tracks");
    return response.data;
  } catch (error) {
    // Handle errors here
    throw error;
  }
});

export const createSong = createAsyncThunk("create/song", async (data: CreateSong) => {
  try {
    console.log(data);
    const response = await apiClient.post("/tracks", data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const deleteSong = createAsyncThunk(
  "song/delete",
  async (id: string) => {
    try {
      await apiClient.delete(`/trackDelete/${id}`);
      return id;
    } catch (error) {
      throw error;
    }
  }
);

export const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    showDetailSong: (state, action: PayloadAction<{ id: number }>) => {
      state.singleSong = state.songs[action.payload.id];
    },

    showCreateForm: (state) => {
      state.singleSong = null;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchSongs.fulfilled, (state, action) => {
        //data has been returned by AsyncThunk / fetch
        state.songs = action.payload;
        state.status = "successed";
      })
      .addCase(fetchSongs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error as string;
      });

    builder.addCase(deleteSong.fulfilled, (state, action) => {
      if (
        state.singleSong !== null &&
        state.singleSong._id === action.payload
      ) {
        state.singleSong = null;
      }
      state.songs = state.songs.filter((song) => song._id !== action.payload);
    });

    builder.addCase(createSong.fulfilled, (state, action) => {
      console.log("state");
      console.log(action.payload);
      state.songs = [action.payload, ...state.songs];
    })
  },
});

export default songSlice.reducer;
export const { showDetailSong, showCreateForm } = songSlice.actions;
