import { useState } from 'react';
import styled from 'styled-components/macro';

export default function ProductForm({ submitFunction }) {
  const initialProduct = {
    name: '',
    price: '',
    currency: '',
    category: '',
    packageSize: '',
    supportContact: '',
    tags: [],
    onSale: false,
  };
  const [product, setProduct] = useState(initialProduct);

  const handleChange = (event) => {
    const field = event.target;
    let value = event.target.value;
    console.log(event.target.type);
    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    }

    setProduct({ ...product, [field.name]: value });
  };

  function submitForm(event) {
    event.preventDefault();
    submitFunction(product);
    setProduct(initialProduct);
  }

  return (
    <Form onSubmit={submitForm}>
      <h2>Add new Product</h2>
      <label htmlFor="name">Product Name</label>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
      />
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
        <label htmlFor="currency">Currency</label>
        <input
          type="text"
          name="currency"
          value={product.currency}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
        >
          <option value="">--Please select a category--</option>
          <option value="sports">Sports</option>
          <option value="home">Home</option>
          <option value="school">School supplies</option>
          <option value="wear">Wear</option>
          <option value="sweets">Sweets</option>
        </select>
      </div>
      <div>
        Package size
        <label>
          <input
            type="radio"
            name="packageSize"
            value="S"
            checked={product.packageSize === 'S'}
            onChange={handleChange}
          />
          S
        </label>
        <label>
          <input
            type="radio"
            name="packageSize"
            value="M"
            checked={product.packageSize === 'M'}
            onChange={handleChange}
          />
          M
        </label>
        <label>
          <input
            type="radio"
            name="packageSize"
            value="L"
            checked={product.packageSize === 'L'}
            onChange={handleChange}
          />
          L
        </label>
      </div>
      <div>
        <label htmlFor="name">Support contact(email)</label>
        <input
          type="email"
          name="email"
          value={product.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="tags">Product Tags</label>
        <input
          type="text"
          name="tags"
          value={product.tags}
          onChange={handleChange}
        />
      </div>
      <label>
        <input
          type="checkbox"
          name="onSale"
          checked={product.onSale}
          onChange={handleChange}
        />
        On sale
      </label>
      <button>Add</button>
      <button type="reset">Cancel</button>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
`;
