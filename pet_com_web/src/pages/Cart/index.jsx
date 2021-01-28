import React, { Component } from 'react'
import NavBar from '@/components/NavBar'
import CommodityBar from '@/components/CommodityBar'
import Footer from './Footer'
import './index.less'

export default class Cart extends Component {
  state = {
    commodityList: [
      {
        id: 1,
        name: '一号商品',
        price: '1800.32',
        number: 1,
        checked: true
      },
      {
        id: 2,
        name: '一号商品',
        price: '1800.95',
        number: 2,
        checked: false
      },
      {
        id: 3,
        name: '一号商品',
        price: '1800.23',
        number: 3,
        checked: false
      }
    ],
  }

  setNewNum = (newNumber, id) => {
    this.updateCommodityList(id, 'number', newNumber)
  }

  handleChecked = (e, id) =>{
    this.updateCommodityList(id, 'checked', e.target.checked)
  }

  computedTotalPrice = () => {
    let index = 0
    const {commodityList} = this.state
    const totalPrice = commodityList.map(commodity => {
      if (commodity.checked) {
        index++
        return parseFloat(commodity.price) * commodity.number
      } else {
        return 0
      }
    }).reduce((total, cur) => {
      console.log('index',index)
      console.log('commodityList.length', commodityList.length)
      return parseFloat(total) + parseFloat(cur)
    })
    return [totalPrice.toFixed(2), index == commodityList.length]
  }

  // 更新商品列表
  updateCommodityList = (id, key, value) => {
    const {commodityList} = this.state
    const newCommodityList = commodityList.map(commodity => {
      if (id) {
        if (commodity.id == id) {
          return Object.assign(commodity, {[key]:value})
        } else {
          return commodity
        }
      } else {
        return Object.assign(commodity, {[key]:value})
      }    
    })
    this.setState({commodityList:newCommodityList}, () => console.log('修改后',commodityList))
  }

  render() {
    const {commodityList} = this.state
    return (
      <div>
        <NavBar bgColor="red" color="#fff" title="购物车"
          rightSlot={
            <span style={{color: '#fff'}}>编辑</span>
          }
        />
        <div className="bg padding1">
          {
            commodityList.map(commodity => {
              return (
                <div key={commodity.id} className="flex cart-commodity-bar">
                  <input onChange={(e) => this.handleChecked(e,commodity.id)} checked={commodity.checked} type="checkbox" name="" value=""/>
                  <CommodityBar {...commodity} setNewNum={this.setNewNum} className="flex1" inCart/>
                </div>
              )
            })
          }
        </div>
        <Footer totalPriceChecked={this.computedTotalPrice()} updateCommodityList={this.updateCommodityList}/>
      </div>
    )
  }
}
