//引入Count的ui组件
import CountUI from '../../components/Count'
//引入action
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'
//引入connect用于链接UI组件与redux
import {connect} from 'react-redux'

//mapStateToProps函数返回的是一个对象
//返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
//mapStateToProps用于传递状态
function mapStateToProps(state) {
    return {count:state}
}
//mapDispatchToProps函数返回的是一个对象
//返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
//mapDispatchToProps用于传递操作状态的方法
function mapDispatchToProps(dispatch) {
    return {
        //通知redux执行加法
        jia:num => dispatch(createIncrementAction(num)),
        jian:num => dispatch(createDecrementAction(num)),
        jiaAsync : (num,time) => dispatch(createIncrementAsyncAction(num,time)),
    }
}

//使用connect()() 创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

  