import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className={`flex flex-center flex-column flex-wrap-children ${this.props.className}`} onClick={this.props.click || null}>
        <div hidden className="handle-item flex-center">
          {
            this.props.children || <i className={`iconfont ${this.props.iconClass}`} />
          }
        </div>
        <span className="handle-item-text">{this.props.text}</span>
      </div>
    )
  }
}
