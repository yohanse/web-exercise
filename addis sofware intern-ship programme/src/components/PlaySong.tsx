import { useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000/");

const PlaySong = () => {
  const [isPlaying, setPlaying] = useState(false);

  const clickSong = () => {
    console.log("yohanse");
    socket.emit("play", {play: !isPlaying});

  }
  return (
    <button
      onClick={() => {
        console.log("not understand");
        clickSong();
        setPlaying(!isPlaying);
      }}
    >
      {isPlaying ? "Pause" : "Play"}
    </button>
  );
};

export default PlaySong;
