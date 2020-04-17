import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
} from 'react-router-dom'
import {
    List
} from 'antd'

/**
 * 结合react-router-dom使用的listview导航
 * @param {*} props 
 */
function RouterListView(props) {
    const renderItem = (item, index) => (
        <List.Item
            key={index}
        >
            <Link to={{
                pathname: item.path,
            }}>
                {item.title}
            </Link>
        </List.Item >
    )
    return (
        <List
            itemLayout="vertical"
            size="large"
            dataSource={props.list}
            renderItem={renderItem}
        />
    )
}

RouterListView.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
    })).isRequired
}

export default RouterListView

