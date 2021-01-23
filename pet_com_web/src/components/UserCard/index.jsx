import React, { Component } from 'react'
import Avatar from '@/components/Avatar'
import './index.less'

export default class UserCard extends Component {
  render() {
    const {id,username,avatarUrl, className} = this.props
    return (
      <div className={`usercard-container flex flex-column flex-center${this.props.className || ''}`}>
        <div className="margin05-b">
          <Avatar url={avatarUrl}/>
        </div>
        <span className="font25 font-bolder margin05-b">{username}</span>
        <div className="usercard-container-button">关注</div>
      </div>
    )
  }
}
