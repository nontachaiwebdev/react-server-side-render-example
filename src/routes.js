// src/routes.js
import React from 'react'
import IndexPage from './components/IndexPage';
import AthletePage from './components/AthletePage';
import NotFoundPage from './components/NotFoundPage';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Store from './Store'

export default props => (
  <Store>
    <Router>
      <div>
        <Route exact path='/' component={IndexPage} />
        <Route path='/athlete' component={AthletePage} />
        <Route path='/notfound' component={NotFoundPage} />
      </div>
    </Router>
  </Store>
);
