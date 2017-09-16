// src/routes.js
import React from 'react'
import IndexPage from './components/IndexPage';
import AthletePage from './components/AthletePage';
import NotFoundPage from './components/NotFoundPage';
import {
  StaticRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default props => {
  const context = {}
  console.log(props)
  return ( 
    <Router
      location='/'
      context={context} >
      <div>
        <Route exact path='/' component={IndexPage} />
        <Route path='/athlete' component={AthletePage} />
        <Route path='/notfound' component={NotFoundPage} />
      </div>
    </Router>
  )
}