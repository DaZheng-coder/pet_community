import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './index.less'

class Nav extends Component {
  state = {
    isShow: false
  }

  changeIsShow = (isShow) => {
    this.setState({isShow})
  }

  sendHandleScroll = () => {
    return () => this.props.handleScroll((isShow) => this.changeIsShow(isShow))
  }

  componentDidMount() {
    window.addEventListener('scroll', this.sendHandleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.sendHandleScroll)
  }

  render() {
    const {isShow} = this.state
    return (
      <div className={`nav-container flex fixed ${isShow && 'show'}`}>
        <div onClick={this.props.history.goBack} className="flex1 nav-container-text">
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

export default withRouter(Nav)