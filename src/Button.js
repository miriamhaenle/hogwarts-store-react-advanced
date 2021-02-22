import styled from 'styled-components';

export default function Button({ text, color, type }) {
  return (
    <ButtonStyled background={color} type={type ? type : 'submit'}>
      {text}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  background: ${(props) => props.background ?? 'E3C5BB'};
  border-radius: 2px;
  border: none;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.5rem;
`;
