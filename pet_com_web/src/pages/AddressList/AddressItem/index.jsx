import React, { Component } from 'react'
import './index.less'

export default class AddressItem extends Component {
  render() {
    return (
      <div className="ai-container">
        <label className="margin1-r">
          <input type="checkbox" />
        </label>
        <span>
          地址
        </span>

      </div>
    )
  }
}
