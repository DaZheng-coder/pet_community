import React, { Component } from 'react'
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import InputItem from '@/components/InputItem'
import {apiRegister} from '@/api/api'
import './index.less'

export default class Register extends Component {

  handleRegister = (e) => {
    e.stopPropagation()
    const user = {
      username: this.username.value,
      password: this.password.value
    }
    console.log('用户信息', user)
    apiRegister(user).then(res => {
      console.log('成功注册新用户', res)
    })
  }

  render() {
    return (
      <div className="register-container">
        <NavBar noSticky />
        <div className="padding1">
          <h3>账号注册</h3>
          <div className="margin1-t">
            <InputItem refFun={c => this.username = c} title="用户名" placeholder="请输入用户名"/>
            <InputItem refFun={c => this.password = c} title="密码" placeholder="请输入密码" type="password"/>
            <InputItem refFun={c => this.confirmPassword = c} title="确认密码" placeholder="请确认密码" type="password"/>
          </div>
          <Button onClick={this.handleRegister} type="danger" className="register-container-btn" >注册</Button>
        </div>
      </div>
    )
  }
}
