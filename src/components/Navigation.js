import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <Nav>
      <NavLink exact to="/">
        Home
      </NavLink>

      <NavLink to="/products">Products</NavLink>

      <NavLink to="/wishlist">Wishlist</NavLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  color: var(--primary-300);
  justify-content: space-around;
  list-style: none;
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;

  a {
    background: var(--grey-200);
    color: var(--grey-400);
    padding: 0 0.25rem;
    text-decoration: none;

    &:active {
      background: var(--secondary-300);
      color: var(--secondary-500);
      transform: scale(1.1);
    }
  }

  .active {
    background: var(--secondary-300);
    color: var(--secondary-500);
  }
`;
