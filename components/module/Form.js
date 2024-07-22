import { inputs } from "../../constant/inputs";
import FormInput from "./FormInput";
import ItemList from "./ItemList";

function Form({ form, setForm }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <FormInput
          key={index}
          name={input.name}
          label={input.label}
          type={input.type}
          value={form[input.name]}
          onChange={changeHandler}
        />
      ))}

      <ItemList form={form} setFrom={setForm} />
    </div>
  );
}

export default Form;
