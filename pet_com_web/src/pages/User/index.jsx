import React, { Component, Fragment } from 'react'
import HandleBar from "@/components/HandleBar"
import NavBar from '@/components/NavBar'
import Avatar from '@/components/Avatar'
import Button from '@/components/Button'
import './index.less'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import Toast from '@/components/Toast'
import {localStorageGet} from '@/utils'
import {delete_user} from '@/redux/action/user'
class User extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    const user = localStorageGet('user') || this.props.user
    if (user._id) {  
      this.setState({user: user})
    } 
  }

  // 退出账号
  handleBtnClick = () => {
    this.props.delete_user()
    this.setState({user: null})
    this.props.history.replace('/community')
    Toast.success('退出成功', 1000)
  }

  render() {
    const {user} = this.state
    console.log('user', user)
    return (
      <div className="router-view">
        <NavBar leftSlot={false} rightSlot={
          <div className="flex">
            <i className="margin1-lr iconfont icon-icon-13" />
            <i onClick={() => this.props.history.push('/userSetting')} className="margin1-lr iconfont icon-icon-120" />
          </div>
        }/>
        <div className="user-container bg padding1-lr">
          <div className="flex padding1-tb">
            <div className="margin1-r">{user && <Avatar user={true} url={user.avatar}/>}</div>
            <div className="flex flex-column">
              {
                user ? <Fragment>
                  <span className="font3 font-bolder">{user.username}</span>
                  <span className="font1 font-deep-gray">用户id：{user._id}</span>
                </Fragment> : <Fragment>
                  <span className="font3">用户未登录，点击登录</span>
                </Fragment>
              }
              
            </div>
          </div>
          <div className="padding1-tb">
            <div className="padding1-tb"><span className="font3 font-bolder">更多</span></div>
            <div className="flex user-container-handle">
              <div onClick={() => this.props.history.push('/myCommon')} className="user-container-handle-item flex flex-column">
                <i className="iconfont icon-icon-5" />
                <span className="font-deep-gray">评论</span>
              </div>
              {/* <div className="user-container-handle-item flex flex-column">
                <i className="iconfont icon-icon-42" />
                <span className="font-deep-gray">我的赞</span>
              </div> */}
              <div onClick={() => this.props.history.push('/myDynamic')} className="user-container-handle-item flex flex-column">
                <i className="iconfont icon-icon-16" />
                <span className="font-deep-gray">我的动态</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="user-container-img flex-center padding1-tb">
          <img src="https://iconfont.alicdn.com/t/d19c38ab-7cb5-4e52-a709-2f19dbd6fece.png" alt="广告图片"/>
        </div> */}
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
        <Button type="danger" onClick={this.handleBtnClick} className="margin1 user-setting-btn" title="退出账号"/>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {delete_user}
)(withRouter(User))