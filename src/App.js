import styled from "styled-components";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Sessions from "./Components/Sessions";
import { GlobalStyle } from "./Styles/GlobalStyle";


export default function App() {
  return (
    <>
      <GlobalStyle />
        <StyleApp>
          <Header />
          {/* <Home /> */}
          <Sessions />
        </StyleApp>
    </>
  );
}

const StyleApp = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 375px; */
  margin: 0 auto;

  font-family: 'Roboto', sans-serif;
`
