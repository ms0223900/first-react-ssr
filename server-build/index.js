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
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! exports provided: getHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHtml\", function() { return getHtml; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n/* harmony import */ var _src_lib_functions_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/lib/functions/renderer */ \"./src/lib/functions/renderer.js\");\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_4___default()(); // app.use(express.static('./build'));\n\napp.use(express__WEBPACK_IMPORTED_MODULE_4___default.a.static('dist'));\nconst getHtml = (appHtml = '') => `\n    <html>\n      <head></head>\n      <body>\n        <div id=\"root\">${appHtml}</div>\n        <script src=\"bundle.js\"></script>\n      </body>\n    </html>\n  `;\napp.get('*', (req, res) => {\n  console.log(req.path);\n  const reactApp = Object(_src_lib_functions_renderer__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req);\n  console.log(reactApp); // const indexFile = path.resolve('./build/index.html');\n  // fs.readFile(indexFile, {\n  //   encoding: 'utf-8',\n  // }, (err, data) => {\n  //   if (err) {\n  //     console.error('Something went wrong:', err);\n  //     return res.status(500).send('File is not ready yet!');\n  //   };\n  //   return res.send(\n  //     data.replace('<div id=\"root\"></div>', `<div id=\"root\">${reactApp}</div>`)\n  //   );\n  // });\n\n  const appRes = getHtml(reactApp);\n  res.send(appRes);\n});\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navbar */ \"./src/components/Navbar.js\");\n\n\n\n\nconst App = ({\n  route = null\n}) => {\n  if (!route) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), route && Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(route.routes));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: App\n});\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/Content.js":
/*!***********************************!*\
  !*** ./src/components/Content.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Content = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, 'Some Content Here!');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\n//# sourceURL=webpack:///./src/components/Content.js?");

/***/ }),

/***/ "./src/components/Counter.js":
/*!***********************************!*\
  !*** ./src/components/Counter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCounter */ \"./src/components/useCounter.js\");\n\n\n\nconst Counter = () => {\n  const {\n    count,\n    handleAddCount\n  } = Object(_useCounter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, `Count: ${count}`, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: () => handleAddCount(1)\n  }, 'Add One'));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Counter);\n\n//# sourceURL=webpack:///./src/components/Counter.js?");

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants_Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/Routes */ \"./src/constants/Routes.js\");\n\n\n\n\nconst NavBar = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: _constants_Routes__WEBPACK_IMPORTED_MODULE_2__[\"ROUTER_ROUTES\"].counter\n  }, 'Counter')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: _constants_Routes__WEBPACK_IMPORTED_MODULE_2__[\"ROUTER_ROUTES\"].content\n  }, 'Content'))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\n\n//# sourceURL=webpack:///./src/components/Navbar.js?");

/***/ }),

/***/ "./src/components/NotFoundPage.js":
/*!****************************************!*\
  !*** ./src/components/NotFoundPage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst NotFoundPage = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      textAlign: 'center',\n      paddingTop: 16\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, '404 not found :('));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFoundPage);\n\n//# sourceURL=webpack:///./src/components/NotFoundPage.js?");

/***/ }),

/***/ "./src/components/useCounter.js":
/*!**************************************!*\
  !*** ./src/components/useCounter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst useCounter = () => {\n  const [count, setCount] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const handleAddCount = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])((countPerAction = 1) => {\n    // console.log('called add count');\n    setCount(c => c + countPerAction);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {// console.log(count);\n  }, [count]);\n  return {\n    count,\n    setCount,\n    handleAddCount\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useCounter);\n\n//# sourceURL=webpack:///./src/components/useCounter.js?");

/***/ }),

/***/ "./src/constants/Routes.js":
/*!*********************************!*\
  !*** ./src/constants/Routes.js ***!
  \*********************************/
/*! exports provided: ROUTER_ROUTES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ROUTER_ROUTES\", function() { return ROUTER_ROUTES; });\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App */ \"./src/App.js\");\n/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Content */ \"./src/components/Content.js\");\n/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Counter */ \"./src/components/Counter.js\");\n/* harmony import */ var _components_NotFoundPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NotFoundPage */ \"./src/components/NotFoundPage.js\");\n\n\n\n\nconst ROUTER_ROUTES = {\n  homepage: '/',\n  counter: '/counter',\n  content: '/content'\n};\nconst Routes = [{ ..._App__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  routes: [{\n    path: ROUTER_ROUTES.homepage,\n    component: () => 'HomePage Here',\n    exact: true\n  }, {\n    path: ROUTER_ROUTES.counter,\n    component: _components_Counter__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, {\n    path: ROUTER_ROUTES.content,\n    component: _components_Content__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }, {\n    component: _components_NotFoundPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routes);\n\n//# sourceURL=webpack:///./src/constants/Routes.js?");

/***/ }),

/***/ "./src/lib/functions/renderer.js":
/*!***************************************!*\
  !*** ./src/lib/functions/renderer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Counter */ \"./src/components/Counter.js\");\n/* harmony import */ var _constants_Routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/Routes */ \"./src/constants/Routes.js\");\n/* harmony import */ var _components_NotFoundPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/NotFoundPage */ \"./src/components/NotFoundPage.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../App */ \"./src/App.js\");\n\n\n\n\n\n\n\n\n\nconst renderer = (req, res) => {\n  // console.log(req.path);\n  const rendered = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.path\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    path: _constants_Routes__WEBPACK_IMPORTED_MODULE_5__[\"ROUTER_ROUTES\"].homepage,\n    component: _App__WEBPACK_IMPORTED_MODULE_7__[\"default\"].component\n  }));\n  console.log(Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"renderRoutes\"])(_constants_Routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]));\n  const renderedContent = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(rendered);\n  return renderedContent; // return 'something wrong :(';\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderer);\n\n//# sourceURL=webpack:///./src/lib/functions/renderer.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi @babel/polyfill ./server/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./server/index.js */\"./server/index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./server/index.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });