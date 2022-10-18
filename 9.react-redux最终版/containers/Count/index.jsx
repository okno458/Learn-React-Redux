import React, { Component } from 'react'
//引入action
import { increment,decrement,incrementAsync} from '../../redux/actions/count'
//引入connect用于链接UI组件与redux
import {connect} from 'react-redux'

//定义UI组件
class Count extends Component {
    state = {carName:'bench'}
    componentDidMount(){
    }
    //加法
    increment = () => {
        const {value} = this.selectNumber
        this.props.increment(value * 1)
    }
    //减法
    decrement = () => {
        const {value} = this.selectNumber
        this.props.decrement(value * 1)
    }
    //当前数字为奇数再加
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        if(this.props.count % 2 !== 0) {
            this.props.increment(value * 1)
        }
    }
    //异步加
    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.incrementAsync(value * 1,1000)
    }
    render() {
        return (
        <div>
            <h2>Count组件,Person组件人数为：{this.props.personCount} </h2>
            <h4>当前求和为：{this.props.count}</h4>
            <select ref={c => this.selectNumber = c }>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;
            <button onClick={this.decrement}>-</button>&nbsp;
            <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
            <button onClick={this.incrementAsync}>异步加</button>&nbsp;
        </div>
        )
    }
}

//使用connect()() 创建并暴露一个Count的容器组件
export default connect(
    //映射状态
    state => ({
        count:state.count,
        personCount:state.persons.length
    }),
    {
        increment,
        decrement,
        incrementAsync,
    }
)(Count)

  