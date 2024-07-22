import FormInput from "./FormInput";

function ItemList({ form, setFrom }) {
  const { products } = form;

  const addHandler = () => {
    setFrom({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };

  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setFrom({ ...form, products: newProducts });
  };

  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setFrom({ ...form, products: newProducts });
  };

  return (
    <div className="item-list">
      <p>Purchased Products</p>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          changeHandler={(e) => changeHandler(e, index)}
          deleteHandler={() => deleteHandler(index)}
        />
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
}

export default ItemList;

function ProductItem({ product, changeHandler, deleteHandler }) {
  return (
    <div className="form-input__list">
      <FormInput
        type="text"
        label="Product Name"
        name="name"
        value={product.name}
        onChange={changeHandler}
      />
      <div>
        <FormInput
          type="text"
          label="Price"
          name="price"
          value={product.price}
          onChange={changeHandler}
        />
        <FormInput
          type="number"
          label="Qty"
          name="qty"
          value={product.qty}
          onChange={changeHandler}
        />
      </div>
      <button onClick={deleteHandler}>Remove</button>
    </div>
  );
}
