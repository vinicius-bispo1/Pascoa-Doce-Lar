import React from "react";
import Header from "./Components/Header/header.js";
import Main from "./Components/Main/main.js";
import Footer from "./Components/Footer/footer.js";
import superovo from "./Components/imagem/superovo.png";
import superovo2 from "./Components/imagem/ovoresponsivo.png";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  
  body{
    background-image: url(${superovo});
    background-repeat: no-repeat;
    background-size: contain;
    @media (max-width: 790px) {
      background-image: url(${superovo2});
    background-repeat: no-repeat;
    background-size: contain;
  }
  }
}

`;
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

