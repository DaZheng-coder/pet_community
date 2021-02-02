import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './index.less'

class CartIcon extends Component {
  render() {
    return (
      <div style={{color: this.props.color}} onClick={(e) => {
        e.stopPropagation()
        this.props.history.push('/cart')
        }} className="cart-icon flex flex1 flex-column flex-center">
        <i className="iconfont icon-icon-20" />
        <span>购物车</span>
      </div>
    )
  }
}


export default withRouter(CartIcon)
