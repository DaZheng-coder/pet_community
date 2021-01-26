import React, { Component } from 'react'
import './index.less'

export default class Button extends Component {
  render() {
    return (
      <div 
        onClick={this.props.onClick} 
        className={`my-button ${this.props.type || 'default'} ${this.props.className}`}
      >{this.props.title || this.props.children}</div>
    )
  }
}
