import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {isIOS,dataURLtoFile} from '@/utils'
import MiniLoading from '@/components/MiniLoading'
import UserDetail from '@/components/UserDetail'
import PubSub from 'pubsub-js'
import {apiUserUpdate} from '@/api/api'
import axios from 'axios'
import Popup from '@/components/Popup'
import './index.less'

class Avatar extends Component {
  state = {
    url: this.props.url,
    // 头像是否加载中
    isLoading: false,
    isPopup: false
  }

  isShowPopup = (e) => {
    e.stopPropagation()
    const {isPopup} = this.state
    this.setState({isPopup: !isPopup})
  }

  handleClick = (e) => {
    e.stopPropagation()
    if (this.props.noClick) {
      return 
    }
    if (this.props.user) {
      // 如果是本机用户，修改头像
      this.input.click()
      this.input.click()
      const file = this.input
      if (isIOS() && file) {
        file.removeAttribute("capture")
      }
    } else {
      // 如果是其他用户，跳转到其他用户详情页
      console.log('这是其他用户喔')
      this.isShowPopup(e)
    }
  }

  // 更换头像
  handleChange= (e) => {
    let reader = new FileReader()
    reader.onload = (e) => {
      // 先设置更新后的头像
      this.setState({url: e.target.result})
      // 设置加载中
      this.setState({isLoading: true})
      // 先上传头像
      const resFile = dataURLtoFile(e.target.result, 'pj' + Date.now() + '.jpg')
      const formData = new FormData()
      formData.append('file', resFile)
      axios({
        method: 'POST',
        url: "http://localhost:3000/web/api/upload",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(res => {
        // 上传头像成功，更新用户信息
        console.log('res.url', res.data)
        const body = {
          avatar: res.data
        }
        apiUserUpdate(this.props.app_user._id, body).then(res => {
          console.log('更换头像成功')
          this.setState({isLoading: false})
          PubSub.publish('updateDynamicList', 'restart')
        }).catch(err => {
          this.setState({isLoading: false})
          this.setState({url: this.props.url})
        })
        // this.setState
      }).catch(err => {
        this.setState({isLoading: false})
        this.setState({url: this.props.url})
      })
    }
    reader.readAsDataURL(this.input.files[0])
  }

  render() {
    const {size,_id} = this.props
    const {url,isLoading,isPopup} = this.state
    return (
      <div 
        className={`avatar flex-center ${size || 'normal'} ${this.props.className}`}
        onClick={this.handleClick}
        onChange={this.handleChange}
      >
        {
          url ? <img ref={dom=> this.img = dom} className="avatar-img" src={url} alt=""/> :
            <div className="no-avatar wh100"></div>
        }
        <input ref={dom => this.input = dom} type="file" id="file" accept="image/*" capture="camera" multiple/>
        <div className={`${isLoading ? '' : 'none'} avatar-loading`}>
          <MiniLoading />
        </div>
        <Popup isPopup={isPopup} popout={this.isShowPopup}>
          {isPopup && <UserDetail _id={_id}/>}
        </Popup>
      </div>
    )
  }
}

export default connect(state => ({app_user: state.user}))(withRouter(Avatar))
