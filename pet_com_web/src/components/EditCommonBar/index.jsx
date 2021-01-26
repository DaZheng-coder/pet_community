import React, { Component } from 'react'
import Popup from '@/components/Popup'
import './index.less'

export default class EditCommonBar extends Component {

  state = {
    isPopup: false
  }

  isShowPopup = (e) => {
    e.stopPropagation()
    const {isPopup} = this.state
    this.setState({isPopup: !isPopup})
  }

  render() {
    const {isPopup} = this.state
    return (
      <div className="edit-common-bar-content padding1">
        <div onClick={this.isShowPopup} className="edit-common-bar-content-text radius05 bg-gray">一起讨论讨论~</div>
        <Popup isPopup={isPopup} popout={this.isShowPopup} >
          <div className="bg popup-content padding1">
            <div className="popup-content-header flex">
              <span onClick={this.isShowPopup} className="popup-content-header-cancel">取消</span>
              <span className="font3 font-bold">评论</span>
              <span className="font-blue">发送</span>
            </div>
            <div>
              <textarea name="common" id="common" cols="30" rows="10" placeholder="请输入您评论的内容~"></textarea>
            </div>
          </div>
        </Popup>
      </div>
    )
  }
}
