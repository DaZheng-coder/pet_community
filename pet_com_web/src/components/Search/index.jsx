import React, { Component } from 'react'
import './index.less'

export default class Search extends Component {
  render() {
    return (
      <div className="search-container" style={{backgroundColor: this.props.bgColor}}>
        <i className="search-container-icon iconfont icon-icon-35"></i>
        <input className="search-container-input" type="text" placeholder="搜索你想要的~" />
      </div>
    )
  }
}
