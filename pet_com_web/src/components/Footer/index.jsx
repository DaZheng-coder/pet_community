import React, { Component, Fragment } from 'react'
import FooterNavLink from './FooterNavLink/'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './index.less'

class Footer extends Component {
  state = {
    // 存放显示下方导航栏的数组
    footerNavArr: [
      '/home',
      '/community',
      '/shop',
      '/user'
    ]
  }

  render() {
    console.log('足部的user',this.props.user)
    const {footerNavArr} = this.state
    const {user} = this.props
    return (
      <Fragment>
        {
          footerNavArr.indexOf(this.props.history.location.pathname) !== -1 && (
            <Fragment>
              {/* <div className="mask footer-mask sticky"></div> */}
              <section className='footer-container'>
                <FooterNavLink to='/home' text='主页' iconClass='icon-icon-7'/>
                <FooterNavLink to='/community' text='宠圈' iconClass='icon-icon-135'/>
                <div className='user-handle'>
                  <i className='user-handle-btn iconfont icon-icon-56'></i>
                </div>
                <FooterNavLink to='/shop' text='商城' iconClass='icon-icon-20'/>
                <FooterNavLink to={user._id ? '/user' : '/login'} text={user._id ? '我的' : '登录'} iconClass='icon-icon-14'/>
              </section>
            </Fragment>
          ) 
        }
      </Fragment>
    )
  }
}

export default connect(state => ({user: state.user}))(withRouter(Footer))
