import React, { Component } from 'react'
import './index.less'

export default class GoodsItem extends Component {
  render() {
    return (
      <div className={`bg goodsitem-container margin1-b ${this.props.className ||''}`}>
        <div className="goodsitem-container-img"></div>
        <div className="goodsitem-container-title font3 font-bolder">
          tiki cat积极烧烤系列无谷物
          全年龄猫咪营养湿粮猫罐头
          烧烤系列-沙丁鱼+龙虾 80g每罐
        </div>
        <div className="font25 flex">
          ￥11.9
          <div className="font1 font-gray">￥12.9</div>
        </div>
        <div className="goodsitem-container-price">
          <span className="font-gray">销量：17</span>
          <i className="iconfont icon-icon-20"></i>
        </div>
      </div>
    )
  }
}
