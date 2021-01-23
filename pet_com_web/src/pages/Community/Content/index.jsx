import React, { Component } from 'react'
import UserCardList from './UserCardList'
import DynamicItem from '@/components/DynamicItem'
import Topic from './Topic'
import PetClass from './PetClass'
import './index.less'

export default class Content extends Component {
  state = {
    isLoadingFlag: true
  }

  changeLoadingFlag = () => {
    this.state({isLoadingFlag: false})
  }

  render() {
    const {type} = this.props
    const {isLoadingFlag} = this.state
    return (
      <div>
        <header className="bg">
          {
            (type === 'recommend' && <UserCardList/>) ||
            (type === 'follow' && <div className="padding1 font-gray follow-span-bg">为您推荐</div>) ||
            (type === 'dynamic' && '') || 
            (type === 'qa' && '') || 
            (type === 'topic' && <Topic/>) || 
            (type === 'nearby' && '') ||
            (type === 'petClass' && <PetClass/>)
          }
        </header>
        <article className="bg padding1-lr">
          {isLoadingFlag && 
            <div>
              <DynamicItem />
              <DynamicItem />
              <DynamicItem />
              <DynamicItem />
            </div>
          }
        </article>
      </div>
    )
  }
}
