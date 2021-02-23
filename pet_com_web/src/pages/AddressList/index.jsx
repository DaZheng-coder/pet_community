import React, { Component } from 'react'
import {connect} from 'react-redux'
import NavBar from '@/components/NavBar'
// import AddressItem from './AddressItem'
import Button from '@/components/Button'
import RightDelete from '@/components/RightDelete'
import './index.less'
import { withRouter } from 'react-router-dom'
import {apiAddressList, apiAddAddress, apiDeleteAddress} from '@/api/api'
import {localStorageSet} from '@/utils'
import PubSub from 'pubsub-js'
class AddressList extends Component {
  state = {
    // 模式，false为默认，true为编辑
    mode: false,
    // 地址列表
    addressList: []
  }

  componentDidMount() {
    // 初始化，获取用户的地址
    this.fetchAddressList()
  }

  // 获取地址列表
  fetchAddressList = () => {
    apiAddressList(this.props.user._id).then(res => {
      console.log('获取用户地址成功', res)
      this.setState({addressList: res.data})
    })
  }


  // 处理点击地址栏的事件
  handleClick = (e, _id) => {
    e.stopPropagation()
    const address = this.state.addressList.filter(item => item._id === _id)[0]
    console.log('选中了', address)
    localStorageSet('selectAddress', address)
    PubSub.publish('selectAddress', address)
    this.props.history.goBack()
  }

  // 切换编辑模式
  changeMode = (e) => {
    e.stopPropagation() 
    const {mode} = this.state
    this.setState({mode: !mode})
  }

  // 确认添加地址
  handleConfirm = (e) => {
    e.stopPropagation()
    this.changeMode(e)
    const address = {
      address: this.address.value,
      note: this.note.value,
      user_id: this.props.user._id
    }
    apiAddAddress(address).then(res => {
      console.log(res, '添加成功')
      this.fetchAddressList()
    })
  }

  // 删除地址
  handleDelete = (e, _id) => {
    e.stopPropagation()
    apiDeleteAddress(_id).then(res => {
      console.log('删除成功', res)
      this.fetchAddressList()
    })
  }

  render() {
    const {mode, addressList} = this.state
    console.log('组件加载')
    return (
      <div className="al-container">
        <NavBar title="选择地址" />
        <div className="margin1-t bg">
          {
            addressList.map(item => 
              <RightDelete onClick={(e) => this.handleClick(e,item._id)} onDeleteClick={(e) => this.handleDelete(e, item._id)} key={item._id}>
                <span className="font3">{item.address}</span>
                <div className="font-deep-gray">{item.note}</div>
              </RightDelete>)
          }
        </div>
        <div className="text-center margin1 font-deep-gray">{
          addressList.length > 0 ? '在地址栏右滑可删除，暂未开放编辑功能' : '地址为空，添加地址'
        }</div>
        {
          mode ? <div className="bg padding1 font3">
            <div className="font3 font-bolder">添加地址 ::::::</div>
            <div className="margin1-t">
              地址:<input ref={c => this.address = c} className="padding1-tb font3 block" type="text" placeholder="请输入地址"/>
              备注(可选):<input ref={c => this.note = c} className="font3 block margin1-t" type="text" placeholder="(可选)请输入备注"/>
            </div>
            <Button className="margin2-t" onClick={this.handleConfirm}>确认</Button>
          </div>:
          <Button className="margin1" onClick={this.changeMode}>添加地址</Button>
        }
      </div>
    )
  }
}

export default connect(state => ({user: state.user}))(withRouter(AddressList))
