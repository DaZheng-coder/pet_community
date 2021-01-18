import React, { Component } from 'react'
import './index.less'

export default class TopicItem extends Component {
  render() {
    return (
      <div className="flex margin1-tb">
        <div className="topicitem-img margin05-r"></div>
        <div className="flex flex-column flex1">
          <span className="font3 font-bold">养宠后的变化</span>
          <span className="font-gray">因为毛孩子的到来，不知不觉就有了改变</span>
        </div>
        <div className="flex-center">
          <span className="dynamic-container-handle-focus">+ 关注</span>
        </div>
      </div>
    )
  }
}
