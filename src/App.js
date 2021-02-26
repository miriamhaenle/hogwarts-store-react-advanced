import { v4 as uuidv4 } from 'uuid';
import { Switch, Route } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import Products from './pages/Products';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Navigation from './components/Navigation';

function App() {
  const [products, setProducts] = useLocalStorage('Products', []);

  const [favoriteProducts, setFavoriteProducts] = useLocalStorage(
    'FavoriteProducts',
    []
  );

  const updateFavorites = (products) => setFavoriteProducts([...products]);

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
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products
            products={products}
            favoriteProducts={favoriteProducts}
            addProduct={addProduct}
            deleteCard={deleteCard}
            addFavoriteProduct={addFavoriteProduct}
          />
        </Route>
        <Route path="/wishlist">
          <Wishlist
            favoriteProducts={favoriteProducts}
            updateFavorites={updateFavorites}
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;
