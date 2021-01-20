import React, { Component } from 'react'
import Search from '@/components/Search'
import './index.less'

export default class ShopNav extends Component {
  render() {
    return (
      <header className="shop-nav bg padding05 flex">
        <div className="margin1-lr flex-center flex-column">
          <i className="font-white iconfont icon-icon-20" />
          <span className="font-white">购物车</span>
        </div>
        <div className="flex1 margin1-lr">
          <Search backgroundColor="#fff"/>
        </div>
        <div className="margin1-lr flex-center flex-column">
          <i className="iconfont icon-icon-11 font-white" />
          <span className="font-white">订单</span>
        </div>
      </header>
    )
  }
}
