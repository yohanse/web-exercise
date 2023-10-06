import styled from "styled-components";
import { SongCard } from "./SongCard";
import { SongAdd } from "./SongAdd";
import { Song } from "../store/features/songs";

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
  songs: Song[];
}

export const SongListSuccess = ({ songs }: Props) => {
  return (
    <SongGrid>
      {songs.map((song, index) => (
        <SongCard song={song} key={song._id} index = {index}></SongCard>
      ))}
      <SongAdd></SongAdd>
    </SongGrid>
  );
};
