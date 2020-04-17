import React from 'react'
import {
    RouterListView
} from '../../src/component';

function RouterListViewDemo() {
    return (
        <RouterListView list={
            [{
                title: 'route1',
                path: 'route1'
            }, {
                title: 'route2',
                path: 'route2'
            },
            {
                title: 'route3',
                path: 'route3'
            }]
        }/>
    )
}

export default RouterListViewDemo
