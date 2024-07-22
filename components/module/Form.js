import ItemList from "./ItemList";

function Form({ form, setForm }) {
  return (
    <div>
      <ItemList form={form} setFrom={setForm} />
    </div>
  );
}

export default Form;
