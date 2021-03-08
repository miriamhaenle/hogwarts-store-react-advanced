import { useState, useEffect } from 'react';
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
  categoryPlaceholders,
  addToCart,
}) {
  let { path, url } = useRouteMatch();
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [categories, setCategories] = useState([]);

  const uniqueCategories = (products) => {
    const set = new Set(products.map((product) => product.category));
    const categories = Array.from(set);
    return categories.map((category) => ({
      name: category,
      isActive: false,
    }));
  };

  useEffect(() => {
    setCategories(uniqueCategories(products));
  }, [products]);

  const filterByCategory = (categoryToUpdate) => {
    setDisplayedProducts(
      products.filter((product) => product.category === categoryToUpdate)
    );
    setCategories(
      categories.map((category) => {
        if (category.name === categoryToUpdate) {
          category.isActive = true;
        } else {
          category.isActive = false;
        }
        return category;
      })
    );
  };

  const resetCategories = (products) => {
    setDisplayedProducts(products);
    setCategories(uniqueCategories(products));
  };

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
          <Categories>
            {categories?.map((category, index) => (
              <Category
                key={index}
                onClick={() => filterByCategory(category.name)}
                active={category.isActive}
              >
                {categoryPlaceholders[category.name]}
              </Category>
            ))}
            <Category onClick={() => resetCategories(products)}>Reset</Category>
          </Categories>
          <Wrapper>
            {displayedProducts?.map((product) => (
              <ProductCard
                product={product}
                key={product._id}
                onDeleteCard={() => deleteCard(product.id)}
                onAddToFavorites={() => addFavoriteProduct(product)}
                isFavorite={favoriteProducts.some(
                  (favoriteProduct) => product._id === favoriteProduct.id
                )}
                placeholderImage={categoryPlaceholders}
                addToCart={() => addToCart(product)}
              />
            ))}
          </Wrapper>
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

const Wrapper = styled.section`
  display: grid;

  place-items: center;
  gap: 1rem;
`;

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  place-items: center;
  margin: 0.5rem auto 1rem;
  max-width: 400px;
  padding: 0.25rem;
`;

const Category = styled.div`
  background: ${(props) =>
    props.active ? 'var(--secondary-300)' : 'var(--grey-100)'};
  color: var(--grey-500);
  fill: var(--grey-500);
  font-size: 1rem;
  border-radius: 0.5rem;
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  svg {
    width: 70%;
    height: 70%;
    fill: ${(props) => props.active && 'var(--secondary-500)'};
  }
`;
