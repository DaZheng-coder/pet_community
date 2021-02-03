import React, { Component, Fragment } from 'react'
import Button from '@/components/Button'
import './index.less'
import {localStorageSet} from '@/utils'
import { withRouter } from 'react-router-dom'

class Footer extends Component {
  state = {
    commodity_id: 1
  }

  handleDelete = (e) => {
    e.stopPropagation()
    this.props.updateCommodityList(false, '', '', 'filter')
  }

  handleOnChange = (e) => {
    e.stopPropagation()
    const checked = e.target.checked
    this.props.updateCommodityList(false, 'checked', checked)
  }

  // 处理点击去结算按钮发生的事件
  handleSettlement = () => {
    const {cart} = this.props
    const orderList = cart.items.filter(item => item.checked == true)
    localStorageSet('orderList', orderList)
    this.props.history.push('/fillOrder')
  }

  // 确认是否有选择
  isSomeChecked = () => {
    const {cart} = this.props
    if (cart.items) {
      const orderList = cart.items.filter(item => item.checked === true)
      console.log('真假', orderList, orderList.length > 0)
      return orderList.length > 0
    } else {
      return false
    }
  }

  render() {
    const {totalPriceChecked: [totalPrice, isCheckedAll], mode} = this.props
    return (
      <div className="cart-footer bg padding05 flex">
        <label className="margin1-l" htmlFor="">
          <input type="checkbox" onChange={this.handleOnChange} checked={isCheckedAll} name="" value=""/>
          <span className="font3"> 全选</span>
        </label>
          <span className="margin1-l flex1">
            {
              mode ? <span /> : (
                <Fragment>
                  <span className="font3 font-deep-gray">合计：</span>
                  <span className="font3 font-bolder">￥{totalPrice}</span>
                </Fragment>
              )
            }
            
          </span>
        {
          mode ? <Button onClick={this.handleDelete} className="cart-footer-btn" type="danger">删除</Button> :
            <Button onClick={this.handleSettlement} className="cart-footer-btn" type={this.isSomeChecked() ? 'danger' : 'useless'}>去结算</Button>
        }
      </div>
    )
  }
}

export default withRouter(Footer)
