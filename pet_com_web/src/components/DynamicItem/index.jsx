import React, { Component } from 'react'
import {connect} from 'react-redux'
import Avatar from '@/components/Avatar/'
import EditCommonBar from '@/components/EditCommonBar/'
import DividLine from '@/components/DividLine/'
import Popup from '@/components/Popup'
import './index.less'
import { withRouter } from 'react-router-dom'
import {apiDynamicGood,apiCommonGood, apiCommonCreate} from '@/api/api'

class DynamicItem extends Component {
  state = {
    isPopup: false,
    // 点赞数
    goods: this.props.dynamic ? this.props.dynamic.content.good.length : this.props.content.good.length,
    isGood: this.props.content && this.props.content.good.includes(this.props.app_user._id) 
  }

  isShowPopup = (e) => {
    e.stopPropagation()
    const {isPopup} = this.state
    this.setState({isPopup: !isPopup})
  }

  // 更新二级评论列表
  updateSecondCommon = (e) => {
    console.log('更新二级评论')
  }
  
  // 处理点击评论触发的事件
  handleCommonClick = (e) => {
    e.stopPropagation()
    if (!this.props.isDetail && !this.props.isCommon) {
      // 如果不是动态详情，并且不是评论，则跳转到详情页
      this.props.history.push(`/dynamicDetail/${this.props._id}`)
    } else {
      this.isShowPopup(e)
    }
  }

  // 处理点击点赞触发的事件
  handleGoodClick = (e) => {
    e.stopPropagation()
    // 更新点赞数，判断用户是否点赞等等
    const {_id,app_user} = this.props
    let {goods} = this.state
    if(this.props.isCommon) {
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
    } else {
      apiDynamicGood(_id,app_user._id).then(res => {
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
      this.props.addSecondCommon(res.data)
      this.isShowPopup(e)
    })
  }

  render() {
    const {_id,user,content,commonNum} = this.props
    const {isPopup,goods,isGood} = this.state
    return (
      <div onClick={this.props.isDetail ? null : () => this.props.history.push(`/dynamicDetail/${_id}`)} className=" dynamic-container">
        <div className="dynamic-container-padding">
          <div className={`flex ${this.props.notShowUser && 'none'}`}>
            <div className="margin1-r">
              <Avatar url={user && user.avatarUrl}/>
            </div>
            <div className="flex flex1 flex-column">
              <span className="font3 font-bolder">{user && user.username}</span>
              <span className="font-gray">{content && content.updatedAt}</span>
            </div>
            <div className="dynamic-container-handle">
              <span className="dynamic-container-handle-focus">+ 关注</span>
            </div>
          </div>
          <div className="dynamic-container-content">
            <div>
              <div className="dynamic-container-content-text font-bold">{content && content.text}</div>
              <div className="dynamic-container-content-imgs">
                {
                  content && content.imgs.length > 1 ? content.imgs.map((img,index) => 
                    <div key={index} className="dynamic-container-content-imgs-item">
                      <img className="wh100" src={img} alt="动态附图"/>
                    </div>) :
                    content.imgs.length !== 0 &&
                      <img style={{width: '60%'}} src={content.imgs[0]} alt="动态附图" />
                }
              </div>
            </div>
            <div>{this.props.children}</div>
            <div className="dynamic-container-content-handle flex margin2-t">
              {/* <div className="dynamic-container-content-handle-tags flex1">
                <span className="dynamic-container-content-handle-tag">{content.type && `# ${content.type}`}</span>
              </div> */}
              <div>
                <span onClick={this.handleCommonClick} className={`${this.props.isDetail && !this.props.isCommon ? 'none' : ''} margin1-r`}>
                  <i className="iconfont icon-icon-73 margin05-r" />
                  <span className="width04 inline-block">{commonNum}</span>
                </span>
                <span onClick={this.handleGoodClick} className="margin1-r">
                  <i className={`${isGood ? '' : 'none'} iconfont margin05-r icon-icon-43`} />
                  <i className={`${isGood ? 'none' : ''} iconfont margin05-r icon-icon-42`} />
                  <span className="width04 inline-block">{goods}</span>
                </span>
              </div>
            </div>
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
        <DividLine />
      </div>
    )
  }
}

export default connect(state => ({app_user: state.user}))(withRouter(DynamicItem))