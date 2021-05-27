import React from 'react'
import { createGlobalStyle } from 'styled-components'
import TodoTemplate from './components/TodoTemplate'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>이것이 적용된 styled-component</TodoTemplate>
    </>
  );
}


export default App;
