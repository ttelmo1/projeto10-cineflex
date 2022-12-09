import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Seats from "./Components/Seats";
import Sessions from "./Components/Sessions";
import Sucess from "./Components/Sucess";
import { GlobalStyle } from "./Styles/GlobalStyle";


export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <StyleApp>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sessoes/:idFilme" element={<Sessions/>} />
          <Route path="/assentos/:idSessao" element={<Seats/>} />
          <Route path="/sucesso" element={<Sucess/>} />
        </Routes>
      </StyleApp>
    </BrowserRouter>
  );
}

const StyleApp = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 375px; */
  margin: 0 auto;

  font-family: 'Roboto', sans-serif;
`
