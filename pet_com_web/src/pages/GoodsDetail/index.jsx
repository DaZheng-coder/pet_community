import React, { Component } from 'react'
import SwiperImg from '@/components/SwiperImg'
import Nav from './Nav'
import Popup from '@/components/Popup'
import HandleBar from '@/components/HandleBar'
import GoodsCommon from './GoodsCommon'
import CommodityBar from '@/components/CommodityBar'
import Timer from '@/components/CommodityBar/Timer'
import BuyButton from './BuyButton'
import Footer from './Footer'
import 'swiper/swiper-bundle.css'
import './index.less'
import { withRouter } from 'react-router-dom'

import {apiCommodity} from '@/api/api'

class GoodsDetail extends Component {
  state = {
    goodsInfo: null,
    isPopup: false
  }

  componentDidMount() {
    apiCommodity(this.props.match.params._id).then(res => {
      this.setState({goodsInfo: res.data})
      console.log('进入商品详细信息页面goodsInfo', this.state.goodsInfo)
    })
  }

  changeIsPopup= (e) => {
    e.stopPropagation()
    const {isPopup} = this.state
    this.setState({isPopup: !isPopup})
  }

  handleScroll = (func) => {
    const top = this.topDom.getBoundingClientRect().top
    func(!(top >= 0))
  }
  
  render() {
    const {isPopup} = this.state
    const {goodsInfo} = this.state
    return (
      <div className="goods-detail-container">
        <Nav handleScroll={this.handleScroll}/>
        <div ref={c => this.topDom = c} id="goods" className="goods-detail-container-imgs"><SwiperImg imgsUrl={goodsInfo && goodsInfo.swiperImgs}/></div>
        <div className="bg padding1">
          <span className="font4 font-bolder font-theme">￥ {goodsInfo && goodsInfo.price}</span>
          <div className="padding1-tb font-bold font3">{goodsInfo && goodsInfo.name}</div>
        </div>
        <div className="margin1-t">
          <HandleBar
            click={this.changeIsPopup}
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
                {
                  goodsInfo && goodsInfo.detailImgs.map((img,index) => <img key={index} className="wh100" src={img} alt="商品详情信息" />)
                }
              </div>
          </div>
          <Footer />
        </div>
        <Popup isPopup={isPopup} popout={this.changeIsPopup} >
          <div className="goods-detail-popup bg">
            <CommodityBar/>
            <div className="margin1-tb flex flex-between padding1">
              <span>购买数量</span>
              <Timer />
            </div>
            <div className="gd-buyButton">
              <BuyButton />
            </div>
          </div>
        </Popup>
      </div>
    )
  }
}

export default withRouter(GoodsDetail)
