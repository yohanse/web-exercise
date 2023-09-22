interface Props{
    onSelectCatagory: (catagory: string) => void;
}


function ExpenseFilter({ onSelectCatagory }: Props){
    return <select id="filter"onChange={(event) => onSelectCatagory(event.target.value)}>
        <option value="allCatagories"> All Catagories</option>
        <option value="utillitie"> Utillitie </option>
        <option value="grocieries"> Grocieries </option>
        <option value="entertainment"> Entertainment </option>
    </select>
}

export default ExpenseFilter;