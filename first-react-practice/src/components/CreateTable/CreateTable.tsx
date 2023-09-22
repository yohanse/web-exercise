import { useState } from "react";
import Material from "../matrial";

interface Props {
  data: Material[];
  onRemove: (data: Material) => void;
}

function CreateTable({ data, onRemove }: Props) {
  const [catagory, setCatagory] = useState("allCatagory");
  console.log(catagory);
  let total = 0;
  const Filtered = data.filter((singleData) => catagory === "allCatagory" ||
  catagory === singleData.catagory);
  console.log(Filtered);
  const filterd = Filtered.map((singleData, index) => {
    if (
      catagory === "allCatagory" ||
      catagory === singleData.catagory
    ) {
        console.log(singleData.catagory);
      total += singleData.amount;
      return (
        <tr key={index}>
          <td>{singleData.description}</td>
          <td>{singleData.amount}</td>
          <td>{singleData.catagory}</td>
          <td>
            <button onClick={() => onRemove(singleData)}>Delete</button>
          </td>
        </tr>
      );
    }
  });

  console.log(filterd);
  
  if (filterd.length === 0) {
    return <div></div>;
  }
  return (
    <>
      <select
        name="catagory"
        id="catagory-drop-down"
        onChange={(event) => {
          setCatagory(event.target.value);
        }}
      >
        <option value="allCatagory">All Catagory</option>
        <option value="groceries">Groceries</option>
        <option value="utillities">Utillities</option>
        <option value="entertainment">Entertainment</option>
      </select>
      <table>
        <thead>
          <th>Description</th>
          <th>Amount</th>
          <th>Catagory</th>
          <th></th>
        </thead>
        <tbody>
          {filterd}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th>{total}</th>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default CreateTable;
