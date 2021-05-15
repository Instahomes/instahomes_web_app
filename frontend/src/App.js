import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./globalStyles";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/home";
import Listing from "./views/listing";
import Search from "./views/search";
import Development from "./views/development";
import Developer from "./views/developer";
import DeveloperForm from "./views/developer-form";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/listing">
              <Listing />
            </Route>
            <Route exact path="/development">
              <Development />
            </Route>
            <Route exact path="/developer">
              <Developer />
            </Route>
            <Route exact path="/inquire">
              <DeveloperForm />
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
