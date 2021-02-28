import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import ProductForm from './ProductForm';

export default function ProductCard({
  product,
  onDeleteCard,
  onAddToFavorites,
  isFavorite,
}) {
  return (
    <Card>
      <h4>{product.name}</h4>
      <DeleteButton onClick={onDeleteCard}>x</DeleteButton>
      <div>
        <span>{product.price} </span>
        <span>{product.currency}</span>
      </div>
      <div>Package size: {product.packageSize}</div>
      <div>Contact: {product.supportContact}</div>

      <Tags>
        {product.tags.map((tag, index) => (
          <li key={tag + index}>{tag}</li>
        ))}
      </Tags>
      {product.onSale && <Sale>ON SALE</Sale>}
      <FavoriteButton isFavorite={isFavorite} onClick={onAddToFavorites}>
        <div></div>
      </FavoriteButton>
    </Card>
  );
}

ProductForm.propTypes = {
  product: PropTypes.object,
  onDeleteCard: PropTypes.func,
};

const Card = styled.div`
  background: var(--primary-100);
  border-radius: 5px;
  color: var(--secondary-500);
  max-width: 500px;
  margin: 1rem auto;
  padding: 1.5rem 0 1.5rem 6.4rem;
  position: relative;
  text-align: initial;

  h4 {
    margin-bottom: 0.4rem;
    background: var(--primary-200);
    display: inline;
  }
`;

const DeleteButton = styled.span`
  color: var(--grey-400);
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  top: 0.7rem;
  right: 1.5rem;
`;

const Sale = styled.span`
  background: var(--secondary-300);
  color: var(--secondary-500);
  font-weight: bold;
  position: absolute;
  transform: rotate(-23deg);
  right: 5px;
  bottom: 25px;
  transition: 0.4s ease-in transform;

  &:hover {
    transform: rotate(23deg);
    color: var(--secondary-300);
    background: var(--secondary-500);
  }
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  visibility: none;
  li {
    list-style: none;
    background: var(--secondary-500);
    color: var(--secondary-300);
    margin: 0.2rem;
    padding: 0.4rem 0.2rem 0.2rem;
    display: inline;
  }
`;

const FavoriteButton = styled.div`
  position: absolute;
  top: 2rem;
  left: 3rem;

  div {
    height: 1.5rem;
    width: 1.5rem;
    background: ${(props) =>
      props.isFavorite ? 'var(--primary-200)' : 'var(--grey-200)'};
    transform: rotate(45deg);

    &::before {
      content: '';
      height: 1.5rem;
      width: 1.5rem;
      background: ${(props) =>
        props.isFavorite ? 'var(--primary-200)' : 'var(--grey-200)'};
      position: absolute;
      border-radius: 50%;
      right: 10px;
      bottom: 0px;
    }
    &::after {
      content: '';
      height: 1.5rem;
      width: 1.5rem;
      background: ${(props) =>
        props.isFavorite ? 'var(--primary-200)' : 'var(--grey-200)'};
      border-radius: 50%;
      position: absolute;
      right: 0px;
      bottom: 11px;
    }
  }
`;
