import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 
           react-redux数据共享版
            1.定义一个person组件，和count组件通过redux共享数据
            2.为person组件编写reducer，action，配置constant常量
            3.重点：person的reducer和count的reducer要使用combineReducers进行合并，合并后的总状态是一个对象
            4.交给store的是总reducer，最后注意在组件中取状态的时候，记得取到位
        */}
        <Count></Count>
        <hr/>
        <Person></Person>
      </div>
    )
  }
}
