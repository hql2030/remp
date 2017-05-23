import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../container/app'
import Home from '../container/home'
import News from '../container/news'
import About from '../container/about'
import NotFound from '../container/notFound'

const Routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/news(/:id)" component={News} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
    </Route>
)

export default Routes
