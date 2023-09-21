import { useState } from "react";

function Tsx(){
    const [pizza, setPizza] = useState({
        name: "Spicy Pepperoni",
        toppings: ["Mushroom"],
    });

    return <>
        <p>{pizza.toppings[0]}</p>
        <button onClick={() => setPizza({...pizza, toppings: pizza.toppings.map(type => type === "Mushroom"? "chess": type)})}>set toppings</button>
    </>;
}

export default Tsx;