import React, { Component } from 'react'
import NavBar from '@/components/NavBar'
import HandleBar from '@/components/HandleBar'
import CommodityBar from '@/components/CommodityBar'
import Button from '@/components/Button'
import Bar from './Bar'
import {localStorageGet} from '@/utils'
import PubSub from 'pubsub-js'
import './index.less'

export default class FillOrder extends Component {
  state = {
    orderList: [],
    address: null
  }
  
  componentDidMount () {
    // 获取订单信息
    const orderList = localStorageGet('orderList')
    // 设置订单更新界面
    this.setState({orderList})

    const setAddress = this.setAddress
    // 订阅地址消息
    PubSub.subscribe('selectAddress', function (msg,data) {
      console.log('获取到地址', data)
      setAddress(data)
    })
  }

  componentWillUnmount() {
    // 取消消息订阅
    // PubSub.unsubscribe('selectAddress')
  }

  setAddress = (data) => {
    this.setState({address: data})
  }

  // 计算总价格
  computedTotalPrice () {
    const {orderList} = this.state
    const totalPrice = orderList.map(item => parseFloat(item.price) * item.count ).reduce((total, cur) => total + cur).toFixed(2)
    return totalPrice
  }

  componentWillUnmount() {
    // 删除订单信息
    localStorage.removeItem('cart')
  }

  render() {
    const {orderList, address} = this.state
    const totalPrice = orderList.length > 0 ? this.computedTotalPrice() : '0.00'
    return (
      <div>
        <NavBar bgColor="red" color="#fff" title="填写订单" />
        <div>
          <HandleBar className="fo-handleBar"
            click={() => this.props.history.push('/addressList')}
            leftSlot={
              address ? <div>
                <span className="font3">{address.address}</span>
                <div className="font-deep-gray">{address.note}</div>
              </div>:
              <span className="font3">请选择收货地址</span>
            }
          />
          <div className="padding1-tb bg margin1-t">
            {
              orderList && orderList.map((commodity,index) => 
                  <CommodityBar key={index} {...commodity} inCart slot={<span className="font4 font-deep-gray">x{commodity.count}</span>}/>
              )
            }
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
            {
              orderList.length === 1 && <Bar title="商品价格" text={`￥ ${parseInt(orderList[0].price).toFixed(2)}`} />
            }
            <Bar title="运费" text="￥ 0.00" />
            <HandleBar 
              leftSlot={<span>优惠券</span>}
              rightSlot={<span className="font25 font-bold font-theme">暂无</span>}
            />
            <div className="fo-price padding1 bg">
              <span className="font4 font-theme font-bold"> ￥{totalPrice}</span>
              <span className="font-deep-gray font4 font-bold">合计</span>
            </div>
          </div>
        </div>
        <footer className="fo-footer bg flex padding1">
          <span>总额：</span>
          <span className="font5 font-bolder font-theme flex1">￥{totalPrice}</span>
          <Button className="fo-footer-btn" type="danger">提交订单</Button>
        </footer>
      </div>
    )
  }
}
