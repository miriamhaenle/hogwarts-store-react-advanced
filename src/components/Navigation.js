import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ReactComponent as ShoppingBag } from '../assets/shopping-bag.svg';

export default function Navigation() {
  return (
    <Nav>
      <NavLink exact to="/">
        Home
      </NavLink>

      <NavLink to="/products">Products</NavLink>

      <NavLink to="/wishlist">Wishlist</NavLink>

      <NavLink to="/cart">
        <ShoppingBag />
      </NavLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  color: var(--primary-300);
  justify-content: space-around;
  align-items: center;
  list-style: none;
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;

  a {
    background: var(--grey-200);
    color: var(--grey-400);
    padding: 0 0.25rem;
    text-decoration: none;
    display: grid;
    place-content: center;
    &:active {
      background: var(--secondary-300);
      color: var(--secondary-500);
      transform: scale(1.1);
    }

    svg {
      height: 1.32rem;
      width: 1.32rem;
      fill: var(--grey-400);
    }
  }

  .active {
    background: var(--secondary-300);
    color: var(--secondary-500);
  }
`;
