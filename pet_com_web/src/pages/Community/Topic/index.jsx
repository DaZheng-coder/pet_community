import React, { Component } from 'react'
import TitleCard from './TitleCard'
import TopicItem from './TopicItem'
import './index.less'

export default class Topic extends Component {
  render() {
    return (
      <div className="bg padding1">
        <header className="flex topic-header padding1-lr">
          <TitleCard/>
          <TitleCard/>
          <TitleCard/>
        </header>
        <div className="padding2-t">
          <div className="font25">你可能感兴趣的话题</div>
          <TopicItem/>
          <TopicItem/>
          <TopicItem/>
        </div>
      </div>
    )
  }
}
