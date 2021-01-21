import React, { Component } from 'react'
import './index.less'

export default class Avatar extends Component {
  render() {
    const {size, url} = this.props
    return (
      <div className={`avatar flex-center ${size || 'normal'}`}>
        <img className="wh100" src={url} alt=""/>
      </div>
    )
  }
}
