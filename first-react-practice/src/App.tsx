import { useState } from "react";
import ExpenseList from "./expense_tracker/component/ExpenseList";
import ExpenseFilter from "./expense_tracker/component/ExpenseFilter";
import ExpenseForm from "./expense_tracker/component/ExpenseForm";
import Expense from "./expense_tracker/Expense";

function App() {
  const [catagory, setCatagory] = useState("allCatagories");

  const [expenses, setExspenses] = useState([
    {
      id: 0,
      description: "aaa",
      catagory: "utillitie",
      amount: 200,
    },

    {
      id: 1,
      description: "aaa",
      catagory: "utillitie",
      amount: 200,
    },

    {
      id: 2,
      description: "aaa",
      catagory: "utillitie",
      amount: 200,
    },
  ]);

  const addExpense = (expense: Expense) => setExspenses([...expenses, expense]);

  const deleteExpense = (id: number) =>
    setExspenses(expenses.filter((expense) => expense.id !== id));

  const filterExpenses = (catagory: string) => setCatagory(catagory);

  return (
    <>
      <ExpenseForm onAddExpense={addExpense} finalLength={expenses.length}/>
      <ExpenseFilter onSelectCatagory={filterExpenses}/>
      <ExpenseList
        expenses={expenses.filter(
          (expense) =>
            catagory === "allCatagories" || catagory === expense.catagory
        )}
        onDelete={deleteExpense}
      />
    </>
  );
}
export default App;
