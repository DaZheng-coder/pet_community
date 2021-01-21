import React, { Component } from 'react'

export default class HandleTab extends Component {
  render() {
    const {iconClass, title} = this.props
    return (
      <div className="flex padding1-tb">
        <div className="margin1-r"><i className={`iconfont ${iconClass}`} /></div>
        <span className="font-bold font2 flex1">{title}</span>
        <i className="iconfont icon-icon-64"></i>
      </div>
    )
  }
}
