import React, { Component } from 'react'
import './index.less'

export default class Nav extends Component {
  state = {
    isShow: false
  }

  changeIsShow = (isShow) => {
    this.setState({isShow})
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.props.handleScroll((isShow) => this.changeIsShow(isShow)))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll')
  }

  render() {
    const {isShow} = this.state
    return (
      <div className={`nav-container flex fixed ${isShow && 'show'}`}>
        <div className="flex1 nav-container-text">
          <i className={`confont icon-icon-63 ${!isShow && 'nav-container-i-bg'}`} />
        </div>
        <div className={`nav-container-center flex2 ${isShow ? '' : 'mask'}`}>
          <a href="#goods">商品</a>
          <a href="#goods-common">评价</a>
          <a href="#goods-detail">详情</a>
        </div>
        <div className="flex1"></div>
      </div>
    )
  }
}