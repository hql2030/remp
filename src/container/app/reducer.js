import createReducer from 'create-reducer'
import { fromJS } from 'immutable'
import * as actions from './actions'

const initialState = fromJS({
    count: 0
})

const actionHandlers = {
    [actions.SET_COUNT]: (state, { payload }) => {
        const count = state.get('count')
        return state.set('count', count + payload)
    }
}
export default createReducer(initialState, actionHandlers)
