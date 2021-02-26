import { v4 as uuidv4 } from 'uuid';
import ProductCard from './components/ProductCard';
import ProductForm from './components/ProductForm';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [products, setProducts] = useLocalStorage('Products', []);

  const [favoriteProducts, setFavoriteProducts] = useLocalStorage(
    'FavoriteProducts',
    []
  );

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: uuidv4() }]);
  };

  const deleteCard = (id) => {
    const updatedList = products.filter((product) => product.id !== id);
    setProducts(updatedList);
  };

  const addFavoriteProduct = (product) => {
    if (
      favoriteProducts.some(
        (favoriteProduct) => product.id === favoriteProduct.id
      )
    ) {
      setFavoriteProducts(
        favoriteProducts.filter(
          (favoriteProduct) => favoriteProduct.id !== product.id
        )
      );
    } else {
      setFavoriteProducts([...favoriteProducts, product]);
    }
  };

  return (
    <>
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
    </>
  );
}

export default App;
