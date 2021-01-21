import React, { Component } from 'react'
import './index.less'

export default class InfoTab extends Component {
  render() {
    return (
      <div className="info-item flex padding1-tb">
        <span className="font25">{this.props.title || ''}</span>
        <div className="info-item-right flex">
          {this.props.children || <span>{this.props.text || ''}</span>}
          <i className="iconfont icon-icon-64"></i>
        </div>
      </div>
    )
  }
}
