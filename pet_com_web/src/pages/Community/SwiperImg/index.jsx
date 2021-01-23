import React, { Component } from 'react'
import Swiper from "swiper"
import 'swiper/swiper-bundle.css'
import './index.less'

export default class SwiperImg extends Component {
  state = {
    posterList: [
      'https://iconfont.alicdn.com/t/31a43374-e29e-4ead-aa09-3cda3f70ca3d.png',
      'https://iconfont.alicdn.com/t/4a760730-42c9-4b07-8e56-4a1acba374ad.png',
      'https://iconfont.alicdn.com/t/04c2eeec-1fbb-448c-ae00-4ae2aa580ecd.png'
    ]
  }

  componentDidMount(){
     new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      },
      scrollbar: {
        el: '.swiper-scroller'
      }
    })
  }
  render() {
    const {posterList} = this.state
    return (
      <div className="header-img swiper-container">
        <div className="swiper-wrapper">
          {
            posterList.map((poster,index) => {
              return (
                <div key={index} className="swiper-slide">
                  <img className="wh100" src={poster} alt="轮播海报"/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
