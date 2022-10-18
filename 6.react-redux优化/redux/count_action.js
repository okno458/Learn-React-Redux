/***
 * 该文件专门为Count生成action对象
 * 
 */ 
 import {INCREMENT,DECREMENT} from './constant'

  //箭头函数默认返回一个对象 如果直接写{}，解析器会把该{}当做函数体，如果需要返回对象要在外边加上()
 export const createIncrementAction = data => ({type: INCREMENT, data}) 
 //同步action 就是指action的值为Object类型的一般对象
 export const createDecrementAction = data => ({type: DECREMENT, data}) 
 //异步action 就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的
 export const createIncrementAsyncAction = (data,time) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time);
    }
 }