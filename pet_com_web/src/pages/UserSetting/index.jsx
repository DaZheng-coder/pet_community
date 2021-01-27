import React, { Component } from 'react'
import NavBar from '@/components/NavBar'
import Avatar from '@/components/Avatar'
import HandleBar from '@/components/HandleBar'
import Button from '@/components/Button'

import './index.less'

export default class UserSetting extends Component {
  state = {
    user: {
      avatarUrl: 'https://iconfont.alicdn.com/t/0db0cc17-1fdd-4863-a334-6d4e37c65497.png',
      username: '小李'
    }
  }

  // 修改用户名
  handleUsernameClick = () =>{
    const result = prompt()
    const newUser = Object.assign(this.state.user, {username: result})
    result && this.setState({user: newUser})
  }

  // 修改密码
  handlePwdClick = () => {
    console.log('修改密码')
  }

  render() {
    const {user} = this.state
    return (
      <div>
        <NavBar title="个人信息"/>
        <HandleBar user title="头像" rightSlot={
          <Avatar user size="mini" url={user.avatarUrl} />
        }/>
        <HandleBar title="昵称" rightSlot={
            <span className="text-gray">{user.username}</span>
          }
          click={this.handleUsernameClick}
        />
        <img className="wh100 padding1 bg" src="https://iconfont.alicdn.com/t/f56e524b-3d06-45ca-9578-0aad90737191.png" alt="个人设置背景"/>
        <Button type="danger" className="user-setting-btn" click={this.handlePwdClick} title="更换密码"/>
      </div>
    )
  }
}
