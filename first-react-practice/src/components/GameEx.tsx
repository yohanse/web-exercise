import { useState } from "react"

function Game(){
    const [playerName, setPlayerName] = useState({
        id: 1,
        player: {
            name: "john"
        }
    });
    return <>
    <p>{playerName.player.name}</p>
    <button onClick={() => setPlayerName({...playerName, player:{...playerName.player, name: "Yohanse"}})}> change name</button>
    </>;
}

export default Game;