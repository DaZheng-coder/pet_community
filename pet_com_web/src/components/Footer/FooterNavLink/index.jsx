import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './index.less'
export default class FooterNavLink extends Component {
  render() {
    const {to,iconClass,text} = this.props
    return (
      <NavLink activeClassName="footer-active" className='footer-item' to={to}>
        <i className={`iconfont ${iconClass}`} />
        <span className='spec-text'>{text}</span>
      </NavLink>
    )
  }
}
