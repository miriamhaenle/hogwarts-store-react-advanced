import styled from 'styled-components';
import ProductCard from '../components/ProductCard';

export default function Wishlist({ favoriteProducts, updateFavorites }) {
  const isFavorite = (product) =>
    favoriteProducts.some(
      (favoriteProduct) => product.id === favoriteProduct.id
    );

  const removeFavoriteProduct = (product) => {
    if (isFavorite(product)) {
      console.log('fav');
      updateFavorites(
        favoriteProducts.filter(
          (favoriteProduct) => favoriteProduct.id !== product.id
        )
      );
    }
  };

  return (
    <Main>
      <h1>Favorite Products</h1>
      {favoriteProducts.map((product) => (
        <ProductCard
          product={product}
          onAddToFavorites={() => removeFavoriteProduct(product)}
          isFavorite={() => isFavorite(product)}
        />
      ))}
    </Main>
  );
}

const Main = styled.main`
  margin: 0 auto;
  text-align: center;
  h1 {
    padding: 2rem;
  }
`;
