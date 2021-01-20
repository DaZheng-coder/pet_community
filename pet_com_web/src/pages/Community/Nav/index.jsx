import React, { Component } from 'react'
import Search from '@/components/Search/'

export default class Nav extends Component {
  render() {
    return (
      <header className="bg padding05 flex">
        <div className="flex1 margin1-lr">
          <Search backgroundColor="#eee"/>
        </div>
        <div className="margin1-r flex-center">
          <i className="iconfont icon-icon-13 font-bolder" />
        </div>
      </header>
    )
  }
}
