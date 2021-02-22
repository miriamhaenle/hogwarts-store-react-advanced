import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProductForm from './ProductForm';
import ProductCard from './ProductCard';

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) =>
    setProducts([...products, { ...product, id: uuidv4() }]);
  console.log(products);
  return (
    <div>
      <ProductForm submitFunction={addProduct} />
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default App;
