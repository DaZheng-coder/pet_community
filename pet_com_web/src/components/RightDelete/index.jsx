import React, { Component } from 'react'
import './index.less'

export default class RightDelete extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className={`rd-container ${this.props.className}`}>
        <div className="rd">
          <div className="rd-left">
            <div className={`rd-input ${this.props.isCheckbox ? '' : 'vhidden'}`}>
              <input type="checkbox"/>
            </div>
            <div className="rd-content">
              {this.props.children}
            </div>
          </div>
          <div onClick={this.props.onDeleteClick} className="rd-right">
            <i className="iconfont icon-icon-17"/>
          </div>
        </div>
      </div>
      
    )
  }
}
