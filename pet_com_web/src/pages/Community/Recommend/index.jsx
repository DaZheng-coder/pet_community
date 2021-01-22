import React, { Component } from 'react'
import UserCard from '@/components/UserCard/'
import DynamicItem from '@/components/DynamicItem'
import Swiper from "swiper"
import 'swiper/swiper-bundle.css'
import './index.less'

export default class Recommend extends Component {
  componentDidMount() {
    new Swiper('.recommend-container', {
      slidesPerView: 3,
      freeMode: true,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable:true
      // }
    })
  }
  render() {
    return (
      <div className="recommend-container bg">
        <div className="swiper-wrapper recommend-container-userList">
          <div className="swiper-slide bg"><UserCard /></div>
          <div className="swiper-slide bg"><UserCard /></div>
          <div className="swiper-slide bg"><UserCard /></div>
          <div className="swiper-slide bg"><UserCard /></div>
          <div className="swiper-slide bg"><UserCard /></div>
          <div className="swiper-slide bg"><UserCard /></div>
        </div>
        <div className="bg recommend-container-dynamic padding1-lr">
          <DynamicItem />
          <DynamicItem />
          <DynamicItem />
          <DynamicItem />
        </div>
      </div>
    )
  }
}
