import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './index.less'

class NavBar extends Component {
  state = {
    height: 0
  }

  componentDidMount() {
    const height = this.navbar.clientHeight
    this.setState({height})
    // 如果父元素想获取该组件的高度，就发送给他
    this.props.getHeight && this.props.getHeight(height)
  }

  render() {
    console.log('this.props.style', this.props.style)
    return (
      <div ref={dom => this.navbar = dom} style={this.props.style || {backgroundColor: this.props.bgColor || '#FFF', top: 0}} className={`navbar-container padding1 flex ${this.props.className} ${this.props.noSticky || 'sticky'}`}>
        <div>
          {(typeof this.props.leftSlot === 'boolean' ) || this.props.leftSlot || <i className="iconfont icon-icon-63 line-center" style={{color: this.props.color}} onClick={() => this.props.history.goBack()} />}
        </div>
        <div className="flex1 text-center margin1-lr">
          {this.props.centerSlot || <span className="font3 font-bold" style={{color: this.props.color}}>{this.props.title}</span>}
        </div>
        <div className="navbar-container-right">
          {this.props.rightSlot || ''}
        </div>
      </div>
    )
  }
}


export default withRouter(NavBar)