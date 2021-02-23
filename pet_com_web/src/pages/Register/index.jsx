import React, { Component } from 'react'
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import InputItem from '@/components/InputItem'
import Toast from '@/components/Toast'
import {apiRegister} from '@/api/api'
import './index.less'
import { withRouter } from 'react-router-dom'
import {USER_PATTERN, PWD_PATTERN} from './constant'
import {apiIsExistUsername} from '@/api/api'

class Register extends Component {
  state = {
    usernameWrong: '',
    pwdWrong: '',
    confirmPwdWrong: ''
  }


  handleRegister = (e) => {
    e.stopPropagation()
    this.requestCreateNewUser({
      username: this.username.value,
      password: this.password.value
    })
  }

  // 用户名
  handleUsernameBlur = (e) => {
    e.stopPropagation()
    this.setState({usernameWrong: ''})
    const {value} = e.target
    if(!value) {
      this.setState({usernameWrong: '用户名不能为空'})
    } else if (!USER_PATTERN.test(value)) {
      this.setState({usernameWrong: '用户名必须由4~16个数字或字母构成'})
    } 
  }
  // 密码
  handlePwdBlur = (e) => {
    e.stopPropagation()
    this.setState({pwdWrong: ''})
    const {value} = e.target
    if(!value) {
      this.setState({pwdWrong: '密码不能为空'})
    } else if (!PWD_PATTERN.test(value)) {
      this.setState({pwdWrong: '密码必须由4~16个数字或字母构成'})
    } 
  }
  // 确认密码
  handleConfirmPwdBlur = (e) => {
    e.stopPropagation()
    this.setState({confirmPwdWrong: ''})
    const {value} = e.target
    if(!this.password.value) {
      this.setState({confirmPwdWrong: '请先输入密码'})
    } else if (!(this.password.value !== value)) {
      this.setState({confirmPwdWrong: '两次密码必须相同'})
    }  
  }

  requestCreateNewUser = (user) => {
    apiRegister(user).then(res => {
      Toast.success('注册成功', 1000)
      this.props.history.push('/login')
    }).catch(err => Toast.warning(err.message,1500))
  }

  render() {
    const {usernameWrong, pwdWrong, confirmPwdWrong} = this.state
    return (
      <div className="register-container">
        <NavBar noSticky />
        <div className="padding1">
          <h3>账号注册</h3>
          <div className="margin1-t">
            <InputItem refFun={c => this.username = c} onBlur={this.handleUsernameBlur} wrongMessage={usernameWrong} title="用户名" placeholder="请输入用户名"/>
            <InputItem refFun={c => this.password = c} onBlur={this.handlePwdBlur} wrongMessage={pwdWrong} title="密码" placeholder="请输入密码" type="password"/>
            <InputItem onBlur={this.handleConfirmPwdBlur} wrongMessage={confirmPwdWrong} title="确认密码" placeholder="请确认密码" type="password"/>
          </div>
          <Button onClick={this.handleRegister} type="danger" className="register-container-btn" >注册</Button>
        </div>
      </div>
    )
  }
}

export default withRouter(Register)
