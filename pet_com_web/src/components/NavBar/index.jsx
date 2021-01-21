import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './index.less'

class NavBar extends Component {
  render() {
    return (
      <div style={{backgroundColor: this.props.backgroundColor || '#FFF'}} className="navbar-container padding1 flex">
        <i className=" flex1 iconfont icon-icon-63 margin1-r line-center" onClick={() => this.props.history.goBack()}></i>
        <span className="font3 font-bold flex2 line-center">{this.props.title}</span>
        <div className="flex1 navbar-container-right">
          {this.props.children || ''}
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar)