import React, { Component } from 'react'
import UserCard from '@/components/UserCard/'
import Swiper from "swiper"
import 'swiper/swiper-bundle.css'
import './index.less'

export default class UserCardList extends Component {
  state = {
    userList: [
      {id: 1, username: '小王', avatarUrl: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1517417813,2367413112&fm=26&gp=0.jpg'},
      {id: 2, username: '小李', avatarUrl: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=148200059,2148086178&fm=111&gp=0.jpg'},
      {id: 3, username: '小红', avatarUrl: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4275424924,2201401076&fm=111&gp=0.jpg'},
      {id: 4, username: '小张', avatarUrl: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2510838411,151614029&fm=26&gp=0.jpg'},
      {id: 5, username: '小庄', avatarUrl: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2344451607,2404623174&fm=111&gp=0.jpg'},
      {id: 6, username: '小伙', avatarUrl: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2315146696,3189809923&fm=26&gp=0.jpg'},
    ]
  }

  componentDidMount() {
    new Swiper('.recommend-container', { slidesPerView: 3, freeMode: true })
  }
  
  render() {
    const {userList} = this.state
    return (
      <div className="recommend-container bg">
        <div className="swiper-wrapper recommend-container-userList">
          {
            userList.map(user => <div key={user.id} className="swiper-slide bg"><UserCard {...user}/></div>)
          }
        </div>
      </div>
    )
  }
}
