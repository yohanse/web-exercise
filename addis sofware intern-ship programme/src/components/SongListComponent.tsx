import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect } from "react";
import { fetchSongs } from "../store/features/songs";
import { SongListSuccess } from "./SongListSuccess";
import { SongListLoading } from "./SongListLoading";

function SongListComponent() {
  const songs = useAppSelector((state) => state.song.songs);
  const status = useAppSelector((state) => state.song.status);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSongs());
    }
  }, []);

  if (status === "successed") {
    return <SongListSuccess songs={songs}></SongListSuccess>;
  }
  return <SongListLoading></SongListLoading>;
}

export default SongListComponent;
