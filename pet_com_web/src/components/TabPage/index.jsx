import React, { Component, Fragment } from 'react'
import './index.less'

// 标签页
export default class NoneTabPage extends Component {
  state = {
    // 记录最开始的点
    startX: 0,
    startY: 0,
    // 记录最后的点
    endX: 0,
    // 记录当前显示的标签页
    activeIdx: 0,
    // translate移动距离
    offset: 0,
    // 是否添加动画
    transition: false,
    // 标题下方小条的位置
    lineLeft: 0,
    // 判断是否给内容添加高度限制和滚动条
    isScroll: false
  }

  componentDidMount () {
    // 设置最开始活跃的标签页
    this.moveTab(0)
    window.addEventListener('scroll', this.hanldeScroll)
    this.contents.addEventListener('scroll', this.handleContentsScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hanldeScroll)
  }

  handleContentsScroll = (e) => {
    e.stopPropagation()
    console.log('123')
  }

  // 解决滚动时上部内容不滚动的问题
  hanldeScroll = (e) => {
    e.stopPropagation()
    const heightTop = this.titles.getBoundingClientRect().top
    const {height} = this.props
    if (heightTop <= height) {
      this.setState({isScroll: true})
    } else {
      this.setState({isScroll: false})
    }
  }

  // 滑动开始
  handleTouchStart = (e) => {
    e.stopPropagation()
    this.setState({transition: false})
    const startX = e.touches[0].clientX
    this.setState({startX})
  }
  // 滑动中
  handleTouchMove = (e) => {
    e.stopPropagation()
    // 判断滑动方向是否上下
    const {offset,startX,preX} = this.state
    const currentX = e.touches[0].clientX
    const move = currentX - preX
    this.setState({offset: offset + move})
    this.setState({preX: currentX})
  }
  // 滑动结束
  handleTouchEnd = (e) => {
    e.stopPropagation()
    let {startX,activeIdx,preX} = this.state
    const {titles} = this.props
    const move = preX - startX
    const limit = window.innerWidth / 3
    if (Math.abs(move) > limit) {
      if (move > 0) {
        if (activeIdx !== 0) {
          activeIdx--
        }
      } else {
        if(activeIdx !== titles.length - 1) {
          activeIdx++
        }
      }
      // this.setState({activeIdx})
    }
    this.moveTab(activeIdx)
  }

  // 移动标签页
  moveTab = (activeIdx) => {
    // 移动标签页
    const contentW = this.contents.clientWidth
    this.setState({activeIdx})
    this.setState({offset: -contentW * activeIdx})
    this.setState({transition: true})
    // 移动下方小条
    const titleW = this.title.getBoundingClientRect().width
    const lineW = this.line.getBoundingClientRect().width
    this.setState({lineLeft: titleW * activeIdx + titleW / 2 - lineW / 2})
    // 移动标题栏
    const center = parseInt(this.props.titles.length / 2)
    if (activeIdx > center - 1) {
      this.titles.scrollBy({
        left: titleW,
        behavior: 'smooth'
      })
    } else if (activeIdx < center){
      this.titles.scrollBy({
        left: -titleW,
        behavior: 'smooth'
      })
    }
  }

  // 处理点击标题事件
  handleTitlesClick = (e) => {
    e.stopPropagation()
    const targetIdx = e.target.getAttribute('index')
    console.log('targetIdx', targetIdx)
    this.moveTab(targetIdx)
  }

  render() {
    const {
      // 父组件传入的标签页 标题，type:数组
      titles
    } = this.props
    const {offset,transition,activeIdx,lineLeft,isScroll} = this.state
    return (
      <div className="tp-ctr">
        <div onClick={this.handleTitlesClick} style={{top: this.props.height + 'px'}} ref={c => this.titles = c} className="tp-crt-titles bg">
          {titles && titles.map((title,index) => 
            <div index={index} ref={c => this.title = c} key={index} className="tp-ctr-titles-title">
              <span index={index} className={parseInt(activeIdx) === index ? 'tp-crt-titles-title-active': ''}>{title}</span>
            </div>
          )}
          <div ref={c => this.line = c} style={{left: `${lineLeft}px`}} className="active-line"></div>
        </div>
        <div className="tp-ctr-contents-container">
          <div className={`${transition ? 'transition' : ''} tp-ctr-contents`}
            // onTouchStart={this.handleTouchStart}
            // onTouchMove={this.handleTouchMove}
            // onTouchEnd={this.handleTouchEnd}
            style={{transform: `translateX(${offset}px)`}}
            ref={c => this.contents = c}
          >
            {titles && titles.map((title,index) => 
              <div key={index} 
                className={`${isScroll ? 'tp-ctr-content-scroll' : ''} tp-ctr-contents-content`}>
                {activeIdx == index && this.props.tabList[index]}
              </div>
            )}
          </div>  
        </div>
      </div>
    )
  }
}
