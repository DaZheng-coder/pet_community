import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import BuyButton from '../BuyButton'
import CartIcon from '@/components/CartIcon'
import './index.less'

class Footer extends Component {
  render() {
    const {_id,name,price,cover,count} = this.props
    const btnProps = {_id,name,price,cover,count}
    return (
      <div className="gd-footer bg flex flex-between">
        <div className="flex flex1 flex-column flex-center">
          <i className="iconfont icon-icon-31" />
          <span>联系客服</span>
        </div>
        <CartIcon/>
        <div className="flex gd-footer-buy-btn">
          <BuyButton {...btnProps}/>
        </div>
      </div>
    )
  }
}

export default  withRouter(Footer)
