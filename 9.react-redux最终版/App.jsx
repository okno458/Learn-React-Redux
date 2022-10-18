import React, { Component } from 'react'
//引入的是Count的容器组件
import Count from './containers/Count'
//引入的是Person的容器组件
import Person from './containers/Person'
export default class App extends Component {
  render() {
    /**
     * react-redux最终版
     *  1.所有变量名字要规范，尽量触发对象的简写形式
     *  2.reducers文件夹中，编写index.js专门用于汇总并暴露所有的reducer
     * 
     */
    return (
      <div>
        <Count></Count>
        <hr/>
        <Person></Person>
      </div>
    )
  }
}
