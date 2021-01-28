import React, { Component } from 'react'
import './index.less'

export default class Timer extends Component {
  state = {
    number: this.props.number || 1
  }

  sub = (e) => {
    e.stopPropagation()
    let {number} = this.state
    if(number == 1) {
      return 
    } else {
      this.setState({number: --number}, () => this.props.setNewNum(number))
    }
  }

  add = (e) => {
    e.stopPropagation()
    let {number} = this.state
    this.setState({number: ++number}, () => this.props.setNewNum(number))
  }

  render() {
    return (
      <div className="timer-container">
        <div onClick={this.sub} className="tc-sub">-</div>
        <div className="tc-number">{this.state.number}</div>
        <div onClick={this.add} className="tc-add">+</div>
      </div>
    )
  }
}
