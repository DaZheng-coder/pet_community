import React, { Component } from 'react'
import UserInfo from './UserInfo/'
import ArticleItem from '@/components/ArticleItem/'
import './index.less'
export default class Home extends Component {
  render() {
    return (
      <div className="page-pd bg">
        <UserInfo/>
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
