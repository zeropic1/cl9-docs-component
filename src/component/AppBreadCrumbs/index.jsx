import React from 'react'
import PropTypes from 'prop-types'
import './index.css';
import {
    Layout,
    Breadcrumb,
} from 'antd'
import AppContent from './AppContent'
import AppSider from './AppSider'
import {
    Link,
    withRouter
} from 'react-router-dom'
const { Header, Footer, Content } = Layout

const AppBreadCrumbs = withRouter(props => {
    const { location } = props;
    const crumbs = props.routes
        // Get all routes that contain the current one.
        .filter(({ path }) => location.pathname.includes(path))
        // Swap out any dynamic routes with their param values.
        // E.g. "/pizza/:pizzaId" will become "/pizza/1"
        .map(({ path, ...rest }) => ({
            path: Object.keys(props.match.params).length
                ? Object.keys(props.match.params).reduce(
                    (path, param) => path.replace(
                        `:${param}`, props.match.params[param]
                    ), path
                )
                : path,
            ...rest
        }));
    const extraBreadcrumbItems = crumbs.map((item, index) => {
        return (
            <Breadcrumb.Item key={item.path}>
                {index === crumbs.length - 1 ? <span>{item.name}</span> : <Link to={item.path}>{item.name}</Link>}
            </Breadcrumb.Item>
        );
    });
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
            </Header>
            <Content style={{ padding: '0 20px' }}>
                <Breadcrumb separator=">" className="crumb">
                    {extraBreadcrumbItems}
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <AppSider sideRoutes={props.sideRoutes} />
                    <AppContent
                        routes={props.routes}
                        contentStyle={props.contentStyle}
                        contentContainerStyle={props.contentContainerStyle} />
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>{props.footContent}</Footer>
        </Layout>
    );
});

AppBreadCrumbs.propTypes = {
    contentContainerStyle: PropTypes.object,
    contentStyle: PropTypes.object,
    footContent: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        component: PropTypes.elementType.isRequired
    })),
    sideRoutes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string,
        icon: PropTypes.element,
        menus: PropTypes.arrayOf(PropTypes.shape({
            path: PropTypes.string.isRequired,
            name: PropTypes.elementType.isRequired,
            icon: PropTypes.element,
        }))
    })).isRequired
}

export default AppBreadCrumbs

