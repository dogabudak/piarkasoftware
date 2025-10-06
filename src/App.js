import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Switch, useLocation } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views
import Home from './views/Home';
import Projects from "./views/Projects";
import Team from "./views/Team";


const Routes = () => {
  const childRef = useRef();
  const location = useLocation();

  useEffect(() => {
    document.body.classList.add('is-loaded');
    if (childRef.current) {
      childRef.current.init();
    }
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/Projects" component={Projects} layout={LayoutDefault} />
          <AppRoute exact path="/Team" component={Team} layout={LayoutDefault} />
        </Switch>
      )}
    />
  );
};

const App = () => (
  // 👇 this line makes it work both locally and on GitHub Pages
  <Router basename={process.env.PUBLIC_URL}>
    <Routes />
  </Router>
);

export default App;
