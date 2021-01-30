import React, { Component } from 'react'
import './index.less'

export default class InputItem extends Component {
  render() {
    const {title, placeholder, type, refFun} = this.props
    return (
      <div className="login-input-item">
        <span>{title}</span>
        <input ref={refFun} type={type || 'text'} placeholder={placeholder}  />
      </div>
    )
  }
}
