/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _lib_react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



const log = console.log.bind(console);

const __main = () => {
  let root = document.getElementById('root');
  _lib_react_dom__WEBPACK_IMPORTED_MODULE_1__["default"].render(_lib_react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), root); // let r = React.createElement(App, null)
  // ReactDOM.render(r, root)
};

__main();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "React", function() { return React; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
const {
  isObject
} = __webpack_require__(2);


const log = console.log.bind(console);

const createTextElement = text => {
  let type = 'TEXT';
  let props = {
    nodeValue: text
  };
  let c = createElement(type, props);
  return c;
};

const createElement = (type, props, ...children) => {
  let newProps = Object.assign({}, props);
  log('children', type, children);

  if (children.length === 0) {
    newProps.children = [];
  } else {
    let l = children.map(c => {
      if (isObject(c)) {
        return c;
      } else {
        let r = createTextElement(c);
        return r;
      }
    });
    newProps.children = l;
  }

  return {
    type: type,
    props: newProps
  };
};

const render = (vdom, element) => {
  while (element.hasChildNodes()) {
    element.removeChild(element.lastChild);
  }

  _react_dom__WEBPACK_IMPORTED_MODULE_0__["default"].render(vdom, element);
};

class Component {
  constructor(props) {
    this.props = props;
  }

  setState(partialState) {
    this.state = Object.assign({}, this.state, partialState);
    log('state in setstate', this.state);
    render(window.vdom, window.element);
  }

}

let React = {
  createElement,
  Component
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const isObject = o => Object.prototype.toString.call(o) === '[object Object]';

const isAttributes = key => !key.startsWith('on') && key !== 'children';

module.exports = {
  isObject,
  isAttributes
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
const {
  isAttributes
} = __webpack_require__(2);


const log = console.log.bind(console);

const isClass = o => o.prototype instanceof _react__WEBPACK_IMPORTED_MODULE_0__["Component"];

const ReactDOM = {
  render: (vdom, container) => {
    log('vdom', vdom, container);

    if (window.vdom === undefined) {
      window.vdom = vdom;
    }

    if (window.element === undefined) {
      window.element = container;
    }

    let {
      type,
      props
    } = vdom;
    let element = null;

    if (type === 'TEXT') {
      element = document.createTextNode('');
    } else if (isClass(type)) {
      let cls = type;

      if (cls.instance === undefined) {
        cls.instance = new cls(props);
      }

      let state = cls.instance.state || {};
      log('state in cls', state);
      let r = cls.instance.render(props, state);
      element = ReactDOM.render(r, container);
    } else {
      element = document.createElement(type);
    }

    Object.keys(props).filter(e => e.startsWith('on')).forEach(k => {
      let eventType = k.toLowerCase().slice(2);
      element.addEventListener(eventType, props[k]);
    });
    Object.keys(props).filter(e => isAttributes(e)).forEach(k => {
      element[k] = props[k];
    });
    let children = props.children || [];
    children.forEach(c => ReactDOM.render(c, element));
    container.appendChild(element);
    return element;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ReactDOM);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

const log = console.log.bind(console);

class App extends _lib_react__WEBPACK_IMPORTED_MODULE_0__["React"].Component {
  constructor(props) {
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
    this.state = {
      count: 0
    };
  }

  onIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  }

  onDecrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render(props, state) {
    return _lib_react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("div", null, _lib_react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("button", {
      onClick: this.onIncrement
    }, "+"), _lib_react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("button", {
      onClick: () => {
        this.onDecrement();
      }
    }, "-"), _lib_react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("p", null, "count: ", this.state.count));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })
/******/ ]);