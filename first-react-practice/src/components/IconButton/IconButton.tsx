import { useState } from "react";
import {AiFillHeart} from "react-icons/Ai";
import style from "./IconButton.module.css";

function IconButton(){
    const [click, setClick] = useState(false);
    return <div>
        <AiFillHeart size="60" color={click? "red": ""} onClick={() => {setClick(!click);
        console.log("clicked")}}/>
    </div>;
}

export default IconButton;