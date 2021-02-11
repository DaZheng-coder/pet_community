import React, { Component } from 'react'
import Avatar from '@/components/Avatar'
import {apiCommonSecondDetail} from '@/api/api'
import './index.less'

export default class SecondCommonDetail extends Component {
  state = {
    commonDetail: {}
  }

  componentDidMount() {
    apiCommonSecondDetail(this.props.common_id).then(res => {
      console.log('获取二级评论成功', res)
      // this.setState({commonDetail: res.data})
    })
  }

  render() {
    console.log('传进来的id',this.props.common_id)
    const {commonDetail} = this.state
    return (
      <div className="scd-ctn bg">
        
      </div>
    )
  }
}

class CommonItem extends Component {
  state = {
    isGood: true
  }

  render() {
    const {isGood} = this.state
    return (
      <div className="ci-ctn margin1-t">
        <div className="flex">
          <Avatar className="margin1-r" size="mini"/>
          <div className="flex flex-column">
            <span className="font3">评论发送者</span>
          </div>
        </div>
        <div className="ci-ctn-common font25">
          评论内容
        </div>
        <div className="ci-ctn-handle font25 flex space-between padding05">
          <span className="font-deep-gray">发送日期2021-15</span>
          <div>
            <span>
              <i className="iconfont icon-icon-73 margin05-r" />
              <span className="width04 inline-block">20</span>
            </span>
            <span>
              <i className={`${isGood ? '' : 'none'} iconfont margin05-r icon-icon-43`} />
              <i className={`${isGood ? 'none' : ''} iconfont margin05-r icon-icon-42`} />
              <span className="width04 inline-block">15</span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
