import styled from 'styled-components';

export default function Home() {
  return (
    <Main>
      <h1>This is home</h1>
    </Main>
  );
}

const Main = styled.main`
  display: grid;
  justify-content: center;
`;
