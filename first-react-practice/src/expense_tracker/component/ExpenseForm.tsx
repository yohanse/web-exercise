import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Expense from "../Expense";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "description should be at least 3" })
    .max(40, { message: "description should be at amost 40" }),
  amount: z
    .number({ invalid_type_error: "please insert number" })
    .min(0, { message: "negative numbers are not allowable" })
    .max(100_000),
  catagory: z.enum(["entertainment", "grocieries", "utillitie"], {
    errorMap: () => ({ message: "Catagory is required" }),
  }),
});

interface Props {
    onAddExpense: (expense: Expense) => void;
    finalLength: number;
}

type ExpenseFromData = z.infer<typeof schema>;

function ExpenseForm({onAddExpense, finalLength}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFromData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onAddExpense({...data, id: finalLength});
        reset();
      })}
    >
      <div>
        <label htmlFor="description">Description</label>
        <input {...register("description")} id="description" type="text" />
        {errors.description && <p color="red">{errors.description.message}</p>}
      </div>

      <div>
        <label htmlFor="amount">Amount</label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
        />
        {errors.amount && <p color="red">{errors.amount.message}</p>}
      </div>

      <div>
        <label htmlFor="catagory">Catagory</label>
        <select {...register("catagory")}>
          <option value=""></option>
          <option value="utillitie"> Utillitie </option>
          <option value="grocieries"> Grocieries </option>
          <option value="entertainment"> Entertainment </option>
        </select>
        {errors.catagory && <p color="red">{errors.catagory.message}</p>}
      </div>
      <button> ADD </button>
    </form>
  );
}

export default ExpenseForm;
