import React, { Component } from 'react'

export default class Bar extends Component {
  render() {
    const {title, text} = this.props
    return (
      <div className="padding1 bg flex flex-between">
        <span>{title}</span>
        <span className="font3 font-bolder font-theme">{text}</span>
      </div>
    )
  }
}
