import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './index.less'

class GoodsItem extends Component {
  gotoGoodsDetail = (e) => {
    e.stopPropagation()
    this.props.history.push(`/goodsDetail/${this.props._id}`)
  }

  render() {
    const {cover, name, price, discountPrice,sales} = this.props
    return (
      <div onClick={this.gotoGoodsDetail} className={`bg goodsitem-container margin1-b ${this.props.className ||''}`}>
        <div className="goodsitem-container-img hidden">
          <img className="wh100" src={cover} alt="" />
        </div>
        <div className="goodsitem-container-title font3 font-bolder">
          {name}
        </div>
        <div className="font25 flex">
          ￥{discountPrice}
          <div className="font1 font-deep-gray">￥{price}</div>
        </div>
        <div className="goodsitem-container-price">
          <span className="font-deep-gray">销量：{sales}</span>
          <i className="iconfont icon-icon-20"></i>
        </div>
      </div>
    )
  }
}

export default withRouter(GoodsItem)
