import React, { Component } from 'react'
import Swiper from "swiper"
import SwiperContent from '@/components/SwiperContent'
import {nanoid} from 'nanoid'
import 'swiper/swiper-bundle.css'
import './index.less'

/**
 * 联动swiper菜单
 */
export default class LinkageBar extends Component {
  /**
   * 传入参数
   * slidesPerView tab栏一次显示数目
   * tabItems tab栏文字
   * contentList 内容，必须是返回dom结构的函数
   */
  state = {
    tabSwiper: {},
    contentSwiper: {},
    // 当前显示内容索引
    activeIndex: 0,
    // 用于辨识区分swiper
    id: 0
  }

  componentDidMount() {
    const id = nanoid()
    const {tabSwiper,contentSwiper} = this.state
    const newTabSwiper = Object.assign(tabSwiper)
    const newContentSwiper = Object.assign(contentSwiper)
    // 初始化两个swiper
    newTabSwiper[id] = new Swiper('.tab-swiper-container', {
      slidesPerView: this.props.slidesPerView || 4,
      freeMode: true
    })
    newContentSwiper[id] = new Swiper('.content-swiper-container', {
      on: {
        transitionStart: this.transitionStart
      }
    })
    // 初始化swiperTop
    this.setState({tabSwiper: newTabSwiper})
    this.setState({contentSwiper: newContentSwiper})
    this.setState({id})
  }

  // 内容swiper滑动至另一个时的回调函数
  transitionStart = (swiper) => {
    // 获取目标索引
    const targetIdx = swiper.activeIndex
    this.setState({activeIndex: targetIdx})
  }

  // 选项swiper点击时触发内容swiper显示指定索引内容
  onSlideTo = (e) => {
    e.stopPropagation()
    const {contentSwiper,id} = this.state
    const targetIdx = e.target.getAttribute('index')
    contentSwiper[id].slideTo(targetIdx,500, false)
    this.setState({activeIndex:targetIdx})
  }

  render() {
    /**
     * 传入参数props contentList中必须为返回值为dom结构的函数
     */
    const {tabItems,contentList} = this.props
    const {activeIndex} = this.state
    const activeClass = this.props.activeClass || 'active'
    return (
      <div className="linkagebar-container">
        <div style={{top: this.props.height + 'px'}} className="tab-swiper-container bg hidden sticky">
          <ul className="swiper-wrapper" onClick={this.onSlideTo}>
            {
              tabItems && 
                tabItems.map((tab,index) => 
                  <li className={`swiper-slide padding1-tb ${activeIndex == index && activeClass}`}  key={index} index={index}>{tab}</li>
                )
            }
          </ul>
        </div>
          <div className="content-swiper-container hidden">
            <div className="swiper-wrapper">
                {
                  contentList && 
                    contentList.map((content,index) => 
                      <div className="swiper-slide" style={{overflow:'scroll'}} key={index} index={index} onScroll={this.handleSlideScroll}>
                          {content}
                      </div>
                    )
                }
            </div>
          </div>
      </div>
    )
  }
}
