import React, { Component, lazy, Suspense } from 'react'
import {Route} from 'react-router-dom'
// 路由加载中组件
import Loading from '@/components/Loading/'

const Recommend = lazy(() => import('../Recommend'))
const Follow = lazy(() => import('../Follow'))
const Dynamic = lazy(() => import('../Dynamic'))
const Qa = lazy(() => import('../Qa'))
const Topic = lazy(() => import('../Topic'))
const Nearby = lazy(() => import('../Nearby'))
const PetClass = lazy(() => import('../PetClass'))

export default class Router extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<Loading/>}>
          <Route path='/community/recommend' component={Recommend}/>
          <Route path='/community/follow' component={Follow}/>
          <Route path='/community/dynamic' component={Dynamic}/>
          <Route path='/community/qa' component={Qa}/>
          <Route path='/community/topic' component={Topic}/>
          <Route path='/community/nearby' component={Nearby}/>
          <Route path='/community/petClass' component={PetClass}/>
        </Suspense>
      </div>
    )
  }
}