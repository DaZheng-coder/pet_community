import React, { Component } from 'react'

export default class HandleBar extends Component {
  render() {
    const {iconClass, title} = this.props
    return (
      <div onClick={this.props.click || null} className="bg flex padding1-tb">
        <div className="margin1-r"><i className={`iconfont ${iconClass}`} /></div>
        <span className="font2 flex1 ">{title}</span>
        <div className="flex">{this.props.rightSlot || ''}<i onClick={this.props.click} className="iconfont icon-icon-64" /></div>
      </div>
    )
  }
}
