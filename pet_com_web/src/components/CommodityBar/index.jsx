import React, { Component } from 'react'
import Timer from './Timer'
import './index.less'

export default class CommodityBar extends Component {
  render() {
    const {inCart} = this.props
    return (
      <div className="commodity-bar-container flex bg">
        <img className="margin1-r commodity-bar-container-img" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2731574161,3391986480&fm=26&gp=0.jpg" alt="商品图片" />
        <div className="commodity-bar-container-info flex flex1 flex-column">
          <span className="font3">商品标题</span>
          <div className="commodity-bar-container-info-price flex">
            <span className="font4 font-theme">￥709.00</span>
            {this.props.slot || (inCart && <Timer />)}
          </div>
          {inCart ? '' : <span className="font-deep-gray">已选规格</span>}
        </div>
      </div>
    )
  }
}
