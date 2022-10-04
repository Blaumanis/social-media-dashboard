import styled, { ThemeProvider } from "styled-components";
import React, {useState} from "react";
import Header from "./components/Header";
import Total from "./components/Total";
import Today from "./components/Today";
import Intro from "./components/Intro";
import './index.css';
import Theme, {lightTheme, darkTheme} from './utils/Theme'

// ================== REFERENCE ===================
// const { createGlobalStyle } = styled;
// const GlobalStyle = createGlobalStyle`
//   :root {
//     --veryDarkBlueBg: hsl(230, 17%, 14%);
//   }
// `;
// ================================================

const Container = styled.main`
  background-color: ${({theme})=>theme.bg};
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  animation: slideFromTop 1s linear;
  @media (max-width: 567px) {
    padding: 2rem 1rem;
  }
  @keyframes slideFromTop {
    0% {
      transform: translate(0, -100%);
      background-color: var(--white);
    }
    100% {
      transform: translate(0, 0);
      background-color: ${({theme})=>theme.bg};
    }
  }
`

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [remove,setRemove] = useState(false)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {!remove ? <Intro setRemove={setRemove} /> : 
    <Container>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Total/>
      <Today/>
    </Container>
    }
    </ThemeProvider>
  );
}

export default App;
