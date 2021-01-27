import React, { Component, lazy, Suspense } from 'react'
import {Redirect, Route} from 'react-router-dom'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
// 路由加载中组件
import Loading from '../components/Loading/'

const Home = lazy(() => import('../pages/Home'))
const Community = lazy(() => import('../pages/Community'))
const Shop = lazy(() => import('../pages/Shop'))
const User = lazy(() => import('../pages/User'))

const PetInfo = lazy(() => import('../pages/PetInfo'))
const More = lazy(() => import('../pages/More'))
const UserSetting = lazy(() => import('../pages/UserSetting'))
const DynamicDetail = lazy(() => import('../pages/DynamicDetail'))
const GoodsDetail = lazy(() => import('../pages/GoodsDetail'))
const FillOrder = lazy(() => import('../pages/FillOrder'))

export default class Router extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<Loading/>}>
          <CacheRoute path='/home' component={Home}/>
          <CacheRoute path='/community' component={Community}/>
          <Route path='/shop' component={Shop}/>
          <Route path='/user' component={User}/>

          <Route path="/petInfo/:id" component={PetInfo}/>
          <Route path="/more" component={More} />
          <Route path='/userSetting' component={UserSetting} />
          <Route path='/dynamicDetail/:id' component={DynamicDetail} />
          <Route path="/goodsDetail/:id" component={GoodsDetail} />
          <Route path="/commodity/:id" component={GoodsDetail} />
          <Route path="/fillOrder/:id" component={FillOrder} />
        </Suspense>
      </div>
    )
  }
}
