import React, { Component } from 'react'
// import Swiper from "swiper"
import 'swiper/swiper-bundle.css'
// import Nav from './Nav'
import NavBar from '@/components/NavBar'
import Search from '@/components/Search'
import LinkageBar from '@/components/LinkageBar'
import SwiperImg from '@/components/SwiperImg/'
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
      ],
    },
    // 录播的海报路径
    posterList: [
      'https://iconfont.alicdn.com/t/31a43374-e29e-4ead-aa09-3cda3f70ca3d.png',
      'https://iconfont.alicdn.com/t/4a760730-42c9-4b07-8e56-4a1acba374ad.png',
      'https://iconfont.alicdn.com/t/04c2eeec-1fbb-448c-ae00-4ae2aa580ecd.png'
    ],
    // 达到什么高度时吸顶，默认单位为px
    height: 0
  }

  // 获取导航栏高度
  getHeight = (height) =>{
    this.setState({height})
  }

  render() {
    const {linkageBarProps, posterList, height} = this.state
    return (
      <div className="community-container">
        <NavBar leftSlot={false} centerSlot={<Search bgColor={'rgb(248,248,248)'}/>} getHeight={this.getHeight} rightSlot={<i className="iconfont icon-icon-13 font-bolder" />}/>
        <SwiperImg imgsUrl={posterList} className="community-container-imgs"/>
        <LinkageBar {...linkageBarProps} height={height}/>
      </div>
    )
  }
}
