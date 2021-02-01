import React, { Component } from 'react'
import './index.less'

export default class InputItem extends Component {
  


  render() {
    const {title, placeholder, type, refFun} = this.props
    return (
      <div className="login-input-item">
        <span>{title}</span>
        <div className="login-input-item-wrong">
          <input onBlur={this.props.onBlur} ref={refFun} type={type || 'text'} placeholder={placeholder}  />
          <span className="login-input-item-wrong-message">{this.props.wrongMessage}</span>
        </div>
      </div>
    )
  }
}
