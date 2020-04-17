import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import {
    Layout,
    Menu
} from 'antd'
import {
    Link
} from 'react-router-dom'
const { Sider } = Layout
const { SubMenu } = Menu;

function AppSider(props) {
    return (
        <Sider className="site-layout-background" width={200}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}>
                {props.sideRoutes.map(({ name, menus, icon }, index) => {
                    return <SubMenu
                        key={`sub${index + 1}`}
                        title={
                            <span>
                                {icon}
                                {name}
                            </span>
                        }>
                        {menus.map(({ path, name, icon }, menuIndex) => {
                            return <Menu.Item key={`sub${index + 1}-${menuIndex + 1}`}>
                                <Link to={{
                                    pathname: path,
                                }}>
                                    <span className="nav-text">
                                        {icon}
                                        {name}
                                    </span>
                                </Link>
                            </Menu.Item>
                        })}
                    </SubMenu>
                })}
            </Menu>
        </Sider>
    )
}

AppSider.propTypes = {
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

export default AppSider

