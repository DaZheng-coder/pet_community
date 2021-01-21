import React, { Component } from 'react'
import UserInfo from './UserInfo/'
import ArticleItem from '@/components/ArticleItem/'
import './index.less'
export default class Home extends Component {

  state = {
    pet: {
      url: 'https://iconfont.alicdn.com/s/e332943a-3ed4-46ca-80fb-585bff2a7b9b_origin.svg',
      name: '火焰犬',
      type: '火系',
      day: 5
    }
  }

  render() {
    const {pet} = this.state
    return (
      <div className="home-container page-pd bg">
        <UserInfo {...pet}/>
        <h2 className="font4 font-bolder home-title">文章推荐</h2>
        <ArticleItem/>
        <ArticleItem/>
        <ArticleItem/>
        <ArticleItem/>
        <ArticleItem/>
        <footer className="footer"></footer>
      </div>
    )
  }
}
