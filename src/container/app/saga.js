import { take, fork, put, call } from 'redux-saga/effects'
import * as actions from './actions'
import getInitData from '../../api'

function* addCount() {
    while (true) {
        try {
            const { payload } = yield take(actions.ADD_COUNT)
            const data = yield call(getInitData)
            console.log(data)
            yield put(actions.setCount(payload))
        } catch (err) {
            console.log(err)
        }
    }
}

export default function* mainSaga() {
    yield fork(addCount)
}
