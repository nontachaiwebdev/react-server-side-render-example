import React from 'react'
import ReactDOM from 'react-dom'
import AppRoutes from './components/AppRoutes';
console.log('Main File')
window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'))
}
