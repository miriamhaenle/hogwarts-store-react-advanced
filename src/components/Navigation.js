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
  color: #764248;
  justify-content: space-around;
  list-style: none;
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;

  a {
    background: #dfe2cf;
    padding: 0 0.25rem;
    text-decoration: none;

    &:active {
      background: #aeffd8;
      color: #764248;
      transform: scale(1.1);
    }
  }

  .active {
    background: #aeffd8;
  }
`;
