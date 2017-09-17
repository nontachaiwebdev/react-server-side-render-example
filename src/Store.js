import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
  reducers,
  composeWithDevTools()
)

export default class Store extends React.Component {
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}