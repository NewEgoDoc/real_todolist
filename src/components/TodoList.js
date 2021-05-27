import React from 'react';
import styled from 'styled-components';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: gray; 
`;

function TodoList() {
  return (
  <TodoListBlock>
      여기에 TodoItem map을 사용해서 렌더링
  </TodoListBlock>
  );
}

export default TodoList;