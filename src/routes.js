import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Blog from './containers/Blog';
import NotFoundPage from './containers/NotFoundPage';

const Index = () => (
  <Route
    render={({ location }) => (
      <Switch location={location}>
        <Route path="/" component={Blog} key="Blog" exact={true} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    )}
  />
);

export default Index;
