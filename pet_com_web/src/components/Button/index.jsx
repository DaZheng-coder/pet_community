import React, { Component } from 'react'
import './index.less'

export default class Button extends Component {
  render() {
    return (
      <div 
        onClick={this.props.click} 
        className={`my-button ${this.props.className}`}
      >{this.props.title}</div>
    )
  }
}
