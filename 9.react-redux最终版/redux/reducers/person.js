
import {ADD_PERSON} from '../constant'
//初始化人的列表
const initState = [{id:'001',name:'tom',age:18}]
export default function personReducer(preState = initState ,action) {
    // console.log('personReducer-----sssdssdasad');
    const {type,data} = action
    switch (type) {
        //若添加一个人
        case ADD_PERSON:
        /**
         * 纯函数的概念:一类特别的函数，只要是同样的输入(实参)，就必定得到同样的输出(返回)
         *   纯函数要遵守以下约束
         *    1.不得改写参数的数据
         *    2.不会产生任何副作用，例如网络请求，输入和输出设备
         *    3.不能调用Date.now()或Math.random()等不纯的函数
         *  redux中的reducer函数必须是一个纯函数
         * 
         */
        // preState.unshift(data) 此处不可以这样写，因为unshift方法会改变原数组，导致preState被改写，personReducer将不为纯函数
        return [data,...preState]        
        default:
          return preState;
    }
}