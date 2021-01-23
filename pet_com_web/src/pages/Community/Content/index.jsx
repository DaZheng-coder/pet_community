import React, { Component } from 'react'
import UserCardList from './UserCardList'
import DynamicItem from '@/components/DynamicItem'
import Topic from './Topic'
import PetClass from './PetClass'
import './index.less'

export default class Content extends Component { 
  state = { dynamicList: [] }

  componentDidMount () {
    const dynamicList = this.getDynamicList()
    this.setState({dynamicList})
  }

  // 获取动态数列表
  getDynamicList = () => {
    const {type} = this.props
    if (type === 'recommend') {
      return [
        {
          id: 1,
          user: {
            username: '小王',
            avatarUrl: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4275424924,2201401076&fm=111&gp=0.jpg'
          },
          pubdate: '2021-01-23 19:25:44',
          content: {
            text: '啦啦啦我是卖报小当家',
            imgs: [
              'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4027323491,4175029026&fm=111&gp=0.jpg',
              'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=347107276,1959396700&fm=111&gp=0.jpg',
              'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2167365359,7586904&fm=111&gp=0.jpg',
              'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=820522811,1360565466&fm=111&gp=0.jpg'
            ]
          }
        },
        {
          id: 2,
          user: {
            username: '小李',
            avatarUrl: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4275424924,2201401076&fm=111&gp=0.jpg'
          },
          pubdate: '2021-01-23 19:25:44',
          content: {
            text: '啦啦啦我是卖报小当家',
            imgs: [
              'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4027323491,4175029026&fm=111&gp=0.jpg',
              'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=347107276,1959396700&fm=111&gp=0.jpg',
              'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2167365359,7586904&fm=111&gp=0.jpg',
              'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=820522811,1360565466&fm=111&gp=0.jpg'
            ]
          }
        },
        {
          id: 3,
          user: {
            username: '小赵',
            avatarUrl: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4275424924,2201401076&fm=111&gp=0.jpg'
          },
          pubdate: '2021-01-23 19:25:44',
          content: {
            text: '啦啦啦我是卖报小当家',
            imgs: [
              'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4027323491,4175029026&fm=111&gp=0.jpg',
              'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=347107276,1959396700&fm=111&gp=0.jpg',
              'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2167365359,7586904&fm=111&gp=0.jpg',
              'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=820522811,1360565466&fm=111&gp=0.jpg'
            ]
          }
        },
        {
          id: 4,
          user: {
            username: '小西',
            avatarUrl: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4275424924,2201401076&fm=111&gp=0.jpg'
          },
          pubdate: '2021-01-23 19:25:44',
          content: {
            text: '啦啦啦我是卖报小当家',
            imgs: [
              'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4027323491,4175029026&fm=111&gp=0.jpg',
              'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=347107276,1959396700&fm=111&gp=0.jpg',
              'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2167365359,7586904&fm=111&gp=0.jpg',
              'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=820522811,1360565466&fm=111&gp=0.jpg'
            ]
          }
        }
      ]
    } else if (type === 'follow') {
      return [
        {
          id: 1,
          user: {
            username: '小黑',
            avatarUrl: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4275424924,2201401076&fm=111&gp=0.jpg'
          },
          pubdate: '2021-01-23 19:25:44',
          content: {
            text: '啦啦啦我是卖报小当家',
            imgs: [
              'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4027323491,4175029026&fm=111&gp=0.jpg',
              'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=347107276,1959396700&fm=111&gp=0.jpg',
              'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2167365359,7586904&fm=111&gp=0.jpg',
              'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=820522811,1360565466&fm=111&gp=0.jpg'
            ]
          }
        },
      ]
    }
  }

  render() {
    const {type} = this.props
    const {dynamicList} = this.state
    console.log('初次加载', type)
    return (
      <div>
        <header className="bg">
          {
            (type === 'recommend' && <UserCardList/>) ||
            (type === 'follow' && <div className="padding1 font-gray follow-span-bg">为您推荐</div>) ||
            (type === 'dynamic' && <div>
              <input type="text" placeholder="请输入文字"/>
            </div>) || 
            (type === 'qa' && '') || 
            (type === 'topic' && <Topic/>) || 
            (type === 'nearby' && '') ||
            (type === 'petClass' && <PetClass/>)
          }
        </header>
        <article className="bg padding1-lr">
          {Boolean(['topic', 'petClass'].indexOf(type)) && 
            <div>
              {
                dynamicList && dynamicList.map(dynamic => <DynamicItem key={dynamic.id} {...dynamic} />)
              }
            </div>
          }
        </article>
      </div>
    )
  }
}
