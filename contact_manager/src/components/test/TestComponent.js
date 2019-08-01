import React, { Component } from 'react'

class TestComponent extends Component {
  componentDidMount() {
    console.log('Component Mounted')
  }
  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    )
  }
}



export default TestComponent