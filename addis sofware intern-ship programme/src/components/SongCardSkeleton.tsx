import { MdDeleteOutline } from "react-icons/md";
import styled from "styled-components";

const Flex = styled.div`
  background-color: #181818;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 8px;
  border-radius: 12px;
`;

const ImagePlaceHolder = styled.div`
  align-self: center;
  height: 150px;
  border-radius: 12px;
  width: 100%;
  background-color: grey;
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

const Name = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  background-color: grey;
  height: 1em;
  width: 70px;
`;

export const SongCardSkeleton = () => {
  return (
    <Flex>
      <ImagePlaceHolder />
      <HFlex>
        <VFlex>
          <Name />
          <Name />
        </VFlex>
        <MdDeleteOutline color="#a4a4a4" size="25" />
      </HFlex>
    </Flex>
  );
};
