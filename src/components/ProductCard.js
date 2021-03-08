import { useState } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import ProductForm from './ProductForm';
import Button from './Button';

export default function ProductCard({
  product,
  onDeleteCard,
  onAddToFavorites,
  isFavorite,
  placeholderImage,
  addToCart,
}) {
  const [isAdminView, setIsAdminView] = useState(false);

  return (
    <Card>
      {isAdminView && <DeleteButton onClick={onDeleteCard}>x</DeleteButton>}
      <ImageWrapper>{placeholderImage[product.category]}</ImageWrapper>
      <CardContent>
        <p>{product.category}</p>
        <h4>{product.name}</h4>
        <FavoriteButton isFavorite={isFavorite} onClick={onAddToFavorites}>
          <div></div>
        </FavoriteButton>
        <Description>
          <div>
            <span>{product.price} </span>
            <span>{product.currency}</span>
          </div>
          <div>Package size: {product.packageSize}</div>
          <div>Contact: {product.supportContact}</div>
        </Description>
        <Buttons>
          <Button text="Add to cart" handlerFn={addToCart} />
          <Button
            text="Buy now"
            color="var(--secondary-200)"
            onClick={() => alert('Money please!')}
          />
        </Buttons>

        <Tags>
          {product.tags &&
            product.tags.map((tag, index) => <li key={tag + index}>{tag}</li>)}
        </Tags>
        {product.onSale && <Sale>ON SALE</Sale>}
      </CardContent>
    </Card>
  );
}

ProductForm.propTypes = {
  product: PropTypes.object,
  onDeleteCard: PropTypes.func,
};

const Card = styled.div`
  background: var(--primary-200);
  border-radius: 1rem;
  box-shadow: 0px 2px 4px 0px var(--grey-400);
  color: var(--secondary-500);
  max-width: 26rem;
  min-width: 16rem;
  overflow: hidden;

  position: relative;
`;

const ImageWrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 1.5rem 1rem 1rem;
  background: var(--primary-100);

  svg {
    max-width: 3rem;
  }
`;

const CardContent = styled.div`
  padding: 0 2rem 2rem;
  position: relative;

  p {
    color: var(--grey-300);
    font-size: 0.75rem;
    display: inline-block;
    margin-bottom: 0.75rem;
    left: 0;
    line-height: 0.75rem;
    padding-right: 0.75rem;
    position: relative;

    &:before {
      background: var(--primary-400);
      border-radius: 50%;
      content: '';
      height: 0.25rem;
      position: absolute;
      width: 0.25rem;
      right: 0;
      top: 35%;
    }
  }
  h4 {
    margin-bottom: 1.75rem;
    color: var(--grey-500);
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.025em;
  }
`;

const Description = styled.div`
  margin-bottom: 0.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 0.25rem;
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
  left: 0.2rem;
  top: -3.75rem;
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
  right: 2.5rem;
  margin-top: 0.25rem;
  position: absolute;
  top: 2.4rem;

  div {
    height: 1rem;
    width: 1rem;
    background: ${(props) =>
      props.isFavorite ? 'var(--primary-400)' : 'var(--grey-200)'};
    transform: rotate(45deg);

    &::before {
      content: '';
      height: 1rem;
      width: 1rem;
      background: ${(props) =>
        props.isFavorite ? 'var(--primary-400)' : 'var(--grey-200)'};
      position: absolute;
      border-radius: 50%;
      right: 10px;
      bottom: 0px;
    }
    &::after {
      content: '';
      height: 1rem;
      width: 1rem;
      background: ${(props) =>
        props.isFavorite ? 'var(--primary-400)' : 'var(--grey-200)'};
      border-radius: 50%;
      position: absolute;
      right: 0px;
      bottom: 11px;
    }
  }
`;
