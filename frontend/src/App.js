import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./globalStyles";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/home";
import Listing from "./views/listing";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/listing">
              <Listing />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
