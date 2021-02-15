import React, { Component } from 'react'
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import {nanoid} from 'nanoid'
import './index.less'

export default class CreateDynamic extends Component {

  state = {
    imgs: []
  }

  // 发送动态事件
  handleSendClick = (e) => {
    e.stopPropagation()
  }

  // 点击添加图片
  handleChange = (e, type='add',index) => {
    e.stopPropagation()
    console.log('添加图片')
    console.log('事件本身', e)
    const files = e.target.files
    for (let file of files) {
      let reader = new FileReader()
      reader.onload = (e) => {
        // 更换图片
        // this.setState({url: e.target.result})
        const {imgs} = this.state
        console.log('进入方法', e.target)
        if (type==='add') {
          this.setState({imgs: [...imgs,e.target.result]})
        } else if (type === 'replace') {
          const newImgs = imgs.map((img,idx) => 
            index === idx ? e.target.result : img
          )
          this.setState({imgs: newImgs})
        }
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
