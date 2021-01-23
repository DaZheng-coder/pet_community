import React, { Component } from 'react'
import Swiper from "swiper"
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
    tabSwiper: null,
    contentSwiper: null,
    // 当前显示内容索引
    activeIndex: 0,
    // 已经加载的组件数组
    alreadyLoaded: []
  }

  componentDidMount() {
    // 初始化两个swiper
    const tabSwiper = new Swiper('.tab-swiper-container', {
      slidesPerView: this.props.slidesPerView || 4,
      freeMode: true
    })
    const contentSwiper = new Swiper('.content-swiper-container', {
      on: {
        transitionStart: this.transitionStart
      }
    })
    this.setState({tabSwiper})
    this.setState({contentSwiper})

    console.log('高度', this.tabSwiper.clientHeight)

    // 监听滚动事件
    window.addEventListener('scroll', this.handleScroll)
  }

  // 内容swiper滑动至另一个时的回调函数
  transitionStart = (swiper) => {
    const targetIdx = swiper.activeIndex
    this.setState({activeIndex: targetIdx})
  }

  // 选项swiper点击时触发内容swiper显示指定索引内容
  onSlideTo = (e) => {
    const {contentSwiper} = this.state
    const targetIdx = e.target.getAttribute('index')
    contentSwiper.slideTo(targetIdx,500, false)
    this.setState({activeIndex:targetIdx})
  }

  loadingComponent = (index,content) => {
    const {activeIndex} = this.state
    if (index == activeIndex) {
      console.log('加载组件')
      return content
    }
  }

  handleScroll = () => {
    const height = this.contentSwiper.offsetTop- document.documentElement.scrollTop
    console.log('滚动了', height)
    if (height <= -90) {
      this.tabSwiper.classList.add('community-nav-fixed')
    } else {
      this.tabSwiper.classList.remove('community-nav-fixed')
    }
  }

  render() {
    /**
     * 传入参数props contentList中必须为返回值为dom结构的函数
     */
    console.log('@')
    const {tabItems,contentList} = this.props
    const {activeIndex} = this.state
    const activeClass = this.props.activeClass || 'active'

    return (
      <div className="linkagebar-container">
        <div ref={c => this.tabSwiper = c } className="tab-swiper-container bg hidden">
          <ul className="swiper-wrapper padding1-tb" onClick={this.onSlideTo}>
            {
              tabItems && 
                tabItems.map((tab,index) => 
                  <li className={`swiper-slide ${activeIndex == index && activeClass}`}  key={index} index={index}>{tab}</li>
                )
            }
          </ul>
        </div>
        <div className="tab-mask padding1-tb">测试</div>
        <div ref={c => this.contentSwiper = c} className="content-swiper-container bg hidden">
          <div className="swiper-wrapper">
            {
              contentList && 
                contentList.map((content,index) => 
                  <div className="swiper-slide" key={index} index={index}>
                    {/* 组件懒加载 */}
                    {/* {activeIndex == index && this.loadingComponent(content)} */}
                    {this.loadingComponent(index,content)}
                  </div>
                )
            }
          </div>
        </div>
      </div>
    )
  }
}
