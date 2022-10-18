import React, { Component } from 'react'
import Count from './containers/Count'
export default class App extends Component {
  render() {
    return (
      <div>
             {/* 
          求和案例：react-redux版的优化
          (1):容器组件和ui组件整合为一个文件
          (2):无需自己给容器组件传递store给<App/>组件包裹一个 <Provider store={store}></Provider>即可
          (3):使用了react-redux后也不用自己检测redux中状态的改变了，容器组件可以自动完成这个工作
          (4):mapDispatchToProps可以简写为一个对象
          (5):一个组件要和redux打交道需要经过的步骤
              1.定义好UI组件(不暴露)
              2.引入connect生成一个容器组件，并且暴露，写法为：
                export default connect(
                  state => ({count:state}),映射状态 此处的state为redux保存的状态
                  {key:xxxxAction} 映射操作状态的方法
              )(Count)
              3.在UI组件中通过this.props.xxx读取以及操作状态        
        */}
        <Count></Count>
      </div>
    )
  }
}
