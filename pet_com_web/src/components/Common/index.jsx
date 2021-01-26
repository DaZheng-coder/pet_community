import React, { Component } from 'react'
import Avatar from '@/components/Avatar'
import DynamicItem from '@/components/DynamicItem'
import './index.less'

export default class Common extends Component {
  state = {
    secondCommon: true
  }

  render() {
    return (
      <div>
        <DynamicItem notShowUser>
          <div className="flex">
            <div className="margin1-r"><Avatar size="mini"/></div>
            <div className="flex flex1 flex-column">
              <div className="common-header flex">
                <div>
                  <div className="font25">用户名</div>
                  <div className="font-gray">2020-01-25 15:16:23</div>
                </div>
                <i className="iconfont icon-icon-47"></i>
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
      </div>
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
