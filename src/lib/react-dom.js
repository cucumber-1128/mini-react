const { isAttributes } = require('./utils')
import { Component } from './react'

const log = console.log.bind(console)

const isClass = (o) => o.prototype instanceof Component

const ReactDOM = {
    render: (vdom, container) => {
        log('vdom', vdom, container)
        if (window.vdom === undefined) {
            window.vdom = vdom
        }
        if (window.element === undefined) {
            window.element = container
        }
        let { type, props } = vdom
        let element = null
        if (type === 'TEXT') {
            element = document.createTextNode('')
        } else if (isClass(type)) {
            let cls = type
            if (cls.instance === undefined) {
                cls.instance = new cls(props)
            }
            let state = cls.instance.state || {}
            log('state in cls', state)
            let r = cls.instance.render(props, state)
            element = ReactDOM.render(r, container)
        } else {
            element = document.createElement(type)
        }

        Object.keys(props).filter(e => e.startsWith('on'))
            .forEach(k => {
                let eventType = k.toLowerCase().slice(2)
                element.addEventListener(eventType, props[k])
            })

        Object.keys(props).filter(e => isAttributes(e))
            .forEach(k => {
                element[k] = props[k]
            })

        let children = props.children || []
        children.forEach(c => ReactDOM.render(c, element))

        container.appendChild(element)
        return element
    }
}

export default ReactDOM