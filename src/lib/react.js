const { isObject } = require('./utils')
import ReactDOM from './react-dom'

const log = console.log.bind(console)

const createTextElement = (text) => {
    let type = 'TEXT'
    let props = {
        nodeValue: text,
    }
    let c = createElement(type, props)
    return c
}

const createElement = (type, props, ...children) => {
    let newProps = Object.assign({}, props)


    log('children', type, children)

    if (children.length === 0) {
        newProps.children = []
    } else {
        let l = children.map(c => {
            if (isObject(c)) {
                return c
            } else {
                let r = createTextElement(c)
                return r
            }
        })
        newProps.children = l
    }

    return {
        type: type,
        props: newProps,
    }
}

const render = (vdom, element) => {
    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild)
    }
    ReactDOM.render(vdom, element)
}

class Component {
    constructor(props) {
        this.props = props
    }
    setState(partialState) {
        this.state = Object.assign({}, this.state, partialState)
        log('state in setstate', this.state)
        render(window.vdom, window.element)
    }
}

let React = {
    createElement,
    Component,
}

export {
    React,
    Component,
}
