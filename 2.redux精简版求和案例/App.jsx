import React, { Component } from 'react'
import Count from './components/Count'
export default class App extends Component {
  /**
   * 
   * 1.求和案例——redux精简版
      (1)去除Count组件自身的状态
      (2).src下建立
          -src
            -store.js
            -count_reducer.js
      (3).store.js
          1).引入redux中的createStore函数，创建一个store 
          2).createStore调用时要传入一个为其服务的reducers
          3).暴露store对象 
      (4).count_reducer.js
          1).reducer本质是一个函数，接收preState，action,返回加工后的状态
          2).reducer有两个作用，初始化状态和加工状态
          3).reducer被第一次调用时，是store自动触发的，传递的preState的值是undefined,传递的action是{type:@@：REDUX/Init}
      (5).在index.js中检测store状态的改变，一旦发生改变重新渲染<App/>
          备注：redux只负责管理状态，至于状态的改变驱动着页面的显示，需要自己手写  
   * 
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
