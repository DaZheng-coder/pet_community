import React, { Component } from 'react'
import Avatar from '@/components/Avatar'
import './index.less'

export default class UserCard extends Component {
  render() {
    return (
      <div className=" usercard-container flex flex-column flex-center">
        <div className="margin05-b">
          <Avatar/>
        </div>
        <span className="font25 font-bolder margin05-b">大王哈哈哈</span>
        <div className="usercard-container-button">关注</div>
      </div>
    )
  }
}
