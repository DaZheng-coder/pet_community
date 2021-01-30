import React, { Component } from 'react'
import Swiper from "swiper"
import 'swiper/swiper-bundle.css'
import './index.less'

export default class SwiperImg extends Component {

  componentDidMount(){
     new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      }
    })
  }
  render() {
    const {imgsUrl} = this.props
    return (
      <div className={`swiper-container-img swiper-container ${this.props.className || ''}`}>
        <div className="swiper-wrapper">
          {
            imgsUrl && imgsUrl.map((poster,index) => {
              return (
                <div key={index} className="swiper-slide">
                  <img className="swiper-container-img-item wh100" src={poster} alt="轮播海报"/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
