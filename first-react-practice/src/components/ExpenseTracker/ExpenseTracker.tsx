import style from "./ExpenseTracker.module.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Material from "../matrial";

const schema = z.object({
  description: z.string().min(3),
  amount: z.number(),
  catagory: z.enum(["entertainment", "utillities", "groceries"]),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onAdd: (material: Material) => void;
}

function ExpenseTracker({ onAdd }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form id={style.wrapper}>
      <div>
        <label htmlFor="description">Description</label>
        <input {...register("description")} type="text" id="description" />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          id="amount"
        />
        {errors.amount && <p>{errors.amount.message}</p>}
      </div>
      <div>
        <label htmlFor="catagory-drop-down">Catagory</label>

        <select
          {...register("catagory")}
          name="catagory"
          id="catagory-drop-down"
        >
          <option></option>
          <option value="groceries">Groceries</option>
          <option value="utillities">Utillities</option>
          <option value="entertainment">Entertainment</option>
        </select>
        {errors.catagory && <p>{errors.catagory.message}</p>}
      </div>
      <button
        onClick={handleSubmit((data) => {
          onAdd(data);
        })}
      >
        submit
      </button>
    </form>
  );
}

export default ExpenseTracker;
