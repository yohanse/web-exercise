import Material from "../matrial";

interface Props {
  data: Material[];
  onRemove: (data: Material) => void;
}

function CreateTable({ data, onRemove }: Props) {
    let total = 0;
    if (data.length === 0){
        return <div></div>;
    }
  return <table>
        <thead>
            <th>Description</th>
            <th>Amount</th>
            <th>Catagory</th>
            <th></th>
        </thead>
        <tbody>
        {data.map((singleData, index) =>  {
            total += singleData.amount;
            return <tr key={index}>
                <td>{singleData.description}</td>
                <td>{singleData.amount}</td>
                <td>{singleData.catagory}</td>
                <td><button onClick={() => onRemove(singleData)}>Delete</button></td>
            </tr>}
        )}
        </tbody>
        <tfoot>
            <tr>
                <th>Total</th>
                <th>{total}</th>
            </tr>
        </tfoot>
  </table>;
}

export default CreateTable;
