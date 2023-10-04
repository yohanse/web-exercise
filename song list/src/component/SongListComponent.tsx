import styled from "styled-components";
import useTracks, { Song } from "../hooks/useTracks";
import { SongCard } from "./SongCard";
import { SongAdd } from "./SongAdd";
import apiClient from "../server/apiClient";

const SongGrid = styled.div`
  overflow-y: scroll;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 861px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1107px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

interface Props {
  singleSong: (song: Song) => void;
}
function SongListComponent({ singleSong }: Props) {
  const { songs, setSongs } = useTracks("/tracks");

  const deleteSong = (id: String) => {
    const temp = [...songs];
    setSongs(songs.filter((song) => song._id !== id));
    apiClient
      .delete(`/trackDelete/${id}`)
      .then((res) => console.log("success"))
      .catch((err) => {
        console.log(err.message);
        setSongs(temp);
      });
  };
  return (
    <SongGrid>
      {songs.map((song) => (
        <SongCard song={song} key={song._id} onDelete={deleteSong} onClick = {singleSong}></SongCard>
      ))}
      <SongAdd></SongAdd>
    </SongGrid>
  );
}

export default SongListComponent;
