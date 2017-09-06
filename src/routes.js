// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import IndexPage from './components/IndexPage';
import AthletePage from './components/AthletePage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/">
    <IndexRoute component={IndexPage}/>
    <Route path="athlete" component={AthletePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;