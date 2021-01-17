import React, { Component } from 'react'
import FooterNavLink from './FooterNavLink/'
import './index.less'

export default class Footer extends Component {
  render() {
    return (
      <section className='footer-container'>
        <FooterNavLink to='/home' text='主页' iconClass='icon-icon-7'/>
        <FooterNavLink to='/community' text='宠圈' iconClass='icon-icon-135'/>
        <div className='user-handle'>
          <i className='user-handle-btn iconfont icon-icon-56'></i>
        </div>
        <FooterNavLink to='/shop' text='商城' iconClass='icon-icon-20'/>
        <FooterNavLink to='/user' text='我的' iconClass='icon-icon-14'/>
      </section>
    )
  }
}
