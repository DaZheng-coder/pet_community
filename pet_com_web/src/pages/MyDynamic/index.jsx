import React, { Component } from 'react'
import {connect} from 'react-redux'
import NavBar from '@/components/NavBar'
import {apiDynamicMyList} from '@/api/api'
import './index.less'

class MyDynamic extends Component {

  state = {
    dynamicList:[]
  }

  componentDidMount () {
    apiDynamicMyList(this.props.app_user._id).then(res => {
      console.log('获取动态列表成功', res)
    })
  }

  render() {
    return (
      <div>
        <NavBar title="我的动态"/>
      </div>
      
    )
  }
}

export default connect(state => ({app_user: state.user}))(MyDynamic)
