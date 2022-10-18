/**
 * 
 * 该文件用于汇总所有的reduser，为一个总的reducer
 * 
 */
//引入combineReducers用于汇总多个reducers
import { combineReducers } from 'redux';
//引入为Count组件服务的reducer
import count from './count'
//引入为Person组件服务的reducer
import persons from './person'
//汇总所有的reducer
export default combineReducers({
    count,
    persons
})

