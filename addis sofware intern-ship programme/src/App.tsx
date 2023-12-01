import styled from "styled-components";
import SongListComponent from "./components/SongListComponent";
import { SongDetail } from "./components/SongDetail";
import PlaySong from "./components/PlaySong";

const Flex = styled.div`
  display: flex;
  gap: 20px;
  height: 100vh;
  @media screen and (max-width: 538px) {
    flex-direction: column-reverse;
  }
`;

const App = () => {
  return (

      <PlaySong></PlaySong>
      // <Flex>
      //   <SongListComponent></SongListComponent>
      //   <SongDetail></SongDetail>
      // </Flex>
  );
};

export default App;
