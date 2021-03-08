import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Switch, Route } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Products from './pages/Products';
import Wishlist from './pages/Wishlist';
import Navigation from './components/Navigation';
import { ReactComponent as Wand } from './assets/magicWand.svg';
import { ReactComponent as Broom } from './assets/broom.svg';
import { ReactComponent as Book } from './assets/magic-book.svg';
import { ReactComponent as Owl } from './assets/owl.svg';
import { ReactComponent as HomeSupplies } from './assets/mortar.svg';
import { ReactComponent as Snacks } from './assets/snack.svg';

function App() {
  const apiServerURL = process.env.REACT_APP_API_SERVER_URL;
  const [products, setProducts] = useLocalStorage('Products', []);

  const [favoriteProducts, setFavoriteProducts] = useLocalStorage(
    'FavoriteProducts',
    []
  );
  const [cart, setCart] = useLocalStorage('Cart', []);

  useEffect(() => {
    fetch(apiServerURL + '/products')
      .then((result) => result.json())
      .then((products) => setProducts(products))
      .catch((error) => console.error(error.message));
  }, []);

  const categoryPlaceholders = {
    'Magical artifacts': <Wand />,
    'Sports equipment': <Broom />,
    Home: <HomeSupplies />,
    'School supplies': <Book />,
    Pets: <Owl />,
    Snacks: <Snacks />,
  };

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

  const addToCart = (product) => {
    console.log('Add to cart');
    fetch(apiServerURL + '/shopping-cart/60427bc46b001b45c5485064', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderItem: {
          productId: product._id,
          quantity: 1,
        },
      }),
    })
      .then((result) => result.json())
      .then((cart) => setCart(cart))
      .catch((error) => console.error(error.message)); //todo: update naming
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
            categoryPlaceholders={categoryPlaceholders}
            setProducts={setProducts}
            addToCart={addToCart}
          />
        </Route>
        <Route path="/wishlist">
          <Wishlist
            favoriteProducts={favoriteProducts}
            updateFavorites={updateFavorites}
            categoryPlaceholders={categoryPlaceholders}
          />
        </Route>
        <Route path="/cart">
          <Cart cartItems={cart.orderItems} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
