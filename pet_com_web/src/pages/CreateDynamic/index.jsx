import React, { Component } from 'react'
import {connect} from 'react-redux'
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import {nanoid} from 'nanoid'
import {dataURLtoFile} from '@/utils'
import {apiDynamicCreate} from '@/api/api'
import MiniLoading from '@/components/MiniLoading'
import {basicUrl} from '@/api/index'
import PubSub from 'pubsub-js'
import axios from 'axios'
import './index.less'
import { withRouter } from 'react-router-dom'

class CreateDynamic extends Component {

  state = {
    imgs: [],
    // 正在加载的图片索引
    loadingIdx: null
  }

  // 发送动态事件
  handleSendClick = (e) => {
    e.stopPropagation()
    const body = {
      user_id: this.props.app_user._id,
      text: this.textarea.value,
      imgs: this.state.imgs
    }
    apiDynamicCreate(body).then(res => {
      // 重新刷新动态页面列表
      PubSub.publish('updateDynamicList', 'restart')
      this.props.history.replace('/community')
    })
  }

  // 点击添加图片
  handleChange = (e, type='add',index) => {
    e.stopPropagation()
    const files = e.target.files
    // const imageType = /^image\//
    for (let file of files) {
      // if(!imageType.test(file.type)) {
      //   console.log('请选择图片！')
      //   return 
      // }
      let reader = new FileReader()
      reader.onload = (e) => {
        // 更换图片
        // 本地更换，并设置加载中
        const {imgs} = this.state
        const newImgs = [...imgs, e.target.result]
        if (type==='add') {
          this.setState({imgs: [...imgs,newImgs]})
        } else if (type === 'replace') { 
          const newImgs = imgs.map((img,idx) => 
            index === idx ? e.target.result : img
          )
          this.setState({imgs: newImgs})
        }
        this.setState({loadingIdx: index})
        // 处理图片
        const resFile = dataURLtoFile(e.target.result, 'pj' + Date.now() + '.jpg')
        const formData = new FormData()
        formData.append('file', resFile)
        this.setState({})
        // 发送请求
        axios({
          method: 'POST',
          url: `${basicUrl}/upload`,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(res => {
          this.setState({loadingIdx: null})
          if (type==='add') {
            this.setState({imgs: [...imgs,res.data]})
          } else if (type === 'replace') { 
            const newImgs = imgs.map((img,idx) => 
              index === idx ? res.data : img
            )
            this.setState({imgs: newImgs})
          }
        })
      }
      reader.readAsDataURL(file || null)
    }
  }

  // 删除图片
  handleDelete = (e,index) => {
    e.stopPropagation()
    const {imgs} = this.state
    const newImgs = imgs.filter((imgs,idx) => idx !== index)
    this.setState({imgs: newImgs})
  }

  render() {
    const {imgs,loadingIdx} = this.state
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
                <div className={`${loadingIdx === index ? '' : 'none'} img-loading`}>
                  <MiniLoading />
                </div>
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