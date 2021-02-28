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
  background: ${(props) => props.background ?? 'var(--grey-200)'};
  border-radius: 2px;
  border: none;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.7rem;
`;
