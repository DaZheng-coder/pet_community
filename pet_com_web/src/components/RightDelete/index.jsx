import React, { Component } from 'react'
import './index.less'

export default class RightDelete extends Component {
  render() {
    return (
      <div className="rd">
        <div className="rd-left">
          <div className="rd-input">
            <input type="checkbox"/>
          </div>
          <div className="rd-content">
            {this.props.children}
          </div>
        </div>
        <div className="rd-right">
          <i className="iconfont icon-icon-17"/>
        </div>
      </div>
    )
  }
}
