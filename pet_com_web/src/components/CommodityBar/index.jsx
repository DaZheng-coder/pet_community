import React, { Component } from 'react'
import Timer from './Timer'
import './index.less'

export default class CommodityBar extends Component {
  state = {
    number: this.props.number
  }

  setNewNum = (number) => {
    const {id} = this.props
    this.setState({number}, () => this.props.setNewNum(number, id))
  }

  render() {
    const {inCart, id, name, price} = this.props
    const {number} = this.state
    // const {number,price} = this.state
    console.log('commodity', id, name, price, number)
    return (
      <div className={`padding1 commodity-bar-container flex bg ${this.props.className}`}>
        <img className="margin1-r commodity-bar-container-img" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2731574161,3391986480&fm=26&gp=0.jpg" alt="商品图片" />
        <div className="commodity-bar-container-info flex flex1 flex-column">
          <span className="font3">{name}</span>
          <div className="commodity-bar-container-info-price flex">
            <span className="font4 font-theme">￥{(parseFloat(price) * number).toFixed(2)}</span>
            {this.props.slot || (inCart && <Timer number={number} setNewNum={this.setNewNum}/>)}
          </div>
          {inCart ? '' : <span className="font-deep-gray">已选规格</span>}
        </div>
      </div>
    )
  }
}
