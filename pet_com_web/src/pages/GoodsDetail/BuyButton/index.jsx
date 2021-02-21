import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './index.less'
import { connect } from 'react-redux'
import Toast from '@/components/Toast'
import {apiCartAddCommodity} from '@/api/api'
import {localStorageSet,localStorageGet} from '@/utils'

class BuyButton extends Component {
  handleAddCart = async (e) => {
    e.stopPropagation()
    if (localStorageGet('user') !== null) {
      const {_id, count} = this.props
      console.log('数量', count)
      console.log('加入购物车，商品_id', _id)
      apiCartAddCommodity(this.props.user._id, {_id,count}).then(res => {
        console.log('加入购物车结果', res)
        Toast.success('加入购物车成功', 2500)
      }) 
    } else {
      Toast.warning('请先登录', 2000)
    }
  }

  handleBuy = (e) => {
    e.stopPropagation()
    if (localStorageGet('user') !== null) {
      const {_id,name,cover,count,price} = this.props
      const orderList = [{_id,name,cover,count,price}]
      localStorageSet('orderList', orderList)
      this.props.history.push('/fillOrder')
    } else {
      Toast.warning('请先登录', 2000)
    }
  }

  render() {
    const {_id} = this.props
    return (
      <div className="goods-detail-popup-btn">
        <div onClick={this.handleAddCart} className="goods-detail-popup-btn-add">加入购物车</div>
        <div onClick={this.handleBuy} className="goods-detail-popup-btn-buy">立即购买</div>
      </div>
    )
  }
}

export default connect(state => ({user: state.user}))(withRouter(BuyButton))
