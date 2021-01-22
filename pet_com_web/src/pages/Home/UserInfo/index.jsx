import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Avatar from '@/components/Avatar/'
import HandleItem from '@/components/HandleItem/'
import Question from './Question/'
import './index.less'

class UserInfo extends Component {
  state = {
    // 当前宠物id
    id:1,
    using: [
      {id: 1, type:'tips'},
      {id: 2, type:'weightRecord'},
      {id: 3, type:'wrongRecord'}
    ]
  }

  changePet = () => {this.props.history.push(`/petInfo/${this.state.id}`)}

  render() {
    const {url, name, type, sex, day} = this.props
    const {using} = this.state
    return (
      <div className="userinfo-container">
        <div className="flex margin1-b">
          <div className="margin1-r" onClick={this.changePet}>
            <Avatar url={url}/>
          </div>
          <div className="flex1 flex-column">
            <div>
              <span className="line-center margin1-r font3 font-bolder">{name}</span>
              <span className="line-center font-gray">{type}</span>
            </div>
            <div>
              <span className="userinfo-sex line-center margin1-r font-theme default-span"><i className={`iconfont ${sex ? 'icon-icon-25' : 'icon-icon-27'}`}></i></span>
              <span className="line-center margin1-r default-span inline-block width1">{day}天</span>
              <span className="line-center margin1-r">已为你相伴{day}天~</span>
            </div>
          </div>
          <div>
            <span className="default-span" onClick={this.changePet}>切换宠物</span>
          </div>
        </div>
        <div className="flex handle-list">
          {
            using.map(item => {
              return <HandleItem key={item.id} type={item.type}/>
            })
          }
          <HandleItem type="more"/>
        </div>
        <Question />
      </div>
    )
  }
}

export default withRouter(UserInfo)
