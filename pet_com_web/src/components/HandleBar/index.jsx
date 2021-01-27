import React, { Component } from 'react'

export default class HandleBar extends Component {
  render() {
    const {iconClass, title} = this.props
    return (
      <div onClick={this.props.click || null} className={`bg flex padding1-tb ${this.props.className || ''}`}>
        <div className="margin1-r">
          {this.props.leftSlot || <i className={`iconfont ${iconClass}`} />}
        </div>
        <div className="font2 flex1">
          {this.props.centerSlot || <span>{title}</span>}
        </div>
        <div className="flex">{this.props.rightSlot || ''}<i onClick={this.props.click} className="iconfont icon-icon-64" /></div>
      </div>
    )
  }
}
