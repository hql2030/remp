import { bindActionCreators } from 'redux'

export const ADD_COUNT = 'ADD_COUNT'
export const addCount = payload => ({ type: ADD_COUNT, payload })
export const SET_COUNT = 'SET_COUNT'
export const setCount = payload => ({ type: SET_COUNT, payload })

export const containerActions = dispatch => bindActionCreators({
    addCount
}, dispatch)
