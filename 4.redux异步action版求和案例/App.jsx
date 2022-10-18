import React, { Component } from 'react'
import Count from './components/Count'
export default class App extends Component {
  /*
    求和案例：redux异步action版
      1.明确：延迟的动作不想交给组件自身，想交给action，
      2.何时需要异步action，想要对状态进行操作，但是具体的数据靠异步任务返回
      3.异步任务有结果后，奋发一个同步的action去真正操作数据
      4.备注：异步action不是必须要写的，完全可以自己等到异步任务结果再去分发同步的action 
  
  */
  render() {
    return (
      <div>
        <Count></Count>
      </div>
    )
  }
}
