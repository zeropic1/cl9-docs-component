import React from 'react';
import { render } from 'react-dom';
import AppBreadCrumbsDemo from './AppBreadCrumbsDemo';
import './index.css';
import {
    BrowserRouter as Router
} from 'react-router-dom'

const App = () => (
    <Router>
        <AppBreadCrumbsDemo />
    </Router>
);
render(< App />, document.getElementById("root"));