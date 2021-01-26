import React, { Component } from 'react'
import NavBar from '@/components/NavBar'
import Item from '@/components/HandleItem/Item'
import Search from '@/components/Search'
import SwiperImg from '@/components/SwiperImg'
import LinkageBar from '@/components/LinkageBar'
import GoodsItem from '@/components/GoodsItem'
import './index.less'
export default class Shop extends Component {
  state = {
    height: 0,
    posterList: [
      'https://iconfont.alicdn.com/t/31a43374-e29e-4ead-aa09-3cda3f70ca3d.png',
      'https://iconfont.alicdn.com/t/4a760730-42c9-4b07-8e56-4a1acba374ad.png',
      'https://iconfont.alicdn.com/t/04c2eeec-1fbb-448c-ae00-4ae2aa580ecd.png'
    ],
    handleItem: [
      {
        title: '狗狗主粮',
        icon: 'https://iconfont.alicdn.com/t/12296081-a642-4e44-b627-1c7749508382.png'
      },
      {
        title: '狗狗零食',
        icon: 'https://iconfont.alicdn.com/t/2ec81da8-f896-4ca7-8165-24643aef5d31.png'
      },
      {
        title: '狗狗保健',
        icon: 'https://iconfont.alicdn.com/t/a3158f33-08ff-4c76-a6a4-da4e6f3ef534.png'
      },
      {
        title: '狗狗药品',
        icon: 'https://iconfont.alicdn.com/t/a3158f33-08ff-4c76-a6a4-da4e6f3ef534.png'
      },
      {
        title: '狗狗玩具',
        icon: 'https://iconfont.alicdn.com/t/a3158f33-08ff-4c76-a6a4-da4e6f3ef534.png'
      },
      {
        title: '猫咪主粮',
        icon: 'https://iconfont.alicdn.com/t/a3158f33-08ff-4c76-a6a4-da4e6f3ef534.png'
      },
      {
        title: '猫咪药品',
        icon: 'https://iconfont.alicdn.com/t/a3158f33-08ff-4c76-a6a4-da4e6f3ef534.png'
      },
      {
        title: '猫咪保健',
        icon: 'https://iconfont.alicdn.com/t/a3158f33-08ff-4c76-a6a4-da4e6f3ef534.png'
      },
      {
        title: '猫咪零食',
        icon: 'https://iconfont.alicdn.com/t/a3158f33-08ff-4c76-a6a4-da4e6f3ef534.png'
      },
      {
        title: '更多',
        icon: 'https://iconfont.alicdn.com/t/2a902e59-cdc0-4317-8711-f4ad2119c087.png'
      }
    ],
    linkageBarProps: {
      tabItems: ['全犬粮', '全猫粮', '主食猫粮', '零食猫粮', '猫砂厕所'],
      slidesPerView: 5,
      contentList: [
        <ShopContent/>,
        <ShopContent/>,
        <ShopContent/>,
        <ShopContent/>,
        <ShopContent/>
      ]
    }
  }

  getHeight = (height) => {
    this.setState({height})
  }

  render() {
    const {posterList, handleItem, linkageBarProps, height} = this.state
    return (
      <div className="bg">
        <NavBar 
          leftSlot={
            <div className="text-center flex-column">
              <i className="font-white iconfont icon-icon-20" />
              <span className="font-white">购物车</span>
            </div>
          } 
          centerSlot={<Search />} 
          rightSlot={
            <div className="text-center flex-column">
              <i className="iconfont icon-icon-11 font-white" />
              <span className="font-white">订单</span>
            </div>
          }
          bgColor="red"
          getHeight={this.getHeight}
        />
        <div className="page-pd">
          <SwiperImg imgsUrl={posterList} className="shop-container-imgs"/>
          <div className="margin1-t shop-handle-items flex">
            {
              handleItem.map((item,index) => <div key={index} className="shop-handle-item"><Item text={item.title} url={item.icon}/></div>)
            }
          </div>
        </div>
        <LinkageBar {...linkageBarProps} height={height}/>
      </div>
    )
  }
}
class ShopContent extends Component {
  render() {
    return (
      <div className="padding1-lr shop-content-container">
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
      </div>
    )
  }
}

