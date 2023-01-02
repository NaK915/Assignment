import React, { Component } from 'react'

export default class Comp2 extends Component {
  render() {
    return (
      <div>
        <h1>The selected Number is - {this.props.value}</h1>
      </div>
    )
  }
}
