import styled from 'styled-components/macro';
import Button from '../components/Button';

export default function Cart({ cartItems }) {
  return (
    <Main>
      <h1>Cart</h1>
      {cartItems &&
        cartItems.map((item) => (
          <Item key={item._id}>
            <h4>{item.productId.name}</h4>
            <p>
              {item.productId.price} {item.productId.currency ?? 'Galleons'}
            </p>
          </Item>
        ))}
      <Button text="Checkout" />
    </Main>
  );
}

const Main = styled.main`
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  max-width: 600px;
  h1 {
    padding: 2rem;
    text-align: center;
  }
`;

const Item = styled.div`
  background: var(--grey-100);
  border-radius: 1rem;
  box-shadow: 0px 2px 4px 0px var(--grey-400);

  color: var(--grey-400);
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 2rem;

  h4,
  p {
    margin: 0;
    padding: 0;
  }
`;
