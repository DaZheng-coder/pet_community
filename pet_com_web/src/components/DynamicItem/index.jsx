import React, { Component } from 'react'
import Avatar from '@/components/Avatar/'
import DividLine from '@/components/DividLine/'
import './index.less'

export default class DynamicItem extends Component {
  render() {
    return (
      <div className=" dynamic-container">
        <div className="dynamic-container-padding">
          <div className="flex">
            <div className="margin1-r">
              <Avatar/>
            </div>
            <div className="flex flex1 flex-column">
              <span className="font3 font-bolder">宇哥哥的碧海蓝天</span>
              <span className="font-gray">2020-10-28 19:35:42</span>
            </div>
            <div className="dynamic-container-handle">
              <span className="dynamic-container-handle-focus">+ 关注</span>
            </div>
          </div>
          <div className="dynamic-container-content">
            <div>
              <div className="dynamic-container-content-text font-bold">最爱小松鼠玩具~</div>
              <div className="dynamic-container-content-imgs">
                {/* 图片 */}
                <div className="dynamic-container-content-imgs-item"></div>
                <div className="dynamic-container-content-imgs-item"></div>
                <div className="dynamic-container-content-imgs-item"></div>
                <div className="dynamic-container-content-imgs-item"></div>
                <div className="dynamic-container-content-imgs-item"></div>
              </div>
            </div>
            <div className="dynamic-container-content-handle flex margin2-t">
              <div className="dynamic-container-content-handle-tags flex1">
                <span className="dynamic-container-content-handle-tag"># 我的养宠日记</span>
              </div>
              <div>
                <span className="margin1-r">
                  <i className="iconfont icon-icon-73 margin05-r" />
                  <span className="width04 inline-block">5</span>
                </span>
                <span className="margin1-r">
                  <i className="iconfont icon-icon-42 margin05-r"/>
                  <span className="width04 inline-block">8</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <DividLine />
      </div>
    )
  }
}
