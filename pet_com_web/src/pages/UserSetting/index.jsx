import React, { Component } from 'react'
import NavBar from '@/components/NavBar'
import Avatar from '@/components/Avatar'
import HandleBar from '@/components/HandleBar'

import './index.less'

export default class UserSetting extends Component {
  state = {
    user: {
      avatarUrl: 'https://iconfont.alicdn.com/t/0db0cc17-1fdd-4863-a334-6d4e37c65497.png',
      username: '小李'
    }
  }
  render() {
    const {user} = this.state
    return (
      <div>
        <NavBar title="个人信息"/>
        <HandleBar user title="头像" rightSlot={
          <Avatar user ref={c => this.avatar = c} size="mini" url={user.avatarUrl} />
        }/>
        <HandleBar title="昵称" rightSlot={
            <span className="text-gray">{user.username}</span>
          }
        />
      </div>
    )
  }
}
