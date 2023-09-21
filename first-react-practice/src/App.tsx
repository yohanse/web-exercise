import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import CreateTable from "./components/CreateTable/CreateTable";
import { useState } from "react";
import Material from "./components/matrial";



function App() {
  const [data, setData] = useState<Material[]>([
    {
      description: "game",
      amount: 500,
      catagory: "IDK",
    },
    {
      description: "game",
      amount: 500,
      catagory: "IDK",
    },
  ]);
  const addMaterial = (material: Material) => setData([...data, material]);
  const removeMaterial = (material: Material) => {
    console.log(material);
    setData(data.filter(x => x !== material))};
  return (
    <>
      <ExpenseTracker onAdd={addMaterial}/>
      <CreateTable
        onRemove={removeMaterial}
        data={data}
      />
    </>
  );
}
export default App;
