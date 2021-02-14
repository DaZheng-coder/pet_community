import React, { Component } from 'react'
import {connect} from 'react-redux'
import NavBar from '@/components/NavBar'
import {apiCommonMyList} from '@/api/api'
import './index.less'

class MyCommon extends Component {

  state = {
    commonList: []
  }

  componentDidMount () {
    apiCommonMyList(this.props.app_user._id).then(res => {
      console.log('获取个人评论列表成功', res)
      this.setState({commonList: res.data})
    })
  }

  render() {
    const {commonList} = this.state
    return (
      <div>
        <NavBar title="我的评论"/>
        <div>
          {
            commonList && commonList.map(common => <div className="common-item bg flex">
              <div className="common-item-content">
                {common.text}
              </div>
              <div className="common-item-text">
                <span>{common.updatedAt}</span>
                <span>赞数: {common.good.length}</span>
              </div>
            </div>)
          }
        </div>
      </div>
    )
  }
}

export default connect(state => ({app_user: state.user}))(MyCommon)