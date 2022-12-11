import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Seats from "./Components/Seats";
import Sessions from "./Components/Sessions";
import Sucess from "./Components/Sucess";
import { GlobalStyle } from "./Styles/GlobalStyle";


export default function App() {

  const [nameSucess, setNameSucess] = useState("")
  const [cpfSucess, setCpfSucess] = useState("")
  const [idSucess, setIdSucess] = useState([])

  const [movieName , setMovieName] = useState("")
  const [hour , setHour] = useState("")

  return (
    <BrowserRouter>
      <GlobalStyle />
      <StyleApp>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sessoes/:idFilme" element={<Sessions/>} />
          <Route path="/assentos/:idSessao" element={<Seats setNameSucess={setNameSucess} setCpfSucess={setCpfSucess} setIdSucess={setIdSucess} setMovieName={setMovieName} setHour={setHour} idSucess={idSucess}/>} />
          <Route path="/sucesso" element={<Sucess  nameSucess={nameSucess} cpfSucess={cpfSucess} idSucess={idSucess} hour={hour} movieName={movieName} />} />
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
