import React, { Component } from 'react'
import './index.less'

export default class Button extends Component {
  handleClick = (e) => {
    e.stopPropagation()
    if (this.props.type !== 'useless') {
      this.props.onClick(e)
    } else {
      return false
    }
  }
  render() {
    return (
      <div 
        onClick={this.handleClick} 
        className={`my-button ${this.props.type || 'default'} ${this.props.className}`}
      >{this.props.title || this.props.children}</div>
    )
  }
}
