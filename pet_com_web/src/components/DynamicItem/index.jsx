import React, { Component } from 'react'
import Avatar from '@/components/Avatar/'
import DividLine from '@/components/DividLine/'
import Popup from '@/components/Popup'
import Button from '@/components/Button'
import './index.less'
import { withRouter } from 'react-router-dom'

class DynamicItem extends Component {

  state = {
    isPopup: false
  }

  // 是否显示popup
  isShowPopup = (e) => {
    e.stopPropagation()
    const {isPopup} = this.state
    this.setState({isPopup: !isPopup})
  }

  render() {
    const {isPopup} = this.state
    const {id,user,pubdate,content} = this.props
    return (
      <div onClick={this.props.isDetail ? null : () => this.props.history.push(`/dynamicDetail/${id}`)} className=" dynamic-container">
        <div className="dynamic-container-padding">
          <div className={`flex ${this.props.notShowUser && 'none'}`}>
            <div className="margin1-r">
              <Avatar url={user && user.avatarUrl}/>
            </div>
            <div className="flex flex1 flex-column">
              <span className="font3 font-bolder">{user && user.username}</span>
              <span className="font-gray">{pubdate}</span>
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
                  content && content.imgs && content.imgs.map((img,index) => 
                    <div key={index} className="dynamic-container-content-imgs-item">
                      <img className="wh100" src={img} alt="动态附图"/>
                    </div>
                  )
                }
              </div>
            </div>
            <div>{this.props.children}</div>
            <div className="dynamic-container-content-handle flex margin2-t">
              <div className="dynamic-container-content-handle-tags flex1">
                <span className="dynamic-container-content-handle-tag"># 我的养宠日记</span>
              </div>
              <div>
                <span onClick={this.isShowPopup} className="margin1-r">
                  <i className="iconfont icon-icon-73 margin05-r" />
                  <span className="width04 inline-block">5</span>
                </span>
                <span className="margin1-r">
                  <i className="iconfont icon-icon-42 margin05-r"/>
                  <span className="width04 inline-block">8</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <DividLine />
        <Popup isPopup={isPopup} popout={this.isShowPopup}>
          <div className="padding1 transparent">
            <Button className="bg-gray radius-mini font25">举报</Button>
            <Button onClick={this.isShowPopup} className="margin1-t radius-mini font25 font-bold">取消</Button>
          </div>
        </Popup>
      </div>
    )
  }
}

export default withRouter(DynamicItem)