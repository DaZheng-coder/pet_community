import React, { Component } from 'react'
import './index.less'

export default class GoodsCommon extends Component {
  render() {
    return (
      <div className="bg padding1">
        <div className="flex goods-common">
          <img className="goods-common-avatar" src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=701675442,1434096146&fm=111&gp=0.jpg" alt="头像图片" />
          <span className="font-deep-gray">评论者昵称</span>
        </div>
        <div className="padding1-tb">
          真不错，五星好评
        </div>
      </div>
    )
  }
}
