import React from 'react';

export default class IndexPage extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      text: 'Before Render Text'
    }
  }

  componentDidMount () {
    this.setState({
      text: 'After Render Text'
    })  
  }

  render() {
    const {text} = this.state 
    return (
      <div>{this.state.text}</div>
    )
  }
}