import React, { Component } from 'react'
// import Swiper from "swiper"
import 'swiper/swiper-bundle.css'
import Nav from './Nav'
import LinkageBar from '@/components/LinkageBar'
import SwiperImg from './SwiperImg/'
import Content from './Content'
import './index.less'
export default class Community extends Component {
  state = {
    linkageBarProps: {
      tabItems: ['推荐','关注','动态','问答','话题','附近','宠物课堂'],
      slidesPerView: 6,
      contentList: [
        <Content type="recommend"/>,
        <Content type="follow"/>,
        <Content type="dynamic"/>,
        <Content type="qa" />,
        <Content type="topic" />,
        <Content type="nearby" />,
        <Content type="petClass" />
      ]
    }
  }

  render() {
    const {linkageBarProps} = this.state
    return (
      <div className="community-container">
        <Nav />
        <div className="navMask"></div>
        <SwiperImg />
        <LinkageBar {...linkageBarProps}/>
      </div>
    )
  }
}
