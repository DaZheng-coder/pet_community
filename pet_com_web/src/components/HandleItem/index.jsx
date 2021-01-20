import React, { Component } from 'react'
import './index.less'

export default class HandleItem extends Component {
  render() {
    const {iconClass} = this.props
    return (
      <div className="flex flex-center flex-column">
        <div className="handle-item flex-center">
          <i className={`iconfont ${iconClass}`} />
        </div>
        <span className="handle-item-text">{this.props.text}</span>
      </div>
    )
  }
}
