import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {localStorageGet} from '@/utils'
import Toast from '@/components/Toast'
import './index.less'

class CartIcon extends Component {

  handleClick = (e) => {
    e.stopPropagation()
    if (localStorageGet('user') !== null) {
      e.stopPropagation()
      this.props.history.push('/cart')
    } else {
      Toast.warning('请先登录', 1000)
    }
  }

  render() {
    return (
      <div style={{color: this.props.color}} onClick={this.handleClick} className="cart-icon flex flex1 flex-column flex-center">
        <i className="iconfont icon-icon-20" />
        <span>购物车</span>
      </div>
    )
  }
}


export default withRouter(CartIcon)
