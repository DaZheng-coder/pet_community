import React, { Component } from 'react'
import UserCard from '@/components/UserCard/'
import {apiUserListSome} from '@/api/api'
import './index.less'

export default class UserCardList extends Component {
  state = {
    userList: []
  }

  componentDidMount() {
    this.getUserSomeList()
  }
  
  getUserSomeList = () => {
    apiUserListSome().then(res => {
      console.log('获取成功', res.data)
      this.setState({userList: res.data})
    })
  }

  render() {
    const {userList} = this.state
    return (
      <div className="recommend-container bg">
        <div className="swiper-wrapper recommend-container-userList">
          {
            userList && userList.map(user => 
              <div key={user._id} className="recommend-container-userList-item">
                <UserCard {...user}/>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
