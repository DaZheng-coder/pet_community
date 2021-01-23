import React, { Component } from 'react'
import UserCard from '@/components/UserCard/'
import Swiper from "swiper"
import 'swiper/swiper-bundle.css'
import './index.less'

export default class UserCardList extends Component {
  componentDidMount() {
    new Swiper('.recommend-container', { slidesPerView: 3, freeMode: true })
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
      </div>
    )
  }
}
