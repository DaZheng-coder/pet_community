import React, { Component } from 'react'
import HandleBar from "@/components/HandleBar"
import NavBar from '@/components/NavBar'
import Avatar from '@/components/Avatar'
import Button from '@/components/Button'
import './index.less'
import { withRouter } from 'react-router-dom'
class User extends Component {
  state = {
    user: {
      _id: '0001',
      username: '用户1号小王',
      avatarUrl: 'https://iconfont.alicdn.com/t/0db0cc17-1fdd-4863-a334-6d4e37c65497.png',
    }
  }
  render() {
    const {user} = this.state
    return (
      <div>
        <NavBar leftSlot={false} rightSlot={
          <div className="flex">
            <i className="margin1-lr iconfont icon-icon-13" />
            <i onClick={() => this.props.history.push('/userSetting')} className="margin1-lr iconfont icon-icon-120" />
          </div>
        }/>
        <div className="user-container bg padding1-lr">
          <div className="flex padding1-tb">
            <div className="margin1-r"><Avatar user={true} url={user.avatarUrl}/></div>
            <div className="flex flex-column">
              <span className="font3 font-bolder">{user.username}</span>
              <span className="font1 font-gray">用户id：{user._id}</span>
            </div>
          </div>
          <div className="padding1-tb">
            <div className="padding1-tb"><span className="font3 font-bolder">更多</span></div>
            <div className="flex user-container-handle">
              <div className="user-container-handle-item flex flex-column">
                <i className="iconfont icon-icon-5" />
                <span className="font-gray">评论</span>
              </div>
              <div className="user-container-handle-item flex flex-column">
                <i className="iconfont icon-icon-5" />
                <span className="font-gray">我的赞</span>
              </div>
              <div className="user-container-handle-item flex flex-column">
                <i className="iconfont icon-icon-5" />
                <span className="font-gray">提问</span>
              </div>
            </div>
          </div>
        </div>
        <div className="user-container-img flex-center padding1-tb">
          <img src="https://iconfont.alicdn.com/t/d19c38ab-7cb5-4e52-a709-2f19dbd6fece.png" alt="广告图片"/>
        </div>
        <div className="margin1-t bg padding1-lr">
          <div className="padding05-tb"><span className="font3 font-bold">常用功能</span></div>
          <div>
            <HandleBar iconClass="icon-icon-132" title="共享账号"/>
            <HandleBar iconClass="icon-icon-31" title="联系我们"/>
            <HandleBar iconClass="icon-icon-81" title="分享给好友"/>
            <HandleBar iconClass="icon-icon-122" title="去评分"/>
            <HandleBar iconClass="icon-icon-75" title="意见反馈"/>
            <HandleBar iconClass="icon-icon-94" title="用户协议"/>
            <HandleBar iconClass="icon-icon-83" title="隐私协议"/>
            <HandleBar iconClass="icon-icon-130" title="注销账号"/>
          </div>
        </div>
        <Button />
      </div>
    )
  }
}

export default withRouter(User)