function Form() {
  return (
    <form id="wrapper">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="age">age</label>
        <input type="number" id="age" />
      </div>
      <button type="submit">submit</button>
    </form>
  );
}

export default Form;
