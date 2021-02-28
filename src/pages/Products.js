import styled from 'styled-components';
import { Switch, useRouteMatch, Route, NavLink } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import ProductCard from '../components/ProductCard';

export default function Products({
  products,
  addProduct,
  deleteCard,
  addFavoriteProduct,
  favoriteProducts,
}) {
  let { path, url } = useRouteMatch();

  return (
    <Main>
      <h1>Products</h1>
      <Nav>
        <NavLink to={`${url}/all`}>Show all products</NavLink>
        <NavLink to={`${url}/add-product`}>Add a new product</NavLink>
      </Nav>
      <Switch>
        <Route exact path={path}>
          Please select
        </Route>
        <Route path={`${path}/add-product`}>
          <ProductForm onSubmitForm={addProduct} />
        </Route>
        <Route path={`${path}/all`}>
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
        </Route>
      </Switch>
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

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding: 0 0 2rem;
  width: 400px;

  a {
    color: var(--primary-200);
    text-decoration: none;
  }
  a:hover,
  a.active {
    background: var(--secondary-200);
    color: var(--secondary-500);
    text-decoration: underline;
  }
`;
