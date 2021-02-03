import React, { Component, Fragment } from 'react'
import {localStorageGet} from '@/utils'
import Button from '@/components/Button'
import './index.less'

export default class BuySuccess extends Component {
  state = {
    order: null
  }

  componentDidMount() {
    // 获取订单信息
    const order = localStorageGet('order')
    this.setState({order})
  }

  componentWillUnmount() {
    localStorage.removeItem('order')
  }

  render() {
    const {order} = this.state
    return (
      <div className="bg router-view">
        <div className="success-container">
          <i className="margin1-r success-i iconfont icon-icon-60" />
          <h3>购买成功</h3>
        </div>
        <div className="padding1">
          {
            order && 
              <Fragment>
                <div>
                  <span className="margin1-r">订单编号:</span>
                  <span>{order._id}</span>
                </div>
                <div>
                  <span className="margin1-r">用户名：</span>
                  <span>{order.username}</span>
                </div>
                <div>
                  <span className="margin1-r">用户id：</span>
                  <span>{order.user_id}</span>
                </div>
                <div>
                <div>
                  <span className="margin1-r">收货地址：</span>
                  <span>{order.address}</span>
                </div>
                <div>
                  <span className="margin1-r">收货备注：</span>
                  <span>{order.note}</span>
                </div>
                <div>
                  <span className="margin1-r">实付金额：</span>
                  <span>{order.totalPrice}</span>
                </div>
                  <span className="margin1-r">购物信息:</span>
                  <div className="margin1-l">
                    {
                      order.commodities.map((commodity,index) => 
                        <div key={index} className="flex space-between">
                          <span>{commodity.name} x {commodity.count}</span>
                          <span>{(parseInt(commodity.price) * commodity.count).toFixed(2)}</span>
                        </div>)
                    }
                  </div>
                </div>
              </Fragment>
              
          }
        </div>
        <Button onClick={() => this.props.history.replace('/shop')} className=" margin2-lr">点击跳转到商城首页</Button>
      </div>
    )
  }
}
