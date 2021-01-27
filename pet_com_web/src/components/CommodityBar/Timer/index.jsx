import React, { Component } from 'react'
import './index.less'

export default class Timer extends Component {
  state = {
    number: 0
  }

  sub = (e) => {
    e.stopPropagation()
    let {number} = this.state
    if(number == 0) {
      return 
    } else {
      this.setState({number: --number})
    }
  }

  add = (e) => {
    e.stopPropagation()
    this.setState({number: ++this.state.number})
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
