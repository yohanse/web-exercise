import styled from "styled-components";
import { TbMusicPlus } from "react-icons/tb";
import { useAppDispatch } from "../store/store";
import { showCreateForm } from "../store/features/songs";

const SongAddCard = styled.button`
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SongAdd = () => {
  const dispatch = useAppDispatch();
  return (
    <SongAddCard onClick={() => dispatch(showCreateForm())}>
      <TbMusicPlus color="#181818" size="100"/>
    </SongAddCard>
  );
};
