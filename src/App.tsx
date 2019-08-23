import * as React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  background-color: white;
`;

export const App = () => {
  return (
    <Container>
      <h1>Hello World!</h1>
    </Container>
  );
};
