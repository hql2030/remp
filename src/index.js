import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import { Router, hashHistory } from 'react-router'
import routes from './router'

import reducer from './redux'
import mainSaga from './saga'

const sagaMiddleware = createSagaMiddleware()
const store = compose(
    applyMiddleware(sagaMiddleware)
)(createStore)(reducer)

sagaMiddleware.run(mainSaga)

/* global window */
const DOC = window.document
const AppDom = DOC.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>,
    AppDom
)
