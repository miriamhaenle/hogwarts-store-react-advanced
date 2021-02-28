import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

export default function Button({ text, color, type, handlerFn = () => {} }) {
  return (
    <ButtonStyled
      background={color}
      type={type ? type : 'submit'}
      onClick={handlerFn}
    >
      {text}
    </ButtonStyled>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  handlerFn: PropTypes.func,
};

const ButtonStyled = styled.button`
  background: ${(props) => props.background ?? 'var(--primary-100)'};
  border-radius: 0.5rem;
  border: ${(props) => props.background ?? '1px solid var(--grey-500)'};
  font-size: 1.175rem;
  padding: 0.7rem;
  min-width: 10rem;
`;
