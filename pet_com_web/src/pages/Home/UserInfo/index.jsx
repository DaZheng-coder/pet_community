import React, { Component } from 'react'
import Avatar from '@/components/Avatar/'
import HandleItem from '@/components/HandleItem/'
import Question from './Question/'
import './index.less'

export default class UserInfo extends Component {
  render() {
    return (
      <div className="userinfo-container">
        <div className="flex margin1-b">
          <div className="margin1-r">
            <Avatar />
          </div>
          <div className="flex1 flex-column">
            <div>
              <span className="line-center margin1-r font3 font-bolder">火焰犬</span>
              <span className="line-center font-gray">爱尔兰软毛梗</span>
            </div>
            <div>
              <span className="line-center margin1-r font-theme default-span"><i className="iconfont icon-icon-25"></i></span>
              <span className="line-center margin1-r default-span inline-block width1">1天</span>
              <span className="line-center margin1-r">已为你相伴2天~</span>
            </div>
          </div>
          <div>
            <span className="default-span">切换宠物</span>
          </div>
        </div>
        <div className="flex handle-list">
          <HandleItem text="提醒" iconClass="icon-xianxingshizhong" backgroundColor="gray"/>
          <HandleItem text="体重记录" iconClass="icon-xianxingtubiao" backgroundColor="gray"/>
          <HandleItem text="异常记录" iconClass="icon-xianxingwendangzhi" backgroundColor="gray"/>
          <HandleItem text="更多" iconClass="icon-icon-4" backgroundColor="gray"/>
        </div>
        <Question />
      </div>
    )
  }
}
