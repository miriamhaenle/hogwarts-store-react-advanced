import ProductForm from '../components/ProductForm';
import ProductCard from '../components/ProductCard';

export default function Products() {
  return;
  <>
    <h1>Products</h1>;
    <ProductForm onSubmitForm={addProduct} />
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
  </>;
}
