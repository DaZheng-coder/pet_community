import React, { Component } from 'react'
// import Swiper from "swiper"
import 'swiper/swiper-bundle.css'
import Nav from './Nav'
import SwiperImg from './SwiperImg/'
import SwiperTab from './SwiperTab/'
import Router from './Router/'
import './index.less'
export default class Community extends Component {
  render() {
    return (
      <div className="community-container">
        <Nav />
        <SwiperImg />
        <SwiperTab />
        <Router />
      </div>
    )
  }
}
