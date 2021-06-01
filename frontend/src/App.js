import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./globalStyles";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/home";
import Listing from "./views/listing";
import Search from "./views/search";
import Signup from "./views/signup";
import Wishlist from "./views/wishlist";
import Development from "./views/development";
import Developer from "./views/developer";
import InquiryForm from "./views/inquiry-form";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/wishlist">
              <Wishlist />
            </Route>
            <Route exact path="/listing/:id">
              <Listing />
            </Route>
            <Route exact path="/development/:id">
              <Development />
            </Route>
            <Route exact path="/developer/:id">
              <Developer />
            </Route>
            <Route exact path="/inquire">
              <InquiryForm />
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
