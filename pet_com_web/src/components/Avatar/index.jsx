import React, { Component } from 'react'
import './index.less'

export default class Avatar extends Component {
  render() {
    return (
      <div className={`avatar flex-center ${this.props.size || 'normal'}`}>
        头像
      </div>
    )
  }
}
