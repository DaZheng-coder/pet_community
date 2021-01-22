import React, { Component } from 'react'
import Swiper from "swiper"
import 'swiper/swiper-bundle.css'
import './index.less'

/**
 * 联动swiper菜单
 */
export default class LinkageBar extends Component {
  componentDidMount() {
    const swiper = new Swiper('.swiper-container-content', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet(index, className) {
          return 
        }
      }
    })
  }

  render() {
    return (
      <div>
        {/* <div className="swiper-pagination"></div> */}
        <div className="swiper-container-content hidden">
          <div className="swiper-wrapper">
            <div className="swiper-slide blue">slide1</div>
            <div className="swiper-slide yellow">slide2</div>
            <div className="swiper-slide red">slide3</div>
            <div className="swiper-slide green">slide4</div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}
