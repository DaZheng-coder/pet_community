import React, { Component } from 'react'
import Swiper from 'swiper'

export default class SwiperContent extends Component {
  componentDidMount() {
    const dynamicList = this.getDynamicList()
    this.setState({dynamicList})

    // 推荐内容的用户卡片swiper
    new Swiper('.recommend-container', {slidesPerView: 3,freeMode: true})
  }

  getDynamicList() {
    return [
      {
        id: 1,
        avatarUrl: 'https://iconfont.alicdn.com/t/3db390b9-2cdb-4ea5-be06-e8894177cc9f.png',
        sendDate: '2020-10-28',
        content: {
          text: '测试内容',
          imgs: [
            'https://iconfont.alicdn.com/t/d19f80c6-a9ba-48da-8be7-e38e00fd06e3.png',
            'https://iconfont.alicdn.com/t/d19f80c6-a9ba-48da-8be7-e38e00fd06e3.png',
            'https://iconfont.alicdn.com/t/d19f80c6-a9ba-48da-8be7-e38e00fd06e3.png',
            'https://iconfont.alicdn.com/t/d19f80c6-a9ba-48da-8be7-e38e00fd06e3.png'
          ]
        }
      }
    ]
  }

  render() {
    const {type} = this.props
    const {dynamicList} = this.state
    return (
      <div>
        {
          type === 'recommend' && 
          <div className="swiper-wrapper recommend-container-userList">
            {
              dynamicList.map(dynamic =><UserCard className="swiper-slide"/>)
            }
          </div>
        }
      </div>
    )
  }
}
