import styled from "styled-components";
import { Song } from "../hooks/useTracks";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
  song: Song;
  onDelete: (id: string) => void;
  onClick: (song: Song) => void;
}

const Flex = styled.button`
  outline: none;
  border: none;
  background-color: #181818;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 8px;
  border-radius: 12px;
`;

const HFlex = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const VFlex = styled.div`
gap: 2px;
  display: flex;
  flex-direction: column;
  align-items: start;
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

const Image = styled.img`
  align-self: center;
  height: 150px;
  border-radius: 12px;
  width: 100%;
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  border: none;
`;

export const SongCard = ({ song, onDelete, onClick }: Props) => {
  return (
    <Flex onClick={() => onClick(song)}>
      <Image src={song.image_url} alt="Logo" />

      <HFlex>
        <VFlex>
          <SongName>{song.name}</SongName>
          <SongArtist>{song.artist.name}</SongArtist>
        </VFlex>
        <Button
          onClick={(event) => {
            onDelete(song._id);
          }}
        >
          <MdDeleteOutline color="#a4a4a4" size="25" />
        </Button>
      </HFlex>
    </Flex>
  );
};
