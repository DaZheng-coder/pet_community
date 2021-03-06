import React, { Component } from 'react'
import MiniLoading from '@/components/MiniLoading'
import {
  PULL_UP_MAX,
  NORMAL,
  WAITING,
  LOADING,
  LOADED,
  ALREADY_WAITING,
  END
} from './contant.js'
import {throttle} from '@/utils'
import './index.less'

export default class SwiperContent extends Component {
  state = {
    reloadHeight: 0,
    preY: null,
    // 状态，NORMAL为下拉即可刷新中状态，waiting为上拉即可刷新，loading为加载中，loaded为加载完成
    status: NORMAL,
    height: 0,
    // 动画开关
    touching: false,
    // 下拉加载更多的状态
    moreStatus: LOADING,
  }

  componentDidMount () {
    window.addEventListener('scroll', throttle(this.handleScroll))
  }

  handleScroll = (e) => {
    e.stopPropagation()
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    if (scrollHeight > clientHeight && scrollTop + clientHeight === scrollHeight) {
      this.setState({moreLoading: LOADING})
      this.props.loadingMethod(this.moreLoaded, 'addLoad')
    }
  }

  handleTouchStart = (e) => {
    // 如果滚动条在最顶部，记录开始触碰点
    this.setState({preY: e.touches[0].clientY})
    this.setState({touching: true})
  }

  handleTouchMove = (e) => {
    const {reloadHeight,preY} = this.state
    // 如果滚动条滚动到最顶部，touch方向为向下（move>0），限制高度
    // 如果滚动条在最顶部，touch方向向上，自然滑动
    // 获取是否在最顶部
    const isScrollTop = window.scrollY === 0
    const move = e.touches[0].clientY - preY
    if (isScrollTop && move > 0) {
      // 限制高度
      // 首先获取元素距离视口顶部的距离
      const domBoundingTop = this.dom.getBoundingClientRect().top
      // 然后获取视口高度
      const windowHeight = window.innerHeight
      // 计算获取要限制的高度
      const limitHeight = windowHeight - domBoundingTop
      this.setState({height: limitHeight})

      // 已经限制了高度，开始设置reloadHeight
      this.setState({reloadHeight: reloadHeight + move})
      // 更新preY为当前点
      // this.setState({preY: e.touches[0].clientY})
    } else if (isScrollTop && reloadHeight !== 0) {
      // 当滚动条在最顶部，并且touch方向为向上，还有reloadHeight不是0的情况，也就是正在滚动中
      this.setState({reloadHeight: reloadHeight + move})
      // this.setState({preY: e.touches[0].clientY})
    } else if (reloadHeight === 0) {
      this.setState({height: 0})
    }
    if (reloadHeight < 0) {
      // 解决因为拖动过快而导致的reloadHeight为负数的情况
      this.setState({reloadHeight: 0})
    } else if (reloadHeight < ALREADY_WAITING) {
      this.setState({status: NORMAL})
    } else if (reloadHeight >= ALREADY_WAITING) {
      this.setState({status: WAITING})
    } 
    this.setState({preY: e.touches[0].clientY})
  }

  handleTouchEnd = (e) => {
    const {reloadHeight} = this.state
    if(reloadHeight > ALREADY_WAITING) {
      this.setState({reloadHeight: ALREADY_WAITING})
      this.setState({status: LOADING})
      this.reLoading()
    } else {
      this.reBackState()
    }
    this.setState({touching: false})
  }

  // 显示加载完的状态
  loaded = (bool) => {
    console.log('bool', bool)
    if (bool) {
      this.setState({status: END})
    } else {
      this.setState({status: LOADED})
    }
    setTimeout(() => this.reBackState(), 500)
  }

  moreLoaded = (bool) => {
    console.log('bool', bool)
    if (bool) {
      this.setState({moreStatus: END})
    } else {
      this.setState({moreLoading: LOADED})
    }
  }

  // 加载中
  reLoading = async () => {
    this.props.loadingMethod(this.loaded)
  }

  // 重置到最初状态
  reBackState = () => {
    this.setState({reloadHeight: 0})
    this.setState({preY: null})
    this.setState({status: NORMAL})
    this.setState({height: 0})
  }

  render() {
    const {reloadHeight, status, height, touching, moreStatus} = this.state
    return (
      <div
        ref={c => this.dom = c}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
        style={{height:`${height ? height + 'px' : 'auto'}`}} 
        className="swiper-content-container"
      >
        <div className="swiper-content-container-holder">
          <div style={{height: `${reloadHeight}px`}} className={`load-reload ${touching ? '' : 'transition'}`}>
            {
              status === NORMAL ? <div>下拉即可刷新</div> : 
                status === WAITING ? <div>松开即可刷新,上拉取消加载</div> :
                  status === LOADING ? <MiniLoading/> :
                    status === LOADED ?<div>加载完成</div> :
                      <div>没有更多了</div>
            }
          </div>
          <div className="swiper-content-container-holder-article">
            {this.props.children} 
          </div> 
          <div className="load-more">
            {
              moreStatus === LOADING ? <MiniLoading /> : 
                moreStatus === LOADED ? <span>加载完成</span> :
                  <span>没有更多了</span>
            }
          </div>
        </div>
      </div>
    )
  }
}
