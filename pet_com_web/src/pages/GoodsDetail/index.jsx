import React, { Component } from 'react'
import SwiperImg from '@/components/SwiperImg'
import 'swiper/swiper-bundle.css'
import './index.less'

export default class GoodsDetail extends Component {
  state = {
    imgsUrl: [
      'https://iconfont.alicdn.com/t/0c69570a-c540-4515-bf04-fa2c5461275a.png',
      'https://iconfont.alicdn.com/t/f4159424-c5cf-4bda-860a-b54b34cb4614.png',
      'https://iconfont.alicdn.com/t/d923bb17-0d09-4198-8ce9-9b793639b3dc.png'
    ]
  }
  
  componentDidMount() {
  }
  
  render() {
    const {imgsUrl} = this.state
    return (
      <div className="goods-detail-container">
        <div className="goods-detail-container-imgs"><SwiperImg imgsUrl={imgsUrl}/></div>
      </div>
    )
  }
}
