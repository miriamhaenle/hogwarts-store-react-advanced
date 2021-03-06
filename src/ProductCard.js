import styled from 'styled-components';

export default function ProductCard({ product, onDeleteCard }) {
  return (
    <Card>
      <h4>{product.name}</h4>
      <XButton onClick={onDeleteCard}>x</XButton>
      <div>
        <span>{product.price} </span>
        <span>{product.currency}</span>
      </div>
      <div>Package size: {product.packageSize}</div>
      <div>Contact: {product.supportContact}</div>

      <ul>{product.tag}</ul>

      {product.onSale && <Sale>ON SALE</Sale>}
    </Card>
  );
}

const Card = styled.div`
  background: #e3c5bb;
  border-radius: 5px;
  max-width: 500px;
  margin: 1rem auto;
  padding: 1.5rem;
  position: relative;

  h4 {
    margin-bottom: 0.4rem;
    background: #ffadc6;
    display: inline;
  }
`;

const XButton = styled.span`
  color: #db7c26;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  top: 0;
  right: 0.6rem;
`;

const Sale = styled.span`
  background: #aeffd8;
  color: #183642;
  font-weight: bold;
  position: absolute;
  transform: rotate(-23deg);
  right: 5px;
  bottom: 25px;
  transition: 0.4s ease-in transform;

  &:hover {
    transform: rotate(23deg);
    color: #aeffd8;
    background: #183642;
  }
`;
