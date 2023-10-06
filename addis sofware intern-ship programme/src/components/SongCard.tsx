import { MdDeleteOutline } from "react-icons/md";
import styled from "styled-components";
import { Song } from "../store/features/songs";
import { useAppDispatch } from "../store/store";
import { showDetailSong } from "../store/features/songs";
import { deleteSong } from "../store/features/songs";

interface Props {
  song: Song;
  index: number;
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

export const SongCard = ({ song, index }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <Flex onClick={() => dispatch(showDetailSong({id: index}))}>
      <Image src={song.image_url} alt="Logo" />
      <HFlex>
        <VFlex>
          <SongName>{song.name}</SongName>
          <SongArtist>{song.artist.name}</SongArtist>
        </VFlex>
        <Button onClick={(event) => {
          event.stopPropagation();
          dispatch(deleteSong(song._id))}}>
          <MdDeleteOutline color="#a4a4a4" size="25" />
        </Button>
      </HFlex>
    </Flex>
  );
};
