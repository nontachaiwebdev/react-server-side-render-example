import React from 'react';
import { connect } from 'react-redux'

class IndexPage extends React.Component {

  render() {
    const {text} = this.props 
    return (
      <div>{text}</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.main.text
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

const hocComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage)

export default hocComponent

