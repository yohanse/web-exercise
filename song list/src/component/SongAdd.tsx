import styled from "styled-components";
import { TbMusicPlus } from "react-icons/tb";

const SongAddCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SongAdd = () => {
  return (
    <SongAddCard>
      <TbMusicPlus color="#181818" size="100"/>
    </SongAddCard>
  );
};
