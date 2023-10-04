import { Song } from "../hooks/useTracks";
import styled from "styled-components";

interface Props {
  song: Song;
}

const Flex = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: #121212;
  border-radius: 10px;
  gap: 10px;
`;

const SongArtist = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  color: #a4a4a4;
`;

const SongName = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  color: #ffffff;
  font-size: 1.2em;
`;

const ReleaseDate = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  color: #a4a4a4;
`;

const Image = styled.img`
  border-radius: 10px;
`;

export const SongDetail = ({ song }: Props) => {
  return (
    <Flex>
      <Image src={song.image_url} alt="logo" height="300px" />
      <SongName>{song.name}</SongName>
      <SongArtist>{song.artist.name}</SongArtist>
      <ReleaseDate>{song.release_date}</ReleaseDate>
    </Flex>
  );
};
