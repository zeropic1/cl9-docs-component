import HighlightCodeDemo from '../HighlightCodeDemo'
import RouterListViewDemo from '../RouterListViewDemo'
import StepListDemo from '../StepListDemo'
import Main from '../main'

export default [{
        path: "/",
        name: "Main",
        component: Main
    },
    {
        path: "/highlight",
        name: "HighlightCodeDemo",
        component: HighlightCodeDemo
    },
    {
        path: "/router-list",
        name: "RouterListViewDemo",
        component: RouterListViewDemo
    },
    {
        path: "/step-list",
        name: "StepListDemo",
        component: StepListDemo
    },
];