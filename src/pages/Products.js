import { useState } from 'react';
import styled from 'styled-components';
import ProductForm from '../components/ProductForm';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

export default function Products({
  products,
  addProduct,
  deleteCard,
  addFavoriteProduct,
  favoriteProducts,
}) {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  return (
    <Main>
      <h1>Products</h1>
      <Button text="Add a new product" handlerFn={toggleForm} />
      {showForm && <ProductForm onSubmitForm={addProduct} />}
      {products?.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          onDeleteCard={() => deleteCard(product.id)}
          onAddToFavorites={() => addFavoriteProduct(product)}
          isFavorite={favoriteProducts.some(
            (favoriteProduct) => product.id === favoriteProduct.id
          )}
        />
      ))}
    </Main>
  );
}

const Main = styled.main`
  margin: 0 auto;
  text-align: center;
`;
