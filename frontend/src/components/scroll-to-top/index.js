import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import ReactGA from "react-ga";

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  history.listen((location) => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });

  return children;
};

export default ScrollToTop;
