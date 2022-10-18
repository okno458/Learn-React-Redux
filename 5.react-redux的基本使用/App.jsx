import React, { Component } from 'react'
import Count from './containers/Count'
import store from './redux/store'
/**
 *    react-redux的基本使用
 *      1.明确两个概念：
 *        (1).UI组件：不能使用任何redux的api，负责页面的呈现，交互等
 *        (2).容器组件：负责和redux通信，将结果交给UI组件
 *      2.如何创建一个容器组件：靠react-redux的connect函数
 *        语法：connect(mapStateToProps,mapDispatchToProps)(UI组件名)
 *            -mapStateToProps：映射状态，返回值是一个对象
 *            -mapDispatchToProps：映射操作状态的方法,返回值是一个对象
 *      3.备注：容器组件中的store是靠props传递过去的，而不是在容器组件中直接引入
 *      4.mapDispatchToProps也可以是一个对象
 */
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        <Count store={store}></Count>
      </div>
    )
  }
}
