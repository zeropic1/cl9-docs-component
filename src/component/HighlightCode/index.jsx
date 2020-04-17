import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/vs.css';      // import your preferred style

const registeredLanguages = {};   // keep a record of registered languages

/**
 * 各种语言代码高亮组件
 * @param {*} props 
 */
function HighlightCode(props) {
    const [loaded, setLoaded] = useState(false)
    const codeNode = useRef(null)

    const highlight = () => {
        hljs.highlightBlock(codeNode.current);
    }

    useEffect(() => {
        const { language } = props;
        if (language && !registeredLanguages[language]) {
            try {
                const newLanguage = require(`highlight.js/lib/languages/${language}`);
                hljs.registerLanguage(language, newLanguage);
                registeredLanguages[language] = true;
                setLoaded(true)
            } catch (e) {
                console.error(e);
                throw Error(`Cannot register and higlight language ${language}`);
            }
        } else {
            setLoaded(true)
        }
    }, [props.language])

    useEffect(() => {
        loaded && highlight()
    })


    return (
        <div>
            {loaded
                ? <pre>
                    <code ref={codeNode} style={{ ...{ backgroundColor: '#f5f5f5' }, ...props.codeStyle }}>{props.children}</code>
                </pre> : ''}
        </div>
    )
}

HighlightCode.propTypes = {
    children: PropTypes.node.isRequired,
    language: PropTypes.string,
    codeStyle: PropTypes.object
};

HighlightCode.defaultProps = {
    language: 'javascript',
};

export default HighlightCode

