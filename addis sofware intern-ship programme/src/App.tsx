import styled from "styled-components";
import SongListComponent from "./components/SongListComponent";

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
      <SongListComponent></SongListComponent>
  );
};

export default App;
