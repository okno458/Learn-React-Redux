import React, { Component } from 'react'
import {createIncrementAction} from '../../redux/actions/count'
import {connect} from 'react-redux'
class Count extends Component {
  add = () => {
     //通知redux加1
     this.props.jia(1)
  }
  render() {
    return (
        <div>
            <h2>当前求和为：{this.props.count}</h2>
            <button onClick={this.add} >加1</button>
        </div>
 
    )
  }
}
export default connect(
    //映射状态
    state => ({count: state}),
    {jia:createIncrementAction}
)(Count)
