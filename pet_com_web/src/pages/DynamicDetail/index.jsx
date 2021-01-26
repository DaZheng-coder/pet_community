import React, { Component } from 'react'
import NavBar from '@/components/NavBar'
import Avatar from '@/components/Avatar'
import DynamicItem from '@/components/DynamicItem'
import Common from '@/components/Common'
import './index.less'

export default class DynamicDetail extends Component {
  state = {
    user: {
      username: '小赵',
      avatarUrl: 'https://iconfont.alicdn.com/t/eda32ded-1960-4b0a-b99f-5bff9e9e7ab4.png'
    },
    dynamicDetail: {
      text: '小流氓',
      imgs: [
        'https://iconfont.alicdn.com/t/3590deff-837f-44d8-884c-d365bafcef25.png'
      ]
    }
  }

  // 处理导航栏更多按钮点击事件
  handleMoreClick = () => {
    console.log('点击了更多')
  }
  render() {
    const {user,dynamicDetail} = this.state
    return (
      <div>
        <NavBar 
          centerSlot={
            <div className="nav-user-info flex">
              <Avatar className="margin05-r" size="mini" url={user.avatarUrl}/>
              <span>{user.username}</span>
            </div>
          }
          rightSlot={
            <i className="iconfont icon-icon-47" onClick={this.handleMoreClick}/>
          } 
        />
        <div className="bg padding1-lr">
          <DynamicItem isDetail notShowUser content={dynamicDetail}>
            <div className="font-gray margin1-t">2020-10-21 10:20:21</div>
          </DynamicItem>
        </div>
        <div className="padding1 font-gray">共 3 条评论</div>
        <div className="padding1-lr bg">
          <Common />
        </div>
      </div>
    )
  }
}
