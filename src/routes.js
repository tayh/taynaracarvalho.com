import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}
