import { useState } from "react";

interface Props{
    maxChar: number;
    children: String;
}

function ExpandableText({ maxChar, children} : Props){
    const [show, setShow] = useState(maxChar);
    return <div>
    <p>{children.slice(0, show)}</p>
    <button onClick={()=>{
        const newState = show === children.length? maxChar: children.length;
        setShow(newState);
    }}>{show === children.length? "Less": "More"}</button>
    </div>
}

export default ExpandableText;