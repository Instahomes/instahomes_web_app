import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./globalStyles";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./misc/protectedRoutes";
import { isAuthenticated, getProfile } from "./services/auth";
import Home from "./views/home";
import Listing from "./views/listing";
import Tour from "./views/tour";
import Search from "./views/search";
import Signup from "./views/signup";
import Wishlist from "./views/wishlist";
import Development from "./views/development";
import Developer from "./views/developer";
import InquiryForm from "./views/inquiry-form";
import GuidanceForm from "./views/guidance-form";
import Maintenance from "./views/maintenance";
import DeveloperAdmin from "./views/developer-admin";
import DeveloperWebsite from "./views/developer-website";
import EmptyPage from "./components/empty-page";
import ScrollToTop from "./components/scroll-to-top";
import ReactGA from "react-ga";
import ReactPixel from "react-facebook-pixel";

const TRACKING_ID = "UA-189988351-1";
const PIXEL_ID = "1136393116861058";
ReactGA.initialize(TRACKING_ID);
ReactPixel.init(PIXEL_ID);

isAuthenticated() &&
  getProfile() &&
  ReactGA.set({
    userId: getProfile().user_id,
  });

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {process.env.REACT_APP_MAINTENANCE_MODE == "true" ? (
          <Maintenance />
        ) : (
          <Router>
            <ScrollToTop>
              <Switch>
                <ProtectedRoute
                  isAuthenticated={isAuthenticated()}
                  exact
                  redirectPath="/signup"
                  path="/wishlist"
                >
                  <Wishlist />
                </ProtectedRoute>
                <Route path="/partner">
                  <DeveloperAdmin />
                </Route>
                <Route path="/alveo">
                  <DeveloperWebsite />
                </Route>
                <Route exact path="/signup">
                  <Signup />
                </Route>
                <Route exact path="/login">
                  <Signup isLogin />
                </Route>
                <Route exact path="/search">
                  <Search />
                </Route>
                <Route exact path="/listing/:id">
                  <Listing />
                </Route>
                <Route exact path="/tour/:id">
                  <Tour />
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
                <Route exact path="/guidance">
                  <GuidanceForm />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route>
                  <EmptyPage isEmpty={true} />
                </Route>
              </Switch>
            </ScrollToTop>
          </Router>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
