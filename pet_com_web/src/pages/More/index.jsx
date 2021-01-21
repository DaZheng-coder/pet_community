import React, { Component } from 'react'
import NavBar from '@/components/NavBar'
import HandleItem from '@/components/HandleItem'
import './index.less'

export default class More extends Component {
  state = {
    editingMode: false,
    using: [
      {id: 1, type:'tips'},
      {id: 2, type:'weightRecord'},
      {id: 3, type:'wrongRecord'},
    ],
    notUsed: [
      {id: 4, type:'petMedicalRecord'},
      {id: 5, type:'notes'},
      {id: 6, type:'bookKeeping'},
      {id: 7, type:'petWalking'},
      {id: 8, type:'storeGoods'}
    ]
  }

  render() {
    const {using, notUsed, editingMode} = this.state
    return (
      <div>
        <NavBar title="更多">
          {editingMode && <span className="font3 font-theme" onClick={this.editingMode}>完成</span>}
        </NavBar>
        <div className="more-container-items margin1-t bg padding1-lrpadding1-tb">
          <div className="font3 padding1-tb flex-center">我的应用</div>
          <div className="flex-wrap-father">
            {
              using.map(item => {
                const {id,type} = item
                return (
                  <div key={id} className="more-container-item flex-wrap-children">
                    <HandleItem type={type} />
                    {editingMode && <i onClick={this.moveItem('sub',id)} className="more-container-item-handle iconfont icon-icon-54 sub" />}
                  </div>
                )
              })
            }
            {editingMode || <HandleItem type="edit" click={this.editingMode}/>}
          </div>
        </div>
        <div className="more-container-items margin1-t bg padding1-lrpadding1-tb">
          <div className="font3 padding1-tb flex-center">全部应用</div>
          <div className="flex-wrap-father">
            {
              notUsed.map(item => {
                const {id,type} = item
                return (
                  <div key={id} className="more-container-item flex-wrap-children">
                    <HandleItem type={type} />
                    {editingMode && <i onClick={this.moveItem('add',id)} className="more-container-item-handle iconfont icon-icon-58 add" />}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }

  editingMode = () => {
    let currentMode = this.state.editingMode
    this.setState({editingMode: !currentMode})
  }

  moveItem = (type,id) => {
    const {using,notUsed} = this.state
    return (e) => {
      if(type === 'add') {
        const obj = notUsed.filter(item => item.id === id)[0]
        const newNotUsed = notUsed.filter(item => item.id !== id)
        this.setState({using: [...using,obj]})
        this.setState({notUsed: newNotUsed})
      } else {
        const obj = using.filter(item => item.id  === id)[0]
        const newUsing = using.filter(item => item.id !== id)
        this.setState({using: newUsing})
        this.setState({notUsed: [...notUsed, obj]})
      }
    }
  }
}
