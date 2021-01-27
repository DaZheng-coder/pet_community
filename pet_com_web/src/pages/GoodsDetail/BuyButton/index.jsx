import React, { Component } from 'react'
import './index.less'

export default class BuyButton extends Component {
  state = {
    commodity_id: 1
  }

  render() {
    const {commodity_id} = this.state
    return (
      <div className="goods-detail-popup-btn">
        <div className="goods-detail-popup-btn-add">加入购物车</div>
        <div onClick={() => this.props.history.push(`/fillOrder/${commodity_id}`)} className="goods-detail-popup-btn-buy">立即购买</div>
      </div>
    )
  }
}
