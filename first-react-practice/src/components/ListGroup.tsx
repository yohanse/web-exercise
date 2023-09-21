import { useState } from "react";

interface Props{
    items: string[];
    heading: String;
}

function ListGroup({items, heading}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul>
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
            className={selectedIndex === index ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
