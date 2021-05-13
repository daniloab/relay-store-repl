import React, { useEffect, useState } from "react";

import { Flex } from "rebass";
import styled, { createGlobalStyle } from "styled-components";
import Header, { headerHeight } from "./components/Header";
import SchemaArea from "./components/codemirror/SchemaArea";
import { rawSchema } from "./components/codemirror/rawSchema";

import { GraphQLSchema, buildSchema } from "graphql";

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
  flex-direction: column;
  min-width: 1080px;
`;

const AppContainer = styled.div`
  display: flex;
  height: calc(100vh - ${headerHeight});
  width: 100vw;
  color: ${sideBarTextColor};
  width: 100%;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  justify-content: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  overflow: auto;
`;

const EditableContent = styled.div`
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
`;

const App = () => {
  const [schemaText, setSchemaText] = useState(rawSchema);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let schema: null | GraphQLSchema = null;

      try {
        schema = buildSchema(schemaText);
      } catch (err) {
        console.error(err);
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [schemaText]);

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <AppContainer>
        <Content>
          <EditableContent>
            <SchemaArea onChangeSchema={setSchemaText} />
          </EditableContent>
        </Content>
      </AppContainer>
    </Container>
  );
};

export default App;
