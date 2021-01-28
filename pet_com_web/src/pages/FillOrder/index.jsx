import React, { Component } from 'react'
import NavBar from '@/components/NavBar'
import HandleBar from '@/components/HandleBar'
import CommodityBar from '@/components/CommodityBar'
import Button from '@/components/Button'
import Bar from './Bar'
import './index.less'

export default class FillOrder extends Component {
  render() {
    return (
      <div>
        <NavBar bgColor="red" color="#fff" title="填写订单" />
        <div>
          <HandleBar className="fo-handleBar"
            leftSlot={
              <span className="font-deep-gray">请选择收货地址</span>
            }
          />
          <div className="padding1-tb bg margin1-t">
              <CommodityBar inCart slot={<span className="font4 font-deep-gray">x1</span>}/>
              <CommodityBar inCart slot={<span className="font4 font-deep-gray">x1</span>}/>
          </div>
          <div className="margin1-t">
            <HandleBar
              leftSlot={
                <div className="flex flex-column">
                  <span>订单备注</span>
                  <input className="margin1-t" type="text" placeholder="请输入你的备注" />
                </div>
              }
            />
            <Bar title="商品价格" text="￥ 709.00" />
            <Bar title="运费" text="￥ 0.00" />
            <HandleBar 
              leftSlot={<span>优惠券</span>}
              rightSlot={<span className="font25 font-bold font-theme">暂无</span>}
            />
            <div className="fo-price padding1 bg">
              <span className="font4 font-theme font-bold"> ￥709.00</span>
              <span className="font-deep-gray font4 font-bold">合计</span>
            </div>
          </div>
        </div>
        <footer className="fo-footer bg flex padding1">
          <span>总额：</span>
          <span className="font5 font-bolder font-theme flex1">￥709.00</span>
          <Button className="fo-footer-btn" type="danger">提交订单</Button>
        </footer>
      </div>
    )
  }
}
