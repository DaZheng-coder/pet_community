import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {nanoid} from 'nanoid'
import Avatar from '@/components/Avatar'
import {apiUserDetail,apiDynamicMyList,apiFollow} from '@/api/api'
import DynamicItem from '@/components/DynamicItem'
import './index.less'

class UserDetail extends Component {
  state = {
    userInfo: {},
    DynamicList: []
  }

  componentDidMount() {
    this.getUserInfo()
    this.getDynamicList()
  }

  // 获取用户详细信息
  getUserInfo = () => {
    console.log('userDetailProps', this.props)
    if (this.props._id) {
      console.log('获取请求')
      // 如果有传入用户id，则发送请求
      apiUserDetail(this.props._id).then(res => {
        console.log('获取用户信息成功', res)
        this.setState({userInfo: res.data})
      })
    } else {
      // 如果没有传入用户id,打印警告
      console.log('用户详细信息UserDetail没有通过props传入用户id')
    }
    
  }

  // 获取动态列表
  getDynamicList = () => {
    apiDynamicMyList(this.props._id).then(res => {
      console.log('获取动态列表成功', res)
      this.setState({DynamicList: res.data})
    })
  }

  // 点击关注
  handleFollowClick = (e) => {
    e.stopPropagation()
    // 发送关注请求
    apiFollow(this.props.app_user._id, this.props._id).then(res => {
      console.log('关注成功', res)
      this.getUserInfo()
    })
  }

  render() {
    const {userInfo,DynamicList} = this.state
    console.log('userInfo', userInfo)
    return (
      <div onClick={(e) => e.stopPropagation()} className="ud-ctn">
        <div className="ud-ctn-title">用户信息</div>
        {/* 用户头像、用户名、id */}
        <div className="ud-ctn-bg">
          <div className="ud-ctn-user-info">
            <Avatar key={nanoid()} noClick url={userInfo.avatar}/>
            {/* <img className="ud-ctn-user-info-avatar" url={userInfo.avatar} alt="头像"/> */}
            <div className="ud-ctn-user-info-username-a-id">
              <span className="font3 font-bold">{userInfo.username}</span>
              <span className="font-deep-gray">ID: {userInfo._id}</span>
            </div>
            <div className="ud-ctn-user-info-follow">
              <div onClick={this.handleFollowClick} className="ud-ctn-user-info-follow-btn">{
                userInfo.fans && userInfo.fans.filter(item => item == this.props.app_user._id).length > 0 ? '取消关注' : '关注'
              }</div>
            </div>
          </div>
          {/* 用户动态、关注、粉丝统计 */}
          <div className="ud-ctn-user-number">
            <div className="ud-ctn-user-item">
              <span className="font3 font-bold">{DynamicList.length}</span>
              <span>动态</span>
            </div>
            <div className="ud-ctn-user-item">
              <span className="font3 font-bold">{userInfo.follow && userInfo.follow.length}</span>
              <span>关注</span>
            </div>
            <div className="ud-ctn-user-item">
              <span className="font3 font-bold">{userInfo.fans && userInfo.fans.length}</span>
              <span>粉丝</span>
            </div>
          </div>
        </div>
        {/* 动态显示 */}
        <div className="ud-ctn-dynamic-list">
          <div className="ud-ctn-dynamic-list-title">动态</div>
          {/* 动态列表显示 */}
          <div className="ud-ctn-dynamic-list-content">
            {
              DynamicList.length > 0 && DynamicList.map(dynamic => <DynamicItem key={dynamic._id} {...dynamic} notShowUser/>)
            }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({app_user: state.user}))(withRouter(UserDetail))
