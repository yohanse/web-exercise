import styled from "styled-components";
import { SongCardSkeleton } from "./SongCardSkeleton";

const SongGrid = styled.div`
  flex-grow: 1;
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

export const SongListLoading = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <SongGrid>
      {skeletons.map((skeleton) => (
        <SongCardSkeleton key={skeleton}></SongCardSkeleton>
      ))}
    </SongGrid>
  );
};
