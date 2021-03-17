const isObject = o => Object.prototype.toString.call(o) === '[object Object]'

const isAttributes = (key) => !key.startsWith('on') && key !== 'children'

module.exports = {
    isObject,
    isAttributes,
}