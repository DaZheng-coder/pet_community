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
    },
    articleList: [
      {
        id: 1,
        title: '如何处理狗狗的眼部感染',
        brief: '简介',
        user: {
          id: 11,
          username: '铲屎官官方',
          avatarUrl: 'https://iconfont.alicdn.com/t/2affe7cb-c6fa-468d-a210-9d26ddb5e241.png'
        },
        img: 'https://iconfont.alicdn.com/t/31a43374-e29e-4ead-aa09-3cda3f70ca3d.png',
        views: 98,
        date: '2020-2-2'
      },
      {
        id: 2,
        title: '如何处理狗狗的眼部感染',
        brief: '简介',
        user: {
          id: 11,
          username: '铲屎官官方',
          avatarUrl: 'https://iconfont.alicdn.com/t/2affe7cb-c6fa-468d-a210-9d26ddb5e241.png'
        },
        img: 'https://iconfont.alicdn.com/t/31a43374-e29e-4ead-aa09-3cda3f70ca3d.png',
        views: 98,
        date: '2020-2-2'
      },
      {
        id: 3,
        title: '如何处理狗狗的眼部感染',
        brief: '简介',
        user: {
          id: 11,
          username: '铲屎官官方',
          avatarUrl: 'https://iconfont.alicdn.com/t/2affe7cb-c6fa-468d-a210-9d26ddb5e241.png'
        },
        img: 'https://iconfont.alicdn.com/t/31a43374-e29e-4ead-aa09-3cda3f70ca3d.png',
        views: 98,
        date: '2020-2-2'
      }
    ]
  }

  render() {
    const {pet,articleList} = this.state
    return (
      <div className="home-container page-pd bg">
        <UserInfo {...pet}/>
        <h2 className="font4 font-bolder home-title">文章推荐</h2>
        {
          articleList.map(article => {
            return (
              <ArticleItem key={article.id} {...article}/>
            )
          })
        }
        <footer className="footer"></footer>
      </div>
    )
  }
}
