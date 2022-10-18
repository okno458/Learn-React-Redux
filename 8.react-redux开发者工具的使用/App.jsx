import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 
        
            react-redux开发者工具的使用
             1.安装依赖 npm i redex-devtools-extension
             2.在store中进行配置
                import {composeWithDevTools} from 'redux-devtools-extension'
                createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))
        */}
        <Count></Count>
        <hr/>
        <Person></Person>
      </div>
    )
  }
}
