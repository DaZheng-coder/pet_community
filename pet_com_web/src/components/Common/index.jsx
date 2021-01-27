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
    isPopup: this.props.isPopup
  }

  componentDidMount() {
    // 把是否显示popup方法传给父组件
    this.props.getIsShowPopup && this.props.getIsShowPopup(this.isShowPopup)
  }

  // 是否显示popup
  isShowPopup = (e) => {
    e.stopPropagation()
    const {isPopup} = this.state
    this.setState({isPopup: !isPopup})
  }

  render() {
    const {isPopup} = this.state
    return (
      <Fragment>
        <div>
          <DynamicItem isDetail notShowUser>
            <div className="flex">
              <div className="margin1-r"><Avatar size="mini"/></div>
              <div className="flex flex1 flex-column">
                <div className="common-header flex">
                  <div>
                    <div className="font25">用户名</div>
                    <div className="font-gray">2020-01-25 15:16:23</div>
                  </div>
                  <i className="iconfont icon-icon-47" onClick={this.isShowPopup}></i>
                </div>
                <div className="common-content margin1-t">
                  <span>评论内容</span>
                  {
                    this.state.secondCommon && (
                      <div>
                        <SecondCommon />
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </DynamicItem>
          <Popup isPopup={isPopup} popout={this.isShowPopup}>
            <div className="padding1 transparent">
              <Button className="bg-gray radius-mini font25">举报</Button>
              <Button onClick={this.isShowPopup} className="margin1-t radius-mini font25 font-bold">取消</Button>
            </div>
          </Popup>
        </div>
        <EditCommonBar />
      </Fragment>
    )
  }
}

class SecondCommon extends Component {
  render() {
    return (
      <div className="margin1-t second-common padding1 flex bg-gray">
        <a className="font-blue">评论者</a>
        <span>: 评论内容</span>
      </div>
    )
  }
}
