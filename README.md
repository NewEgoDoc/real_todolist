# **Todo List**

기본적으로 실행되어야 하는 커맨드 두개

새로운 프로젝트 생성
```
$ npx create-react-app mashup-todolist
```
프로젝트에 필요한 라이브러리 react-icons와 styled-compnents 설치 

```
$ yarn add react-icons 
$ yarn add styled-components
```

## `1. 컴포넌트에 대한 간략한 설명`
___
todolist는 front엔드레어서나 framework에서 거의 hello world 급으로 개발자가 빠르게 간단한 프로젝트를 구성해보고 어떻게 작동하는지를 배우는 프로젝트

### **- TodoTemplate**
>해당 컴포넌트(.js 파일)는 레이아웃을 보여줍니다. 페이지 중앙에 그림자가 적용된 세로 길쭉한 흰색도화지라 생각하시면 됩니다.
### **- TodoHead**
>실제 입력한 todo 항목들을 보여주는 곳으로 해당 날짜와 할일에 대한 간략한 설명을 보여줍니다
### **- TodoList**
>TodoItem 항목들을 불러와서 해당 항목에 그려줍니다.
### **- TodoItem**
> 할일에 대한 디테일 정보들을 나타냅니다.
### **- TodoCreate**
> 할일을 등록시켜주는 컴포넌트입니다 입력값을 토대로 버튼을 눌러주면 할일이 등록되여 item에 추가 즉 list에 추가됩니다.

**`페이지 전체 배경에 색상 입히기 `**

페이지에 회색색상을 적용시켜서 body태그 전체에 styled-components를 사용하여 적용

styled-components에서 특정 컴포넌트를 만드는것이 아닌 global 변수 를 추가 할것이기때문에 ` createGlobalStyle ` 을 사용할 것이다.

## **App.js**

```js
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>안녕하세요</div>
    </>
  );
}

export default App;
```

