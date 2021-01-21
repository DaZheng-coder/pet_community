import React, { Component, lazy, Suspense } from 'react'
import {Route} from 'react-router-dom'
// 路由加载中组件
import Loading from '../components/Loading/'

const Home = lazy(() => import('../pages/Home'))
const Community = lazy(() => import('../pages/Community'))
const Shop = lazy(() => import('../pages/Shop'))
const User = lazy(() => import('../pages/User'))

const PetInfo = lazy(() => import('../pages/PetInfo'))
const More = lazy(() => import('../pages/More'))

export default class Router extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<Loading/>}>
          <Route path='/home' component={Home}/>
          <Route path='/community' component={Community}/>
          <Route path='/shop' component={Shop}/>
          <Route path='/user' component={User}/>

          <Route path="/petInfo/:id" component={PetInfo}/>
          <Route path="/more" component={More} />
        </Suspense>
      </div>
    )
  }
}
