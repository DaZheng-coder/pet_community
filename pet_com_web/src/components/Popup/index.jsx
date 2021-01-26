import React, { Component } from 'react'
import './index.less'

export default class Popup extends Component {
  render() {
    const {isPopup,popout} = this.props
    return (
      <div onClick={() => console.log('点击了弹出层')} className={`popup-container ${isPopup ? 'visible': ''}`}>
        <div onClick={popout} className={`popup-container-mask ${isPopup ? 'show' : ''}`}></div>
        <div className={`popup-container-content ${isPopup ? 'popup' : ''}`}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
