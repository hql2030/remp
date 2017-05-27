import { combineReducers } from 'redux'

import appReducer from '../container/app/reducer'

export default combineReducers({
    app: appReducer
})
