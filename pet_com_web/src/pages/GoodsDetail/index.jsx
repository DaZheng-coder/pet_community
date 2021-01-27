import React, { Component } from 'react'
import SwiperImg from '@/components/SwiperImg'
import Nav from './Nav'
import HandleBar from '@/components/HandleBar'
import GoodsCommon from './GoodsCommon'

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

  handleScroll = (func) => {
    const top = this.topDom.getBoundingClientRect().top
    if(top >= 0) {
      func(false)
    } else {
      func(true)
    }
  }
  
  render() {
    const {imgsUrl} = this.state
    return (
      <div className="goods-detail-container">
        <Nav handleScroll={this.handleScroll}/>
        <div ref={c => this.topDom = c} id="goods" className="goods-detail-container-imgs"><SwiperImg imgsUrl={imgsUrl}/></div>
        <div className="bg padding1">
          <span className="font4 font-bolder font-theme">￥ 709.00</span>
          <div className="padding1-tb font-bold font3">超级无敌炫酷至尊独享plus max deep extra商品介绍 炫酷喜洋洋马拉松</div>
        </div>
        <div className="margin1-t">
          <HandleBar
            className="padding1"
            leftSlot={
              <span className="font-deep-gray">选择</span>
            }
            centerSlot={
              <span className="font25">数量：1件</span>
            }
          />
          <HandleBar
            className="padding1"
            leftSlot={
              <span className="font-deep-gray">服务</span>
            }
            centerSlot={
              <span className="font25">正品保证,99元包邮</span>
            }
          />
          <div id="goods-common" className="margin1-t">
            <HandleBar 
              className="padding1"
              leftSlot={
                <span className="font4">评价 （17）</span>
              }
              rightSlot={
                <span className="font-deep-gray">查看更多</span>
              }
            />
            <div>
              <GoodsCommon />
              <GoodsCommon />
            </div>
          </div>
          <div id="goods-detail" className="margin1-t bg padding1">
              <div className="font4">详情</div>
              <div className="padding1-tb">
                <img className="wh100" src="https://iconfont.alicdn.com/t/72a90ceb-8aa1-400a-932e-4fa7f0f0daf1.png" alt="商品详情信息" />
              </div>
          </div>
        </div>
      </div>
    )
  }
}
