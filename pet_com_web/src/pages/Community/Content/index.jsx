import React, { Component } from 'react'
import UserCardList from './UserCardList'
import DynamicItem from '@/components/DynamicItem'
import SwiperContent from '@/components/SwiperContent'
import None from '@/components/None'
import Pubsub from 'pubsub-js'
import Topic from './Topic'
import PetClass from './PetClass'
import {apiDynamicList} from '@/api/api'
import './index.less'

export default class Content extends Component { 
  state = { 
    dynamicList: [],
    page: 0
  }

  componentDidMount () {
    this.getDynamics(() => {})
    Pubsub.subscribe('updateDynamicList', (msg,data) => {
      // 重新刷新列表
      if (data === 'restart') {
        this.setState({page: 0})
        this.getDynamics(() => {})
      }
    })
  }

  componentWillUnmount () {
    Pubsub.unsubscribe('updateDynamicList')
  }

  // 获取动态列表，对接接口版
  getDynamics = (loadedFun, type='reload') => {
    let {page} = this.state
    page++
    this.setState({page})
    apiDynamicList(page).then(res => {
      if (res.data.length !== 0) {
        if (type === 'reload') {
          this.setState({dynamicList: res.data})
        } else if (type === 'addLoad') {
          const {dynamicList} = this.state
          this.setState({dynamicList: [...dynamicList,...res.data]})
        }
        loadedFun()
      } else {
        loadedFun(true)
      }
    })
  }

  render() {
    const {type} = this.props
    const {dynamicList} = this.state
    return (
      <SwiperContent loadingMethod={this.getDynamics}>
        {/* <header className="bg">
          {
            (type === 'recommend' && <UserCardList/>) ||
            (type === 'follow' && <div className="padding1 font-gray follow-span-bg">为您推荐</div>) ||
            (type === 'dynamic' && <div>
              <input type="text" placeholder="请输入文字"/>
            </div>) || 
            (type === 'qa' && '') || 
            (type === 'topic' && <Topic/>) || 
            (type === 'nearby' && '') ||
            (type === 'petClass' && <PetClass/>)
          }
        </header> */}
          {/* {Boolean(['topic', 'petClass'].indexOf(type)) &&  */}
            <div className="bg padding1-lr">
              {
                dynamicList ? dynamicList.map(dynamic => <DynamicItem key={dynamic._id} {...dynamic} />)
                  : <None />
              }
            </div>
          {/* } */}
      </SwiperContent>
    )
  }
}
