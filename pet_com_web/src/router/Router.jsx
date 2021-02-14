import React, { Component, lazy, Suspense } from 'react'
import {Redirect, Route, withRouter} from 'react-router-dom'
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

const MyCommon = lazy(() => import('../pages/MyCommon'))
const MyDynamic = lazy(() => import('../pages/MyDynamic'))

class Router extends Component {
  componentDidMount() {
    // 当地址为空时，跳转到首页
    const {pathname} = this.props.location
    console.log('router', this.props)
    if (pathname === '/') {
      this.props.history.replace('/community')
    }
  }

  render() {
    return (
      <div>
        <Suspense fallback={<Loading/>}>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          <CacheRoute path='/home' component={Home}/>
          <CacheRoute path='/community' component={Community}/>
          <CacheRoute path='/shop' component={Shop}/>
          <CacheRoute path='/user' component={User}/>

          <Route path="/petInfo/:id" component={PetInfo}/>
          <Route path="/more" component={More} />
          <Route path='/userSetting' component={UserSetting} />
          <CacheRoute path='/dynamicDetail/:id' component={DynamicDetail} />
          <CacheRoute path="/goodsDetail/:_id" component={GoodsDetail} />
          <CacheRoute path="/commodity/:id" component={GoodsDetail} />
          <CacheRoute path="/fillOrder" component={FillOrder} />
          <Route path='/cart' component={Cart} />
          <CacheRoute path='/articleDetail/:id' component={ArticleDetail} />
          <CacheRoute path='/addressList' component={AddressList} />
          <Route path='/buySuccess' component={BuySuccess}/>
          <CacheRoute path='/myCommon' component={MyCommon} />
          <CacheRoute path='/myDynamic' component={MyDynamic} />
        </Suspense>
      </div>
    )
  }
}

export default withRouter(Router)
