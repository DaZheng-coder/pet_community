import React, { Component, Fragment } from 'react'
import Avatar from '@/components/Avatar'
import Popup from '@/components/Popup'
import Button from '@/components/Button'
import EditCommonBar from '@/components/EditCommonBar'
import DynamicItem from '@/components/DynamicItem'
import './index.less'

export default class Common extends Component {
  state = {
    secondCommon: true,
    isPopup: this.props.isPopup,
    commonIsPopup: false,
    commonList: this.props.commonList
  }

  componentDidMount() {
    // 把是否显示popup方法传给父组件
    this.props.getIsShowPopup && this.props.getIsShowPopup(this.isShowPopup)
  }

  // 处理点击评论区的评论的事件，显示二级评论详细信息
  handleSecCommonClick = (e) => {
    e.stopPropagation()
    console.log('显示二级评论详细信息')
    this.isShowCommonPopup(e)
  }

  // 更新评论列表
  updateCommonList = (common) => {
    console.log('common', common)
    const {commonList} = this.state
    this.setState({commonList: [common,...commonList]})
  }

  // 是否显示popup
  isShowPopup = (e) => {
    e.stopPropagation()
    const {isPopup} = this.state
    this.setState({isPopup: !isPopup})
  }

  // 是否显示次级评论区
  isShowCommonPopup = (e) => {
    e.stopPropagation()
    const {commonIsPopup} = this.state
    this.setState({commonIsPopup: !commonIsPopup})
  }

  // 添加次级评论
  addSecondCommon = (secCommon) => {
    const {commonList} = this.state
    console.log('添加次级评论', secCommon)
    // 找到添加评论后的那条评论
    const newCommonList = commonList.map(common => {
      if (common._id === secCommon.dynamic.content.parent) {
        const secCommonList = common.secCommonList
        if (common.secCommonList.length > 0) {
          common.secCommonList = [secCommon, ...secCommonList].slice(0,3)
        } else {
          common.secCommonList.push(secCommon)
        }
        return common
      } else {
        return common
      }
    })
    this.setState({commonList: newCommonList})
  }

  render() {
    const {isPopup,commonList,commonIsPopup} = this.state
    console.log('commonList', commonList)
    return (
      <Fragment>
        <div>
          {commonList && commonList.length > 0 ? commonList.map(common => <DynamicItem 
            key={common._id}
            addSecondCommon={this.addSecondCommon}
            isDetail isCommon notShowUser {...common}>
            <div className="flex">
              <div className="margin1-r"><Avatar size="mini" url={common.user.avatar} /></div>
              <div className="flex flex1 flex-column">
                <div className="common-header flex">
                  <div>
                    <div className="font25">{common && common.user.username}</div>
                    <div className="font-gray">{common && common.dynamic.content.updatedAt}</div>
                  </div>
                  <i className="iconfont icon-icon-47" onClick={this.isShowPopup}></i>
                </div>
                <div onClick={this.handleSecCommonClick} className="common-content margin1-t">
                  <span>{common.dynamic.content.text}</span>
                  {
                    common && common.secCommonList && common.secCommonList.slice(0,2).map(secCommon => 
                        <SecondCommon key={secCommon._id} {...secCommon}/>
                    )
                  }
                </div>
              </div>
            </div>
          </DynamicItem>) : 
          <span className="padding1 font25 flex-center">评论区空空的，点击下方添加评论吧</span>}
          <Popup isPopup={isPopup} popout={this.isShowPopup}>
            <div className="padding1 transparent">
              <Button className="bg-gray radius-mini font25">举报</Button>
              <Button onClick={this.isShowPopup} className="margin1-t radius-mini font25 font-bold">取消</Button>
            </div>
          </Popup>
          {/* 次级评论区 */}
          <Popup isPopup={commonIsPopup} popout={this.isShowCommonPopup}>
            <SecondCommonDetail />
          </Popup>
        </div>
        <EditCommonBar dynamic_id={this.props.dynamic_id} update={this.updateCommonList}/>
      </Fragment>
    )
  }
}

class SecondCommon extends Component {
  render() {
    const {dynamic, user} = this.props
    return (
      <div className="margin1-t second-common padding1 flex bg-gray">
        <a className="font-blue">{user.username}</a>
        <span>: {dynamic.content.text}</span>
      </div>
    )
  }
}

class SecondCommonDetail extends Component {
  render() {
    return (
      <div className="margin1-t second-common padding1 flex bg-gray">
        {/* <a className="font-blue">评论者</a>
        <span>: 评论内容</span> */}
      </div>
    )
  }
}
