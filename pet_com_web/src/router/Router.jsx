import React, { Component, lazy, Suspense } from 'react'
import {Redirect, Route} from 'react-router-dom'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
// 路由加载中组件
import Loading from '../components/Loading/'

const Login = lazy(() => import('../pages/Login'))
const Register = lazy(() => import('../pages/Register'))

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
const Cart = lazy(() => import('../pages/Cart'))
const ArticleDetail = lazy(() => import('../pages/ArticleDetail'))
const AddressList = lazy(() => import('../pages/AddressList'))
const BuySuccess = lazy(() => import('../pages/BuySuccess'))

export default class Router extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<Loading/>}>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          <CacheRoute path='/home' component={Home}/>
          <CacheRoute path='/community' component={Community}/>
          <Route path='/shop' component={Shop}/>
          <Route path='/user' component={User}/>

          <Route path="/petInfo/:id" component={PetInfo}/>
          <Route path="/more" component={More} />
          <Route path='/userSetting' component={UserSetting} />
          <Route path='/dynamicDetail/:id' component={DynamicDetail} />
          <Route path="/goodsDetail/:_id" component={GoodsDetail} />
          <Route path="/commodity/:id" component={GoodsDetail} />
          <CacheRoute path="/fillOrder" component={FillOrder} />
          <Route path='/cart' component={Cart} />
          <Route path='/articleDetail/:id' component={ArticleDetail} />
          <Route path='/addressList' component={AddressList} />
          <Route path='/buySuccess' component={BuySuccess}/>
        </Suspense>
      </div>
    )
  }
}
