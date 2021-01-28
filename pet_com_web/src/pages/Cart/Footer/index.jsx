import React, { Component } from 'react'
import Button from '@/components/Button'
import './index.less'
import { withRouter } from 'react-router-dom'

class Footer extends Component {
  state = {
    commodity_id: 1
  }

  handleOnChange = (e) => {
    e.stopPropagation()
    const checked = e.target.checked
    this.props.updateCommodityList(false, 'checked', checked)
  }

  render() {
    const {commodity_id} = this.state
    const {totalPriceChecked: [totalPrice, isCheckedAll]} = this.props
    return (
      <div className="cart-footer bg padding05 flex">
        <label className="margin1-l" htmlFor="">
          <input type="checkbox" onChange={this.handleOnChange} checked={isCheckedAll} name="" value=""/>
          <span className="font3"> 全选</span>
        </label>
        <span className="margin1-l flex1">
          <span className="font3 font-deep-gray">合计：</span>
          <span className="font3 font-bolder">￥{totalPrice}</span>
        </span>
        <Button  onClick={() => this.props.history.push(`/fillOrder/${commodity_id}`)} className="cart-footer-btn" type="danger">去结算</Button>
      </div>
    )
  }
}

export default withRouter(Footer)
