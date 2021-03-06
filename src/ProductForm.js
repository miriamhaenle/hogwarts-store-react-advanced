import { useState } from 'react';
import styled from 'styled-components/macro';
import Button from './Button';
import Tags from './components/Tags';

export default function ProductForm({ onSubmitForm }) {
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

    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    }

    setProduct({ ...product, [field.name]: value });
  };

  const updateTags = (tag) =>
    setProduct({ ...product, tags: [...product.tags, tag] });

  const isValidProductName = (name) => name.length >= 3;
  const isValidPrice = (price) => price > 0;
  const isValidEmail = (email) => email.includes('@');

  const isValidProductEntry = (product) =>
    isValidProductName(product.name) && isValidPrice(product.price);

  function submitForm(event) {
    event.preventDefault();
    onSubmitForm(product);
    setProduct(initialProduct);

    // if (isValidProductEntry(product)) {
    //   onSubmitForm(product);
    //   setProduct(initialProduct);
    // } else {
    //   console.error('Not a valid product entry' + product);
    // }
  }

  function resetForm() {
    console.log('call me maybe');
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
          <select
            name="currency"
            value={product.currency}
            onChange={handleChange}
          >
            <option value="">Select currency</option>
            <option value="Galleon">Galleon</option>
            <option value="Sickle">Sickle</option>
            <option value="Knut">Knut</option>
          </select>
        </label>
      </Pricing>

      <Category>
        <label htmlFor="category">Category</label>
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          <option value="Magical artifacts">Magical artifacts</option>
          <option value="Sports equipment">Sports equipment</option>
          <option value="Home">Home</option>
          <option value="School supplies">School supplies</option>
          <option value="Pets">Pets</option>
          <option value="Snacks">Snacks</option>
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

      <Tags tags={product.tags} onUpdateTags={updateTags} />
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
        <Button type="reset" text="Cancel" handlerFn={resetForm} />
      </Buttons>
    </Form>
  );
}

const Form = styled.form`
  background: #764248;
  display: grid;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;

  input[type='checkbox'] {
    transform: scale(1.4);
    margin-right: 0.5rem;
  }
  input[type='radio'] {
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
  input,
  select {
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

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;

  button {
    width: 48%;
  }
`;
