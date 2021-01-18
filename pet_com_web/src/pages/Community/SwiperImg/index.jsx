import React, { Component } from 'react'
import Swiper from "swiper"
import 'swiper/swiper-bundle.css'
import './index.less'

export default class SwiperImg extends Component {
  componentDidMount(){
    new Swiper('.swiper-container', {
      loop: true,
      scrollbar: {
        el: '.swiper-scroller'
      }
    })
  }
  render() {
    return (
      <div className="header-img swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">1</div>
          <div className="swiper-slide">2</div>
          <div className="swiper-slide">3</div>
        </div>
        <div className="swiper-scrollbar"></div>
      </div>
    )
  }
}
