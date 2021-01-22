import React, { Component } from 'react'
import './index.less'

export default class Question extends Component {
  state = {
    questions: [
      '没吃饭吗？',
      '是不是傻？',
      '下雨了吗？',
      '好家伙好家伙'
    ],
  }

  // get computed() {
  //   const {questions,currentIndex} = this.state
  //   return 
  // }

  // componentDidMount() {
  //   this.setState({})
  // }

  render() {
    return (
      <div className="question-container flex">
        <span className="font3 question-container-left margin1-r">问题求助</span>
        <div className="question-container-center flex1 font-gray">
          <div>
            <span>嘻我兮兮我嘻嘻嘻嘻哈哈哈哈哈乐乐乐咯</span>
          </div>
        </div>
        <i className="question-container-right iconfont icon-icon-64"></i>
      </div>
    )
  }
}
