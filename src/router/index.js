import App from '../container/app'
import Home from '../container/home'
import News from '../container/news'
import About from '../container/about'
import NotFound from '../container/notFound'

const routes = [{
    path: '/',
    component: App,
    childRoutes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/news(/:id)',
            component: News
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '*',
            component: NotFound
        }
    ],
    indexRoute: {
        component: Home
    }
}]

export default routes
