import React, { Component, Fragment } from 'react'
import './index.less'

// 标签页
export default class TabPage extends Component {
  state = {
    // 记录最开始的点
    startX: 0,
    startY: 0,
    // 记录上一个点
    preX: 0,
    // 记录最后的点
    endX: 0,
    // 记录当前显示的标签页
    activeIdx: 0,
    // translate移动距离
    shift: 0,
    // 是否添加动画
    transition: false,
    // 标题下方小条的位置
    lineLeft: 0,
  }

  // 滑动开始
  handleTouchStart = (e) => {
    e.stopPropagation()
    this.setState({transition: false})
    const startX = e.touches[0].clientX
    const startY = e.touches[0].clientY
    this.setState({startX})
    this.setState({startY})
    this.setState({preX: startX})
  }
  // 滑动中
  handleTouchMove = (e) => {
    e.stopPropagation()
    // 判断滑动方向是否上下
    const {shift,preX,startY} = this.state
    if(Math.abs(e.touches[0].clientY - startY) > 0) {
      this.setState({nextPage: false})
    }
    const currentX = e.touches[0].clientX
    const move = currentX - preX
    this.setState({shift: shift + move})
    this.setState({preX: currentX})
  }
  // 滑动结束
  handleTouchEnd = (e) => {
    e.stopPropagation()
    let {startX,preX,activeIdx} = this.state
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
    this.setState({shift: -contentW * activeIdx})
    this.setState({transition: true})
    // 移动下方小条
    const titleW = this.title.getBoundingClientRect().width
    const lineW = this.line.getBoundingClientRect().width
    this.setState({lineLeft: titleW * activeIdx + titleW / 2 - lineW / 2})
    // 移动标题栏
    const center = parseInt(this.props.titles.length / 2)
    if (activeIdx > center) {
      this.titles.scrollBy({
        left: titleW,
        behavior: 'smooth'
      })
    } else{
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
    console.log('e.target', e.target)
    console.log('targetIdx', targetIdx)
    this.moveTab(targetIdx)
  }

  render() {
    const {
      // 父组件传入的标签页 标题，type:数组
      titles
    } = this.props
    const {shift,transition,activeIdx,lineLeft} = this.state
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
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
            style={{transform: `translateX(${shift}px)`}}
            ref={c => this.contents = c}
          >
            {titles && titles.map((title,index) => 
              <div key={index} 
                className="tp-ctr-contents-content">
                {this.props['tab'+index]}
              </div>
            )}
          </div>  
        </div>
      </div>
    )
  }
}
