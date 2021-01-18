import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Swiper from "swiper"
import 'swiper/swiper-bundle.css'
import './index.less'

export default class SwiperTab extends Component {
  componentDidMount() {
    new Swiper('.swiper-tab-container', {
      slidesPerView: 6,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable:true
      }
    })
  }
  render() {
    return (
      <div className="swiper-tab-container">
        <div className="swiper-wrapper">
          <NavLink to="/community/recommend" className="swiper-slide ">推荐</NavLink>
          <NavLink to="/community/follow" className="swiper-slide">关注</NavLink>
          <NavLink to="/community/dynamic" className="swiper-slide">动态</NavLink>
          <NavLink to="/community/qa" className="swiper-slide">问答</NavLink>
          <NavLink to="/community/topic" className="swiper-slide">话题</NavLink>
          <NavLink to="/community/nearby" className="swiper-slide">附近</NavLink>
          <NavLink to="/community/petClass" className="swiper-slide">宠物课堂</NavLink>
        </div>
      </div>
    )
  }
}
