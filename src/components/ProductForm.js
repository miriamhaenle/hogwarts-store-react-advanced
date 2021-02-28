import { useState } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Button from './Button';
import Tags from './Tags';

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

  const deleteTag = (tagToDelete) => {
    const updatedTags = product.tags.filter((tag) => tag !== tagToDelete);
    setProduct({ ...product, tags: updatedTags });
  };

  const isValidProductName = (name) => name.length >= 3;
  const isValidPrice = (price) => price > 0;
  const hasValidEmailDomain = (email) => {
    const parts = email.split('.');
    return parts[parts.length - 1].length >= 2;
  };
  const isValidEmail = (email) =>
    email.includes('@') && hasValidEmailDomain(email);
  const isValidProductEntry = (product) =>
    isValidProductName(product.name) &&
    isValidPrice(product.price) &&
    isValidEmail(product.supportContact);

  function submitForm(event) {
    if (isValidProductEntry(product)) {
      event.preventDefault();
      onSubmitForm(product);
      setProduct(initialProduct);
    } else {
      alert('Not a valid product entry');
    }
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
            required
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
          required
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

      <Tags
        tags={product.tags}
        onUpdateTags={updateTags}
        onDeleteTag={deleteTag}
        headline="Product tags"
      />
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
        <Button text="Add" color="var(--primary-200)" />
        <Button type="reset" text="Reset" handlerFn={resetForm} />
      </Buttons>
    </Form>
  );
}

ProductForm.propTypes = {
  onSubmitForm: PropTypes.func,
};

const Form = styled.form`
  background: var(--primary-300);
  display: grid;
  gap: 0.5rem;
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
    justify-content: center;
  }

  label {
    margin-right: 0.5rem;
  }

  input {
    margin-top: 0.5rem;
  }
`;

const Support = styled.div`
  display: grid;

  input {
    margin-top: 0.5rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;

  button {
    width: 48%;
  }
`;
