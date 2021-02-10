import React, { Component } from 'react'
import {connect} from 'react-redux'
import Popup from '@/components/Popup'
import {apiCommonCreate} from '@/api/api'
import PubSub from 'pubsub-js'
import './index.less'

 class EditCommonBar extends Component {

  state = {
    isPopup: false
  }

  isShowPopup = (e) => {
    e.stopPropagation()
    const {isPopup} = this.state
    this.setState({isPopup: !isPopup})
  }

  /**
   * 
   * @param {发送评论} e 
   */
  handleSendClick = (e) => {
    e.stopPropagation()
    // 获取编辑内容
    const content = this.textarea.value
    if (content !== '') {
      // 如果不为空
      const body = {
        user_id: this.props.app_user._id,
        parent: this.props.dynamic_id,
        text: content
      }
      apiCommonCreate(body).then(res => {
        // 调用父组件的方法更新评论列表
        this.props.update(res.data)
      })
      this.isShowPopup(e)
    } else {
      console.log('编辑的内容不能为空')
    }
    // 重置状态
    this.textarea.value = ''
  }

  render() {
    const {isPopup} = this.state
    // dynamic_id
    return (
      <div className="edit-common-bar-content padding1 bg">
        <div onClick={this.isShowPopup} className="edit-common-bar-content-text radius05 bg-gray">一起讨论讨论~</div>
        <Popup isPopup={isPopup} popout={this.isShowPopup} >
          <div className="bg popup-content padding1">
            <div className="popup-content-header flex">
              <span onClick={this.isShowPopup} className="popup-content-header-cancel">取消</span>
              <span className="font3 font-bold">评论</span>
              <span onClick={this.handleSendClick} className="font-blue">发送</span>
            </div>
            <div>
              <textarea ref={c => this.textarea = c} name="common" id="common" cols="30" rows="10" placeholder="请输入您评论的内容~"></textarea>
            </div>
          </div>
        </Popup>
      </div>
    )
  }
}

export default connect(state => ({app_user: state.user}))(EditCommonBar)