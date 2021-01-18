import React, { Component } from 'react'
import DynamicItem from '@/components/DynamicItem'

export default class Follow extends Component {
  render() {
    return (
      <div>
        <div className="padding1 font-gray">为您推荐</div>
        <div className="bg padding1">
          <DynamicItem />
          <DynamicItem />
          <DynamicItem />
          <DynamicItem />
        </div>
      </div>
    )
  }
}
