import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import {
    Layout
} from 'antd'
import {
    Switch,
    Route,
} from 'react-router-dom'
const { Content } = Layout

function AppContent(props) {
    return (
        <Content style={{ ...{ margin: '0 16px' }, ...props.contentContainerStyle }}>
            <div className="site-layout-background" style={{ ...{ padding: 24, minHeight: 360 }, ...props.contentStyle }}>
                <Switch>
                    {props.routes.map(({ path, component }, key) => (
                        <Route exact path={path} key={key} render={component} />
                    ))}
                </Switch>
            </div>
        </Content>
    )
}

AppContent.propTypes = {
    contentContainerStyle: PropTypes.object,
    contentStyle: PropTypes.object,
    routes: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        component: PropTypes.elementType.isRequired
    }))
}

export default AppContent

