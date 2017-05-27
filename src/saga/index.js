import { fork } from 'redux-saga/effects'

import app from '../container/app/saga'

export default function* mainSaga() {
    yield fork(app)
}
