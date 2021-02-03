import React, { Component } from 'react'
import {connect} from 'react-redux'
import NavBar from '@/components/NavBar'
import HandleBar from '@/components/HandleBar'
import CommodityBar from '@/components/CommodityBar'
import Button from '@/components/Button'
import Bar from './Bar'
import {localStorageSet,localStorageGet} from '@/utils'
import {apiAddOrder} from '@/api/api'
import PubSub from 'pubsub-js'
import './index.less'
import { withRouter } from 'react-router-dom'

class FillOrder extends Component {
  state = {
    orderList: [],
    address: null,
    totalPrice: 0
  }
  
  componentDidMount () {
    // 获取订单信息
    const orderList = localStorageGet('orderList')
    // 设置订单更新界面
    this.setState({orderList}, this.computedTotalPrice)

    const setAddress = this.setAddress
    // 订阅地址消息
    PubSub.subscribe('selectAddress', function (msg,data) {
      console.log('获取到地址', data)
      setAddress(data)
    })
  }

  componentWillUnmount() {
    // 删除订单信息
    localStorage.removeItem('cart')
  }

  // 处理点击了提交订单事件
  handleBuyOrder = (e) => {
    e.stopPropagation()
    const order = {
      user_id: this.props.user._id,
      username: this.props.user.username,
      totalPrice: this.state.totalPrice,
      commodities: this.state.orderList,
      address: this.state.address.address,
      note: this.state.address.note
    }
    apiAddOrder(order).then(res => {
      localStorageSet('order', res.data)
      this.props.history.replace('/buySuccess')
    })
  }

  setAddress = (data) => {
    this.setState({address: data})
  }

  // 计算总价格
  computedTotalPrice () {
    const {orderList} = this.state
    const totalPrice = orderList.map(item => parseFloat(item.price) * item.count ).reduce((total, cur) => total + cur).toFixed(2)
    this.setState({totalPrice})
  }

  render() {
    const {orderList, address, totalPrice} = this.state
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
          <Button onClick={this.handleBuyOrder} className="fo-footer-btn" type={address ? 'danger' : 'useless'}>提交订单</Button>
        </footer>
      </div>
    )
  }
}

export default connect(state => ({user: state.user}))(withRouter(FillOrder))
