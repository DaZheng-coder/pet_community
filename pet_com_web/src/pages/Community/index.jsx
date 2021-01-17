import React, { Component } from 'react'
import Search from '@/components/Search/'
import './index.less'
export default class Community extends Component {
  render() {
    return (
      <div className="community-container">
        <header className="bg padding05 flex">
          <div className="flex1 margin1-lr">
            <Search backgroundColor="#eee"/>
          </div>
          <div className="margin1-r flex-center">
            <i className="iconfont icon-icon-13 font-bolder" />
          </div>
        </header>
        <div className="header-img">轮播图占位</div>
      </div>
    )
  }
}
