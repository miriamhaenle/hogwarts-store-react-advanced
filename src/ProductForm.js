import { useState } from 'react';
import styled from 'styled-components/macro';

import Button from './Button';

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
      <Pricing>
        <label>
          Price
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Currency
          <input
            type="text"
            name="currency"
            value={product.currency}
            onChange={handleChange}
          />
        </label>
      </Pricing>

      <Category>
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
      </Category>

      <PackageSize>
        Package size
        <div>
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
      </PackageSize>

      <Support>
        <label htmlFor="supportContact">Support contact(email)</label>
        <input
          type="email"
          name="supportContact"
          value={product.email}
          onChange={handleChange}
        />
      </Support>

      <Tags>
        <label htmlFor="tags">Product Tags</label>
        <input
          type="text"
          name="tags"
          value={product.tags}
          onChange={handleChange}
        />
      </Tags>
      <label>
        <input
          type="checkbox"
          name="onSale"
          checked={product.onSale}
          onChange={handleChange}
        />
        On sale
      </label>
      <Buttons>
        <Button text="Add" color="#DDA3B2" />
        <Button type="reset" text="Cancel" />
      </Buttons>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;

  input[type='checkbox'] {
    transform: scale(1.4);
    margin-right: 0.5rem;
  }
`;

const Pricing = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  label {
    display: flex;
    flex-direction: column;
    width: 95%;
  }
  input {
    margin-top: 1rem;
  }
`;

const Category = styled.div`
  display: grid;
  gap: 1rem;
`;

const PackageSize = styled.section`
  div {
    display: flex;
  }

  label {
    margin-right: 0.5rem;
  }

  input {
    margin-top: 1rem;
  }
`;

const Support = styled.div`
  display: grid;

  input {
    margin-top: 1rem;
  }
`;

const Tags = styled.div`
  display: grid;
  input {
    margin-top: 1rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;

  button {
    width: 48%;
  }
`;
