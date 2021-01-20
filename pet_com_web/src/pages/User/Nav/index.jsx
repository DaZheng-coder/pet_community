import React, { Component } from 'react'
import './index.less'

export default class Nav extends Component {
  render() {
    return (
      <div className="flex padding1-tb bg">
        <div className="flex1"></div>
        <i className="margin1-lr iconfont icon-icon-13"></i>
        <i className="margin1-lr iconfont icon-icon-120"></i>
      </div>
    )
  }
}
