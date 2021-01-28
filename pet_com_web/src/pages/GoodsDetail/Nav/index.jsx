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

  changeHash = (id) => {
    document.querySelector(id).scrollIntoView(true)
  }

  sendHandleScroll = () => {
    return this.props.handleScroll((isShow) => this.changeIsShow(isShow))
  }

  componentDidMount() {
    window.addEventListener('scroll', this.sendHandleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.sendHandleScroll)
  }

  render() {
    const {isShow} = this.state
    return isShow ? 
      (
        <div className="nav-container flex fixed">
          <div onClick={this.props.history.goBack} className="flex1 nav-container-text">
            <i className="iconfont icon-icon-63" />
          </div>
          <div className="nav-container-center flex2">
            <span onClick={() => this.changeHash('#goods')}>商品</span>
            <span onClick={() => this.changeHash('#goods-common')}>评价</span>
            <span onClick={() => this.changeHash('#goods-detail')}>详情</span>
          </div>
          <div className="flex1"></div>
        </div>
      ) : <i  onClick={this.props.history.goBack} className="iconfont icon-icon-63 nav-container-else-i" />
  }
}

export default withRouter(Nav)