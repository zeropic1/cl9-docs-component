import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    Typography,
    Steps
} from 'antd'
import {
    HighlightCode
} from '../index'
import _ from 'lodash'
const { Text, Paragraph } = Typography
const { Step } = Steps

function StepList(props) {
    const [current, setCurrent] = useState(0)

    const onChange = value => {
        setCurrent(value);
    };

    const isPic = value => {
        if (!value) {
            return false
        }
        console.log(value)

        if (value.endsWith('.jpg') || value.endsWith('.png') || value.endsWith('.jpeg') || value.endsWith('.gif')) {
            return true
        }
        return false
    }

    const formatContent = content => {
        if (!content) {
            return <div></div>
        }

        // 当content是对象且包含code属性代码高亮组件
        if (_.isObject(content) && _.has(content, 'code')) {
            return <HighlightCode language={content.language || 'javascript'}>
                {content.code}
            </HighlightCode>
        }

        // 当content是字符串且为图片路径渲染为图片组件
        if (_.isString(content) && isPic(content)) {
            return <img src={props.contentList[current]} />
        } 

        // 默认渲染为段落组件
        return <Paragraph code copyable>{content.toString()}</Paragraph>
    }

    return (
        <div>
            <Steps current={current} onChange={onChange} direction="vertical" size="small">
                {props.stepList.map((item, index) => {
                    return <Step key={index} title={item.title || `Step${index + 1}`} subTitle={item.subTitle || ''} description={item.title ? item.description : item} />
                })}
            </Steps>
            {formatContent(props.contentList[current])}
        </div>
    )
}

StepList.propTypes = {
    stepList: PropTypes.array.isRequired,
    contentList: PropTypes.array.isRequired
}

export default StepList

