import React from "react";

import { Flex } from "rebass";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";

const sideBarTextColor = "black";
const htmlBackgroundColor = "#f7f7f7";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    width: 100%;
  }

  html {
    background-color: ${htmlBackgroundColor};
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

const Container = styled(Flex)`
  min-width: 1080px;
`;

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
    </Container>
  );
};

export default App;
