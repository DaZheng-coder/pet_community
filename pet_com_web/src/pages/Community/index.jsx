import React, { Component } from 'react'
import Swiper from "swiper"
import 'swiper/swiper-bundle.css'
import Header from './Header'
import SwiperImg from './SwiperImg/'
import SwiperTab from './SwiperTab/'
import Router from './Router/'
import './index.less'
export default class Community extends Component {
  componentDidMount() {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    })
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      thumbs: {
        swiper: galleryThumbs
      }
    })
  }

  render() {
    return (
      <div className="community-container">
        <Header />
        <SwiperImg />
        <SwiperTab />
        <Router />
      </div>
    )
  }
}
