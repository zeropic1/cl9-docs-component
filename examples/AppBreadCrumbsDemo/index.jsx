import React from 'react'
import {
    AppBreadCrumbs
} from '../../src/component'
import {
    BrowserRouter as Router
} from 'react-router-dom'
import routes from './routes'
import sideRoutes from './sideRoutes'

function AppBreadCrumbsDemo() {
    return (
        <Router>
            <AppBreadCrumbs
                contentContainerStyle={{ marinLeft: 20 }}
                contentStyle={{ backgroundColor: '#f9f9f9' }}
                routes={routes}
                sideRoutes={sideRoutes}
                footContent="cl9-docs-component Demo ©2020 Created by cl9" />
        </Router>
    )
}

export default AppBreadCrumbsDemo
