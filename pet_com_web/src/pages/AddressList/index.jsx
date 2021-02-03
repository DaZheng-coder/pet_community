import React, { Component } from 'react'
import NavBar from '@/components/NavBar'
import AddressItem from './AddressItem'
import RightDelete from '@/components/RightDelete'
import './index.less'

export default class AddressList extends Component {
  render() {
    console.log('组件加载')
    return (
      <div className="al-container">
        <NavBar title="选择地址"/>
        <div className="margin1-t bg">
          <RightDelete>内容</RightDelete>
          <RightDelete>内容</RightDelete>
          <RightDelete>内容</RightDelete>
        </div>
      </div>
    )
  }
}
