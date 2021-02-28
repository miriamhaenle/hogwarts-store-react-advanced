import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as MagicWand } from '../assets/magicWand.svg';

export default function Home() {
  return (
    <Main>
      <h1>Welcome to the Wizard Shop</h1>
      <Wand />
      <p>You can add items to our shop.</p>
      <p>But also add items to your wishlist.</p>
      <JumpMark to="/products">Check out our product portfolio </JumpMark>
    </Main>
  );
}

const Main = styled.main`
  display: grid;
  justify-items: center;

  h1 {
    padding: 2rem;
  }
`;

const Wand = styled(MagicWand)`
  fill: var(--grey-100);
  width: 40px;

  &:hover {
    fill: var(--secondary-300);
    transform: rotate(15deg);
  }
`;

const JumpMark = styled(Link)`
  background: var(--secondary-500);
  color: var(--grey-100);
  padding: 0.2rem;
  text-decoration: none;

  &:active,
  &:hover {
    background: var(--grey-100);
    color: var(--secondary-500);
  }
`;
