import React, { Component } from 'react'
import NavBar from '@/components/NavBar'
import Avatar from '@/components/Avatar'
import DynamicItem from '@/components/DynamicItem'
import {apiDynamicDetail} from '@/api/api'
import Common from '@/components/Common'
// import PubSub from 'pubsub-js'
import './index.less'

export default class DynamicDetail extends Component {
  state = {
    dynamicDetail: {},
    user: {}
  }
  
  componentDidMount () {
    this.getDynamicDetail()
  }

  // 获取动态详情
  getDynamicDetail = () => {
    apiDynamicDetail(this.props.match.params.id).then(res => {
      this.setState({dynamicDetail: res.data})
      this.setState({user: res.data.user})
    })
  }

  // 从子组件中获取子组件的popup方法
  getIsShowPopup = (func) => {
    this.isShowPopup = func
  }

  // 处理导航栏更多按钮点击事件
  handleMoreClick = (e) => {
    this.isShowPopup(e)
  }
  render() {
    const {
      dynamic,
      commonList
    } = this.state.dynamicDetail
    const {user} = this.state
    return (
      <div className="router-view">
        <NavBar 
          centerSlot={
            <div className="nav-user-info flex">
              {user.avatar && <Avatar className="margin05-r" size="mini" url={user.avatar}/>}
              <span>{user.username}</span>
            </div>
          }
          rightSlot={
            <i className="iconfont icon-icon-47" onClick={this.handleMoreClick}/>
          } 
        />
        <div className="bg padding1-lr">
          {dynamic && <DynamicItem isDetail notShowUser {...dynamic}>
            <div className="font-deep-gray margin1-t">{dynamic.content.updatedAt}</div>
          </DynamicItem>}
        </div>
        <div className="padding1 font-deep-gray">共 {dynamic && dynamic.commonNum} 条评论</div>
        <div className="padding1-lr bg">
          {dynamic && <Common dynamic_id={dynamic._id} commonList={commonList} getIsShowPopup={this.getIsShowPopup}/>}
        </div>
      </div>
    )
  }
}
