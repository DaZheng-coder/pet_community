import React, { Component } from 'react'
import NavBar from '@/components/NavBar'
import Avatar from '@/components/Avatar'
import InfoTab from '@/components/InfoTab'
import './index.less'

export default class PetInfo extends Component {
  render() {
    const {id} = this.props.match.params
    console.log(`获取到id${id}，此处后面发送请求获取宠物数据`)
    return (
      <div>
        <NavBar title="萌宠信息"/>
        <div className="margin1-t bg padding1-lr">
          <InfoTab title="头像">
            <Avatar url="https://iconfont.alicdn.com/s/29ef7d75-d5ca-4f86-9e05-41bf73e10a8d_origin.svg" />
          </InfoTab>
          <InfoTab title="宠物名字" text="火焰犬"/>
          <InfoTab title="宠物类型" text="狗"/>
          <InfoTab title="品种" text="爱尔兰软毛梗"/>
          <InfoTab title="出生时间" text="2021-06-01"/>
          <InfoTab title="到家时间" text="2021-01-16"/>
        </div>
        <div className="margin1-t bg padding1-lr">
          <InfoTab title="宠物性别">
            <label htmlFor="">
              <input type="checkbox"/>MM
              <input type="checkbox"/>GG
            </label>
          </InfoTab>
          <InfoTab title="是否绝育" text="暂未绝育"/>
        </div>
        <div className="margin1-t bg padding1-lr">
          <InfoTab title="目前状态">
            <label htmlFor="">
              <input type="checkbox"/>在身边
              <input type="checkbox"/>去宠星了
            </label>
          </InfoTab>
        </div>
      </div>
    )
  }
}
