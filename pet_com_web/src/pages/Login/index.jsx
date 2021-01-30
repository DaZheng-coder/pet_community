import React, { Component } from 'react'
import './index.less'
import NavBar from '@/components/NavBar'
import InputItem from '@/components/InputItem'
import Button from '@/components/Button'
import { withRouter } from 'react-router-dom'
import {apiLogin} from '@/api/api'

class Login extends Component {
  state = {
    formData: {
      username: null,
      password: null
    }
  }

  handleLogin = (e) => {
    e.stopPropagation()
    console.log('登录')
    console.log(this.username.value, this.password.value)
    const user = {
      username: this.username.value,
      password: this.password.value
    }
    apiLogin(user).then(res => {
      console.log('登录成功', res)
    })
  }

  render() {
    return (
      <div className="login-container">
        <NavBar noSticky rightSlot={<span onClick={() => this.props.history.push('/register')}>注册</span>}/>
        <div className="padding1">
          <h3>账号登录</h3>
          <div className="margin1-t">
            <InputItem refFun={c => this.username = c} title="用户名" placeholder="请输入用户名"/>
            <InputItem refFun={c => this.password = c} title="密码" placeholder="请输入密码" type="password"/>
          </div>
          <Button onClick={this.handleLogin} type="danger" className="login-container-btn" >登录</Button>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)