import React from 'react'
import ReactDOM from 'react-dom'

import { Router, hashHistory } from 'react-router'

import Routes from './router'

/* global window b:true */
const DOC = window.document

const REMP = DOC.getElementById('remp')

ReactDOM.render(
    <Router history={hashHistory}>
        {Routes}
    </Router>,
    REMP
)
