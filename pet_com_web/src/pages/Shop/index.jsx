import React, { Component } from 'react'
import NavBar from '@/components/NavBar'
import Item from '@/components/HandleItem/Item'
import Search from '@/components/Search'
import SwiperImg from '@/components/SwiperImg'
// import LinkageBar from '@/components/LinkageBar'
import SwiperContent from '@/components/SwiperContent'
import TabPage from '@/components/TabPage'
import GoodsItem from '@/components/GoodsItem'
import CartIcon from '@/components/CartIcon'

import {apiCategories, apiCommodities} from '@/api/api'

import './index.less'
import { withRouter } from 'react-router-dom'
class Shop extends Component {
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
    tabItems: ['全犬粮', '全猫粮', '主食猫粮', '零食猫粮', '猫砂厕所'],
    contentList: []
  }

  componentDidMount() {
    apiCategories().then(res => {
      const newTabItems = ['全部', ...(res.data.map(item => item.name))]
      // 传入分类信息
      const newContentList = res.data.map(item => <ShopContent {...item} />)
      const all = {_id: 1, name: '全部'}
      this.setState({tabItems:newTabItems})
      this.setState({contentList: [<ShopContent {...all}/> ,...newContentList]})
    })
  }

  getHeight = (height) => {
    this.setState({height})
  }

  render() {
    const {posterList, handleItem, tabItems, contentList, height} = this.state
    return (
      <div>
        <NavBar 
          leftSlot={
            <CartIcon color="white"/>
          } 
          centerSlot={<Search />} 
          bgColor="red"
          getHeight={this.getHeight}
        />
        <div className="page-pd bg">
          <SwiperImg imgsUrl={posterList} className="shop-container-imgs"/>
          {/* <div className="margin1-t shop-handle-items flex">
            {
              handleItem.map((item,index) => <div key={index} className="shop-handle-item"><Item text={item.title} url={item.icon}/></div>)
            }
          </div> */}
        </div>
        {/* {contentList.length > 0 && <LinkageBar slidesPerView={5} tabItems={tabItems} contentList={contentList} height={height}/>} */}
        {
          contentList.length > 0 && 
            <TabPage 
              height={height}
              titles={tabItems}
              tabList={contentList}
            />
        }
      </div>
    )
  }
}
class ShopContent extends Component {
  state = {
    commodities: [],
    // 分页信息
    page: -1
  }

  componentDidMount() {
    this.updateData()
  }

  // 更新商品数据
  updateData = () => {
    let {page} = this.state
    page++
    this.setState({page})
    this.getCommodities(page)
  }

  // 获取商品数据
  async getCommodities (page) {
    const {_id, name} = this.props
    const selector = name === '全部' ? '1' : _id
    // const {page} = this.state
    // 获取商品数据
    const res = await apiCommodities(selector, page)
    if (res) {
      this.setState({commodities: res.data})
    }
  }

  render() {
    const {commodities} = this.state
    return (
      // <SwiperContent>
        <div className="shop-content-container router-view">
          {
            commodities.length > 0 && commodities.map(commodity => <GoodsItem key={commodity._id} {...commodity}/>) 
          }
        </div>
      // </SwiperContent>
    )
  }
}

export default withRouter(Shop)

