import { v4 as uuidv4 } from 'uuid';
import ProductCard from './components/ProductCard';
import ProductForm from './components/ProductForm';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const STORAGE_KEY = 'Products';

  const [products, setProducts] = useLocalStorage(STORAGE_KEY, []);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: uuidv4() }]);
  };

  const deleteCard = (id) => {
    const updatedList = products.filter((product) => product.id !== id);
    setProducts(updatedList);
  };

  return (
    <>
      <ProductForm onSubmitForm={addProduct} />
      {products?.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          onDeleteCard={() => deleteCard(product.id)}
        />
      ))}
    </>
  );
}

export default App;
