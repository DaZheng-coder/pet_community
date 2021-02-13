import React, { Component } from 'react'
import CommonItem from './CommonItem'
import {apiCommonSecondDetail} from '@/api/api'
import './index.less'

export default class SecondCommonDetail extends Component {
  state = {
    commonList: [],
    activeId: 0
  }

  componentDidMount() {
    apiCommonSecondDetail(this.props.common_id).then(res => {
      this.computedResponseCommon(res.data)
    })
  }

  // 处理请求结果
  computedResponseCommon = (common) => {
    const {commonList} = this.state
    const newCommonList = [...commonList]
    newCommonList.push(common)
    this.setState({commonList:newCommonList})
    if (common.replyComm.length > 0) {
      for (let comm of common.replyComm) {
        console.log('开始计算')
        this.computedResponseCommon(comm)
      }
    }
  }

  // 更新用户信息
  updateCommonList = (common) => {
    const {commonList} = this.state
    this.setState({commonList: [...commonList, common]})
    this.setState({activeId: common._id})
    this.secComm.scrollTo(0, this.secComm.clientHeight)
  }

  render() {
    console.log('传进来的id',this.props.common_id)
    const {commonList,activeId} = this.state
    return (
      <div ref={c => this.secComm = c} className="scd-ctn bg">
        {
          commonList.length > 0 && commonList.map(common => 
            <CommonItem className={common._id == activeId ? 'active-animate' : ''} key={common._id} {...common} updateCommonList={this.updateCommonList}/>)
        }
      </div>
    )
  }
}