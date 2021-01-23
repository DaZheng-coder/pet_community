import React, { Component } from 'react'
import Avatar from '@/components/Avatar/'
import DividLine from '@/components/DividLine/'
import './index.less'

export default class ArticleItem extends Component {
  render() {
    const {id, title, brief, user, views, date, img} = this.props
    return (
      <div className="article-item margin1-tb">
        <div className="font3 font-bolder margin1-b">{title}</div>
        <div className="flex margin1-b">
          <div className="flex1 flex flex-column">
            <div className="flex margin05-b">
              <div className="margin05-r">
                <Avatar size="mini" url={user && user.avatarUrl}/>
              </div>
              <div className="flex flex-column">
                <span className="font-gray">{user && user.username}</span>
              </div>
            </div>
            <div className="flex1">
              <span className="font25">{brief}</span>
            </div>
            <div>
              <span className="font-gray">阅读次数: {views}次 {date}</span>
            </div>
          </div>
          <div className="article-item-img">
            <img className="wh100" src={img} alt="文章附图"/>
          </div>
        </div>
        <DividLine/>
      </div>
    )
  }
}
