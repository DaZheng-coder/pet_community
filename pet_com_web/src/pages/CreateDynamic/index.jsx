import React, { Component } from 'react'
import {connect} from 'react-redux'
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import {nanoid} from 'nanoid'
import {dataURLtoFile} from '@/utils'
import {apiDynamicCreate} from '@/api/api'
import PubSub from 'pubsub-js'
import axios from 'axios'
import './index.less'
import { withRouter } from 'react-router-dom'

class CreateDynamic extends Component {

  state = {
    imgs: []
  }

  // 发送动态事件
  handleSendClick = (e) => {
    e.stopPropagation()
    console.log('内容', this.textarea.value)
    const body = {
      user_id: this.props.app_user._id,
      text: this.textarea.value,
      imgs: this.state.imgs
    }
    apiDynamicCreate(body).then(res => {
      console.log('创建动态成功', res)
      // 重新刷新动态页面列表
      PubSub.publish('updateDynamicList', 'restart')
      this.props.history.replace('/community')
    })
  }

  // 点击添加图片
  handleChange = (e, type='add',index) => {
    e.stopPropagation()
    console.log('添加图片')
    console.log('事件本身', e)
    const files = e.target.files
    // const imageType = /^image\//
    for (let file of files) {
      // if(!imageType.test(file.type)) {
      //   console.log('请选择图片！')
      //   return 
      // }
      console.log('进入循环')
      let reader = new FileReader()
      console.log('读取文件')
      reader.onload = (e) => {
        // 更换图片
        const {imgs} = this.state
        console.log('进入事件')
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
          console.log('res.url', res)
          if (type==='add') {
            this.setState({imgs: [...imgs,res.data]})
          } else if (type === 'replace') { 
            const newImgs = imgs.map((img,idx) => 
              index === idx ? res.data : img
            )
            this.setState({imgs: newImgs})
          }
        })
        
        // 以下内容为测试
      }
      reader.readAsDataURL(file || null)
    }
  }

  // 删除图片
  handleDelete = (e,index) => {
    e.stopPropagation()
    console.log('点击了')
    const {imgs} = this.state
    const newImgs = imgs.filter((imgs,idx) => idx !== index)
    this.setState({imgs: newImgs})
  }

  render() {
    const {imgs} = this.state
    return (
      <div className="cd-ctn">
        <NavBar title="发布动态" 
          rightSlot={
            <Button 
              type="danger"
              onClick={this.handleSendClick} 
              className="cd-ctn-send-btn"
            >
              发布
            </Button>
          }
        />
        <div className="bg padding1">
          <textarea 
            ref={c => this.textarea = c} 
            rows="10"
            placeholder="分享新鲜事" 
            className="cd-btn-textarea" 
          />
          <div className="cd-btn-imgs">
            {
              imgs && imgs.map((img,index) => 
              <div key={nanoid()} className="cd-btn-picture-btn-bg">
                <img className="cd-btn-img" src={img} alt="动态图片"/>
                <input 
                className="cd-btn-picture-btn"
                onChange={(e) => this.handleChange(e,'replace', index)}
                ref={dom => this.input = dom} 
                type="file"  
                accept="image/*" 
                capture="camera" 
                multiple
                />
                <div onClick={(e) => this.handleDelete(e, index)} className="img-delete"><i className="iconfont icon-icon-59"/></div>
              </div>)
            }
            {
              imgs.length < 9 && 
              <div className="cd-btn-picture-btn-bg">
                <i className="iconfont icon-icon-106"/>
                <input 
                  className="cd-btn-picture-btn"
                  onChange={(e) => this.handleChange(e)}
                  ref={dom => this.input = dom} 
                  type="file"  
                  accept="image/*" 
                  capture="camera" 
                  multiple
                />
              </div>  
            }
            
          </div>          
        </div>
      </div>
    )
  }
}

export default connect(state => ({app_user: state.user}))(withRouter(CreateDynamic))