import styled from 'styled-components';
import ProductCard from '../components/ProductCard';

export default function Wishlist({
  favoriteProducts,
  updateFavorites,
  categoryPlaceholders,
}) {
  const isFavorite = (product) =>
    favoriteProducts.some(
      (favoriteProduct) => product.id === favoriteProduct.id
    );

  const removeFavoriteProduct = (product) => {
    if (isFavorite(product)) {
      updateFavorites(
        favoriteProducts.filter(
          (favoriteProduct) => favoriteProduct._id !== product._id
        )
      );
    }
  };

  return (
    <Main>
      <h1>Favorite Products</h1>
      <Wrapper>
        {favoriteProducts.map((product, index) => (
          <ProductCard
            key={product._id + index}
            product={product}
            onAddToFavorites={() => removeFavoriteProduct(product)}
            isFavorite={() => isFavorite(product)}
            placeholderImage={categoryPlaceholders}
          />
        ))}
      </Wrapper>
    </Main>
  );
}

const Main = styled.main`
  margin: 0 auto;

  h1 {
    padding: 2rem;
    text-align: center;
  }
`;

const Wrapper = styled.section`
  display: grid;

  place-items: center;
  gap: 1rem;
`;
