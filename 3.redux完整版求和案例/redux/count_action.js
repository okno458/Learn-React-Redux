/***
 * 该文件专门为Count生成action对象
 * 
 */ 
 import {INCREMENT,DECREMENT} from './constant'
  //箭头函数默认返回一个对象 如果直接写{}，解析器会把该{}当做函数体，如果需要返回对象要在外边加上()
 export const createIncrementAction = data => ({type: INCREMENT, data}) 
 export const createDecrementAction = data => ({type: DECREMENT, data}) 
