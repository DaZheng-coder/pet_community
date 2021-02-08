import React, { Component } from 'react'
import {connect} from 'react-redux'
import Avatar from '@/components/Avatar/'
import DividLine from '@/components/DividLine/'
import Popup from '@/components/Popup'
import './index.less'
import { withRouter } from 'react-router-dom'
import {apiDynamicGood} from '@/api/api'

class DynamicItem extends Component {
  state = {
    isPopup: false,
    // 点赞数
    goods: this.props.content.good.length,
    isGood: this.props.content.good.includes(this.props.app_user._id)
  }

  isShowPopup = (e) => {
    e.stopPropagation()
    const {isPopup} = this.state
    this.setState({isPopup: !isPopup})
  }
  
  // 处理点击点赞触发的事件
  handleGoodClick = (e) => {
    e.stopPropagation()
    // 更新点赞数，判断用户是否点赞等等
    const {_id,app_user} = this.props
    let {goods} = this.state
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

  render() {
    const {_id,user,app_user,content,commonNum} = this.props
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
              <span className="font-gray">{content.updatedAt}</span>
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
                    <img style={{width: '60%'}} src={content.imgs[0]} alt="动态附图" />
                }
              </div>
            </div>
            <div>{this.props.children}</div>
            <div className="dynamic-container-content-handle flex margin2-t">
              <div className="dynamic-container-content-handle-tags flex1">
                <span className="dynamic-container-content-handle-tag">{content.type && `# ${content.type}`}</span>
              </div>
              <div>
                <span onClick={this.isShowPopup} className="margin1-r">
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
          显示二级评论区
        </Popup>
        <DividLine />
      </div>
    )
  }
}

export default connect(state => ({app_user: state.user}))(withRouter(DynamicItem))