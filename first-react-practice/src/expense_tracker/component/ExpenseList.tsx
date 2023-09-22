import Expense from "../Expense";

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

function ExpenseList({ expenses, onDelete }: Props) {
  if (expenses.length == 0) {
    return <div></div>;
  }
  var total = 0;
  return (
    <table>
      <thead>
        <tr>
          <td>Description</td>
          <td>Amount</td>
          <td>Catagory</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => {
          total += expense.amount;
          return (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.catagory}</td>
              <td>
                <button onClick = {() => onDelete(expense.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{total}</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default ExpenseList;
