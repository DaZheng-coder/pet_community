import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {isIOS} from '@/utils'
import './index.less'

class Avatar extends Component {
  state = {
    url: this.props.url
  }

  handleClick = (e) => {
    console.log('点击了')
    if (this.props.user) {
      // 如果是本机用户，修改头像
      this.input.click()
      const file = this.input
      if (isIOS() && file) {
        file.removeAttribute("capture")
      }
    } else {
      // 如果是其他用户，跳转到其他用户详情页
      console.log('这是其他用户喔')
    }
  }

  handleChange= (e) => {
    let reader = new FileReader()
    reader.onload = (e) => {
      this.setState({url: e.target.result})
      window.alert('更换头像成功')
    }
    reader.readAsDataURL(this.input.files[0])
  }

  render() {
    const {size} = this.props
    const {url} = this.state
    return (
      <div 
        className={`avatar flex-center ${size || 'normal'}`}
        onClick={this.handleClick}
        onChange={this.handleChange}
      >
        <img ref={dom=> this.img = dom} className="wh100" src={url} alt=""/>
        <input ref={dom => this.input = dom} type="file" id="file" accept="image/*" capture="camera" multiple/>
      </div>
    )
  }
}

export default withRouter(Avatar)
