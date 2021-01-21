import React, { Component } from 'react'
import Nav from './Nav'
import HandleTab from './HandleTab'
import Avatar from '@/components/Avatar'
import './index.less'
export default class User extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className="user-container bg padding1-lr">
          <div className="flex padding1-tb">
            <div className="margin1-r"><Avatar /></div>
            <div className="flex flex-column">
              <span className="font3 font-bolder">手机用户225238号</span>
              <span className="font1 font-gray">用户id: 2266669</span>
            </div>
          </div>
          <div className="padding1-tb">
            <div className="padding1-tb"><span className="font3 font-bolder">更多</span></div>
            <div className="flex user-container-handle">
              <div className="user-container-handle-item flex flex-column">
                <i className="iconfont icon-icon-5" />
                <span className="font-gray">评论</span>
              </div>
              <div className="user-container-handle-item flex flex-column">
                <i className="iconfont icon-icon-5" />
                <span className="font-gray">评论</span>
              </div>
              <div className="user-container-handle-item flex flex-column">
                <i className="iconfont icon-icon-5" />
                <span className="font-gray">评论</span>
              </div>
            </div>
          </div>
        </div>
        <div className="margin1-t bg padding1-lr">
          <div className="padding05-tb"><span className="font3 font-bold">常用功能</span></div>
          <div>
            <HandleTab iconClass="icon-icon-132" title="共享账号"/>
            <HandleTab iconClass="icon-icon-132" title="共享账号"/>
            <HandleTab iconClass="icon-icon-132" title="共享账号"/>
            <HandleTab iconClass="icon-icon-132" title="共享账号"/>
          </div>
        </div>
      </div>
    )
  }
}
