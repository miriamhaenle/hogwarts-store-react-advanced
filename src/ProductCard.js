import styled from 'styled-components';

export default function ProductCard({ product }) {
  return (
    <Card>
      <h4>{product.name}</h4>
      <div>
        <span>{product.price} </span>
        <span>{product.currency}</span>
      </div>
      <div>Package size: {product.packageSize}</div>
      <div>Contact: {product.supportContact}</div>

      <ul>{product.tag}</ul>
    </Card>
  );
}

const Card = styled.div`
  background: #e3c5bb;
  border-radius: 5px;
  max-width: 500px;
  margin: 1rem auto;
  padding: 1.5rem;
`;
