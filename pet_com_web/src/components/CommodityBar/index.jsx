import React, { Component } from 'react'
import Timer from './Timer'
import './index.less'

export default class CommodityBar extends Component {
  state = {
    count: this.props.count
  }

  setNewNum = (count) => {
    const {_id} = this.props
    this.setState({count}, () => this.props.setNewNum(count, _id))
  }

  render() {
    console.log('commodityBar~~~~~~~~~', this.props)
    const {inCart, _id, name, cover, price} = this.props
    const {count} = this.state
    // const {count,price} = this.state
    console.log('commodity', this.props,_id, name, price, count)
    return (
      <div className={`padding1 commodity-bar-container flex bg ${this.props.className}`}>
        <img className="margin1-r commodity-bar-container-img" src={cover} alt="商品图片" />
        <div className="commodity-bar-container-info flex flex1 flex-column">
          <span className="font3">{name}</span>
          <div className="commodity-bar-container-info-price flex">
            <span className="font4 font-theme">￥{inCart ? (parseFloat(price) * count).toFixed(2) : parseFloat(price).toFixed(2)}</span>
            {this.props.slot || (inCart && <Timer number={count} setNewNum={this.setNewNum}/>)}
          </div>
          {inCart ? '' : <span className="font-deep-gray">已选规格</span>}
        </div>
      </div>
    )
  }
}
