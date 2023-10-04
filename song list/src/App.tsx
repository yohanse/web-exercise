import styled from "styled-components";
import SongListComponent from "./component/SongListComponent";
import { SongDetail } from "./component/SongDetail";
import { useState } from "react";
import { Song } from "./hooks/useTracks";
import { SongCreateForm } from "./component/songCreateForm";

const Flex = styled.div`
  display: flex;
  gap: 20px;
  height: 100vh;
  @media screen and (max-width:538px) {
    flex-direction: column-reverse;
  }
`;

const App = () => {
  const [songDetail, setSongDetail] = useState<Song>({
    _id: "6519e22f29dc5ee6485ff638",
    name: "ETA",
    duration_ms: 151373,
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2730744690248ef3ba7b776ea7b",
    release_date: "2023-07-21",
    artist: {
      name: "NewJeans",
      popularity: 84,
      image_url:
        "https://i.scdn.co/image/ab6761610000e5eb5da361915b1fa48895d4f23f",
      followers: 5446545,
      _id: "6519e22f29dc5ee6485ff639",
    },
  });

  const changeDetail = (song: Song) => {
    setSongDetail(song);
  };
  return (
    <Flex>
      <SongListComponent singleSong = {changeDetail}></SongListComponent>
      {/* <SongDetail
        song={songDetail}
      ></SongDetail> */}
      <SongCreateForm/>
    </Flex>
  );
};

export default App;
