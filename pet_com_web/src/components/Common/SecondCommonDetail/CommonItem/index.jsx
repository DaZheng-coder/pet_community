import React, { Component } from 'react'
import {connect} from 'react-redux'
import Avatar from '@/components/Avatar'
import Popup from '@/components/Popup'
import {apiCommonGood, apiCommonCreate} from '@/api/api'
import './index.less'

class CommonItem extends Component {
  state = {
    isGood: this.props.good.includes(this.props.app_user._id) ? true : false,
    goods: this.props.good.length,
    isPopup: false
  }

  // 评论
  handleCommonClick = (e) => {
    e.stopPropagation()
    this.isShowPopup(e)
  }

  isShowPopup = (e) => {
    const {isPopup} = this.state
    this.setState({isPopup: !isPopup})
  }

  // 点赞
  handleGoodClick = (e) => {
    e.stopPropagation()
    const {_id,app_user} = this.props
    let {goods} = this.state
    apiCommonGood(app_user._id, _id).then(res => {
      console.log('res', res)
      if (res.data.good.includes(app_user._id.toString())) {
        goods--
        this.setState({isGood: false})
      } else {
        goods++
        this.setState({isGood: true})
      }
      this.setState({goods})
    })
  }

  // 处理点击发送评论的事件
  handleSendClick = (e) => {
    e.stopPropagation()
    const body = {
      user_id: this.props.app_user._id,
      text: this.textarea.value,
      parent: this.props._id
    }
    apiCommonCreate(body).then(res => {
      this.textarea.value = ''
      // 调用common组件添加次级评论
      // this.props.addSecondCommon(res.data)
      console.log('res.data', res.data)
      const common = res.data
      const commonInfo = {
        _id: common._id,
        createdAt: common.dynamic.content.createdAt,
        reply_common_user: this.props.send_common_user,
        send_common_user: common.user,
        text: common.dynamic.content.text,
        good: common.dynamic.content.good
      }
      this.props.updateCommonList(commonInfo)
      this.isShowPopup(e)
    })
  }

  render() {
    const {isGood,goods,isPopup} = this.state
    const {_id,createdAt, reply_common_user,send_common_user,text,good} = this.props
    return (
      <div className={`ci-ctn margin1-t ${this.props.className}`}>
        <div className="flex">
          <Avatar className="margin1-r" size="mini"/>
          <div className="flex">
            <span className="font3 font-blue">{send_common_user.username}</span>
            {reply_common_user && <span className="font3 margin1-lr"> 回复 </span>}
            {reply_common_user && <span className="font3 font-blue">{reply_common_user.username}</span>}
          </div>
        </div>
        <div className="ci-ctn-common font25">
          {text}
        </div>
        <div className="ci-ctn-handle font25 flex space-between padding05">
          <span className="font-deep-gray">{createdAt}</span>
          <div>
            <span onClick={this.handleCommonClick} className="margin1-r">
              <i className="iconfont icon-icon-73 margin05-r" />
              <span style={{wordBreak: 'keep-all'}} className="width04 inline-block">评论</span>
            </span>
            <span onClick={this.handleGoodClick}>  
              <i className={`${isGood ? '' : 'none'} iconfont margin05-r icon-icon-43`} />
              <i className={`${isGood ? 'none' : ''} iconfont margin05-r icon-icon-42`} />
              <span className="width04 inline-block">{goods}</span>
            </span>
          </div>
        </div>
        <Popup isPopup={isPopup} popout={this.isShowPopup}>
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

export default connect(state => ({app_user: state.user}))(CommonItem)