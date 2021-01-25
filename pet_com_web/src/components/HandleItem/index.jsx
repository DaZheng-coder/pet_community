import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Item from './Item'
import './index.less'

class HandleItem extends Component {
  render() {
    if(this.props.type) {
      const {type} = this.props
      switch(type) {
        case 'tips':
          return (
            <Item text="提醒">
              <img className="wh100" src="https://iconfont.alicdn.com/s/a5b6a6c9-d219-4cf1-af45-75a914e6de26_origin.svg" alt="提醒图标"/>
            </Item>
          )
        case 'weightRecord':
          return (
            <Item text="体重记录">
              <img className="wh100" src="https://iconfont.alicdn.com/s/0d4244d7-92bb-40e0-b627-c6940b92d437_origin.svg" alt="体重记录"/>
            </Item>
          )
        case 'wrongRecord':
          return (
            <Item text="异常记录">
              <img className="wh100" src="https://iconfont.alicdn.com/s/d93a7074-ceda-4a56-992e-15260a9c27ae_origin.svg" alt="异常记录"/>
            </Item>
          )
        case 'petMedicalRecord':
          return (
            <Item text="宠物病历">
              <img className="wh100" src="https://iconfont.alicdn.com/s/b11c707a-19ed-4d1f-8679-65ccdf66b838_origin.svg" alt="宠物病历"/>
            </Item>
          )
        case 'notes':
          return (
            <Item text="记事">
              <img className="wh100" src="https://iconfont.alicdn.com/t/63239314-5906-4cac-88f6-04c946449b60.png" alt="记事"/>
            </Item>
          )
        case 'bookKeeping':
          return (
            <Item text="记账">
              <img className="wh100" src="https://iconfont.alicdn.com/t/2ead837d-1323-42d5-91e5-765c60e2327d.png" alt="记账"/>
            </Item>
          )
        case 'petWalking':
          return (
            <Item text="溜宠">
              <img className="wh100" src="https://iconfont.alicdn.com/t/aa8abbe2-2c6e-4374-b427-3c8d3d27a3c0.png" alt="溜宠"/>
            </Item>
          )
        case 'storeGoods':
          return (
            <Item text="囤货">
              <img className="wh100" src="https://iconfont.alicdn.com/t/a7f0ff1b-cb9e-41a6-a666-47f58622a822.png" alt="囤货"/>
            </Item>
          )
        case 'more':
          return (
            <Item text="更多" click={() => {this.props.history.push('/more')}}>
              <img className="wh100" src="https://iconfont.alicdn.com/s/17e0faf3-c359-4f86-997a-935499e69683_origin.svg" alt="更多"/>
            </Item>
          )
        case 'edit':
          return (
            <Item text="编辑" click={this.props.click || null}>
              <div className="radius05 padding05 handle-item-edit"><i className="iconfont icon-icon-56 font-white"></i></div>
            </Item>
          )
        default:
          return <Item {...this.props}/>
      }
    }
  }
}

export default withRouter(HandleItem)