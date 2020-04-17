import React from 'react'
import {
    HighlightCode,
} from '../../src/component';

function HighlightCodeDemo() {
    return (
        <HighlightCode codeStyle={{}}>
            {`
                const addAction = addend => {
                    return {
                        type: ACTION_ADD,
                        payload: addend
                    }
                }
                
                const minusAction = subtracted => {
                    return {
                        type: ACTION_MINUS,
                        payload: subtracted
                    }
                }`
            }
        </HighlightCode>
    )
}

export default HighlightCodeDemo
