import React, { Component } from 'react'
import BuyButton from '../BuyButton'
import './index.less'

export default class Footer extends Component {
  render() {
    return (
      <div className="gd-footer bg flex flex-between">
        <div className="flex flex1 flex-column flex-center">
          <i className="iconfont icon-icon-31" />
          <span>联系客服</span>
        </div>
        <div className="flex flex1 flex-column flex-center">
          <i className="iconfont icon-icon-20" />
          <span>购物车</span>
        </div>
        <div className="flex gd-footer-buy-btn">
          <BuyButton />
        </div>
      </div>
    )
  }
}
