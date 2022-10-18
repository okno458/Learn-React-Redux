import React, { Component } from 'react'
import Count from './components/Count'
export default class App extends Component {
  /***
   * 
   * 求和案例 redux完整版
   *   1.count_action.js 专门用于创建action对象
   *   2.constant.js放置由于编码疏忽写错action中的type
   * 
   */
  render() {
    return (
      <div>
        <Count></Count>
      </div>
    )
  }
}
