import React, { Component } from 'react'
import {connect} from 'react-redux'
import NavBar from '@/components/NavBar'
import CommodityBar from '@/components/CommodityBar'
import Footer from './Footer'
import {apiCartList,apiUpdateCartList} from '@/api/api'
import './index.less'

class Cart extends Component {
  state = {
    // 当前为什么模式,0为正常浏览，1位编辑
    mode: 0,
    commodityList: [],
    cart: {}
  }

  componentDidMount() {
    // 获取购物车列表
    apiCartList(this.props.user._id).then(res => {
      console.log('获取购物车列表',res.data.items)
      this.setState({commodityList: res.data.items})
      this.setState({cart: res.data}, () => console.log('cart', this.state.cart))
    })
  }

  // 切换编辑模式
  changeMode = (e) => {
    e.stopPropagation()
    const {mode} = this.state
    this.setState({mode: !mode})
  }

  // 设置新的数量
  setNewNum = (newNumber, id) => {
    this.updateCommodityList(id, 'count', newNumber)
  }

  // 处理是否选中
  handleChecked = (e, id) =>{
    this.updateCommodityList(id, 'checked', e.target.checked)
  }

  // 计算总价格
  computedTotalPrice = () => {
    // 该索引用于计数checked商品数量，判断是否全选
    let index = 0
    const commodityList = this.state.cart.items
    const totalPrice = commodityList && commodityList.length > 0 && commodityList.map(commodity => {
      console.log('*************进入循环')
      if (commodity.checked) {
        index++
        return parseFloat(commodity.price) * commodity.count
      } else {
        return 0
      }
    }).reduce((total, cur) => {
      console.log('index',index)
      console.log('commodityList.length', commodityList.length,total)
      return parseFloat(total) + parseFloat(cur)
    })
    console.log('总价格', totalPrice)
    return totalPrice ?  [totalPrice.toFixed(2), index == commodityList.length] : [0, false]
  }

  // 更新商品列表
  updateCommodityList = (_id, key, value,method='map') => {
    const {commodityList} = this.state
    const newCommodityList = commodityList[method](commodity => {
      // 过滤掉没有选中的商品
      if(method == 'filter') {
        return commodity.checked !== true
      }
      // map,_id值用于判断当前是否全选或者未全选
      if (_id) {
        // 如果有这件商品，找到这个商品并修改对应key值
        if (commodity._id == _id) {
          return Object.assign(commodity, {[key]:value})
        } else {
          return commodity
        }
      } else {
        console.log('全选', value)
        return Object.assign(commodity, {[key]:value})
      }    
    })
    this.setState({commodityList:newCommodityList})
    const {cart} = this.state
    const newCart = Object.assign(cart, {items: newCommodityList})
    console.log('新的', newCart)
    apiUpdateCartList(this.props.user._id, newCart).then(res => {
      console.log('更新数据成功', res)
    })
  }

  render() {
    const {commodityList, mode, cart} = this.state
    return (
      <div>
        <NavBar bgColor="red" color="#fff" title="购物车"
          rightSlot={
            <span onClick={this.changeMode} style={{color: '#fff'}}>{mode ? '完成' : '编辑'}</span>
          }
        />
        {
          commodityList.length > 0 ? 
            <div className="bg padding1">
              {
                commodityList.map(commodity => {
                  return (
                    <div key={commodity._id} className="flex cart-commodity-bar">
                      <input onChange={(e) => this.handleChecked(e,commodity._id)} checked={commodity.checked} type="checkbox" name="" value=""/>
                      <CommodityBar {...commodity} setNewNum={this.setNewNum} className="flex1" inCart/>
                    </div>
                  )
                })
              }
            </div> :
            <span>购物车没有数据喔</span>
        }
        <Footer mode={mode} cart={cart} totalPriceChecked={this.computedTotalPrice()} updateCommodityList={this.updateCommodityList}/>
      </div>
    )
  }
}

export default connect(state => ({user: state.user}))(Cart)
