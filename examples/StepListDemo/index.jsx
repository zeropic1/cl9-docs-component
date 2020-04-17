import React from 'react'
import {
    StepList,
} from '../../src/component';
import { stepData } from './StepData'

function StepListDemo() {
    return (
        <StepList stepList={stepData.steps1.stepList}
            contentList={stepData.steps1.contentList} />
    )
}

export default StepListDemo
