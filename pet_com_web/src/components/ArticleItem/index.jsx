import React, { Component } from 'react'
import Avatar from '@/components/Avatar/'
import DividLine from '@/components/DividLine/'
import './index.less'

export default class ArticleItem extends Component {
  render() {
    return (
      <div className="article-item margin1-tb">
        <div className="font3 font-bolder margin1-b">新生犬如何护理？</div>
        <div className="flex margin1-b">
          <div className="flex1 flex flex-column">
            <div className="flex margin05-b">
              <div className="margin05-r">
                <Avatar size="mini"/>
              </div>
              <div className="flex flex-column">
                <span className="font-gray">铲屎官官方</span>
              </div>
            </div>
            <div className="flex1">
              <span className="font25">新生犬如何护理的简介</span>
            </div>
            <div>
              <span className="font-gray">阅读次数: 725次 2020-08-17</span>
            </div>
          </div>
          <div className="article-item-img"></div>
        </div>
        <DividLine/>
      </div>
    )
  }
}
