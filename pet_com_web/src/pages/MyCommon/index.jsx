import React, { Component } from 'react'
import {connect} from 'react-redux'
import NavBar from '@/components/NavBar'
import RightDelete from '@/components/RightDelete'
import {apiCommonMyList,apiCommonDelete} from '@/api/api'
import './index.less'

class MyCommon extends Component {

  state = {
    commonList: []
  }

  componentDidMount () {
    this.getCommonList()
  }

  // 获取评论
  getCommonList = () => {
    apiCommonMyList(this.props.app_user._id).then(res => {
      console.log('获取个人评论列表成功', res)
      this.setState({commonList: res.data})
    })
  }

  // 删除评论
  handleDelete = (e, _id) => {
    e.stopPropagation()
    apiCommonDelete(_id).then(res => {
      console.log('删除评论成功呢', res)
      this.getCommonList()
    })
  }

  render() {
    const {commonList} = this.state
    return (
      <div>
        <NavBar title="我的评论" />
        <div className="padding1">*左滑即可删除</div>
        <div>
          {
            commonList && commonList.map(common => <RightDelete
              className="margin1-tb"
              key={common._id}
              onDeleteClick={(e) => this.handleDelete(e, common._id)}
            >
              <div className="common-item bg flex">
                <div className="common-item-content">
                  {common.text}
                </div>
                <div className="common-item-text">
                  <span>{common.updatedAt}</span>
                  <span>赞数: {common.good.length}</span>
                </div>
              </div>
            </RightDelete>)
          }
        </div>
      </div>
    )
  }
}

export default connect(state => ({app_user: state.user}))(MyCommon)