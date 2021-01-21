import React, { Component } from 'react'
import Nav from './Nav'
import HandleItem from '@/components/HandleItem'
import GoodsItem from '@/components/GoodsItem'
import Swiper from "swiper"
import 'swiper/swiper-bundle.css'
import './index.less'
export default class Shop extends Component {
  componentDidMount() {
    // const imgSwiper = 
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      }
    })
    // const tabSwiper = 
    new Swiper('.shop-tab-swiper-container', {
      slidesPerView: 5,
      freeMode: true
    })

    // const goodsSwiper = 
    new Swiper('.goods-tab-swiper-container')
  }

  render() {
    return (
      <div className="bg">
        <Nav/>
        <div className="page-pd">
          <div className="shop-swiper swiper-container">
            <div className="swiper-wrapper">
              <div className="shop-img swiper-slide">1</div>
              <div className="shop-img swiper-slide">2</div>
              <div className="shop-img swiper-slide">3</div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <div className="shop-handle-items flex">
            <div className="shop-handle-item"><HandleItem text="狗狗主粮"/></div>
            <div className="shop-handle-item"><HandleItem text="狗狗主粮"/></div>
            <div className="shop-handle-item"><HandleItem text="狗狗主粮"/></div>
            <div className="shop-handle-item"><HandleItem text="狗狗主粮"/></div>
            <div className="shop-handle-item"><HandleItem text="狗狗主粮"/></div>

            <div className="shop-handle-item"><HandleItem text="狗狗主粮"/></div>
            <div className="shop-handle-item"><HandleItem text="狗狗主粮"/></div>
            <div className="shop-handle-item"><HandleItem text="狗狗主粮"/></div>
            <div className="shop-handle-item"><HandleItem text="狗狗主粮"/></div>
            <div className="shop-handle-item"><HandleItem text="狗狗主粮"/></div>
          </div>
        </div>
        <div className="padding1-lr">
          <div className="shop-tab-swiper-container">
            <div className="swiper-wrapper">
              <span className="swiper-slide active">全犬粮</span>
              <span className="swiper-slide">全犬粮</span>
              <span className="swiper-slide">全犬粮</span>
              <span className="swiper-slide">全犬粮</span>
              <span className="swiper-slide">全犬粮</span>
            </div>
          </div>
        </div>
        <div style={{backgroundColor: '#eee'}}>
          <div className="goods-tab-swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide padding1-lr">
                <GoodsItem/>
              </div>
              <div className="swiper-slide padding1-lr">
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
              </div>
              <div className="swiper-slide padding1-lr">3</div>
              <div className="swiper-slide padding1-lr">4</div>
              <div className="swiper-slide padding1-lr">5</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
