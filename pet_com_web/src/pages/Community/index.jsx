import React, { Component } from 'react'
// import Swiper from "swiper"
import 'swiper/swiper-bundle.css'
// import Nav from './Nav'
import NavBar from '@/components/NavBar'
import Search from '@/components/Search'
// import LinkageBar from '@/components/LinkageBar'
import TabPage from '@/components/TabPage'
import SwiperImg from '@/components/SwiperImg/'
import Content from './Content'
import './index.less'
import { withRouter } from 'react-router-dom'
class Community extends Component {
  state = {
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

  // 点击创建动态
  handleNavBarDynamicClick = (e) => {
    e.stopPropagation()
    this.props.history.push('/createDynamic')
  }

  render() {
    const {linkageBarProps, posterList, height} = this.state
    return (
      <div className="community-container">
        <NavBar leftSlot={false} centerSlot={<Search bgColor={'rgb(248,248,248)'}/>} getHeight={this.getHeight} rightSlot={
          <div onClick={this.handleNavBarDynamicClick}>
            <i className="iconfont icon-icon-58 font-bolder" />
            <span className="font3 font-bold"> 创建动态</span>
          </div>}
        />
        <SwiperImg imgsUrl={posterList} className="community-container-imgs"/>
        <Content type="recommend"/>
      </div>
    )
  }
}

export default withRouter(Community)
