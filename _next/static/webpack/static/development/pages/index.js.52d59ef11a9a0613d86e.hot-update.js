webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/utils/renderJson.js":
/*!****************************************!*\
  !*** ./components/utils/renderJson.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./components/utils/index.js");






/**
* 1. tag: text
* 2. tag: child :object
* 3. tag: children :object[]
* 4. [tag || Name]: { {children :object[] | object | string}, ...{props}}
* Variable 'list' of component instances - as array or named object
*/

function render(object) {
  var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object(react__WEBPACK_IMPORTED_MODULE_4__["isValidElement"])(object) ? object : renderJson(object, list);
}

function renderJson(obj) {
  var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var recursion = function recursion(v) {
    return render(v, list);
  };

  return _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3___default()(obj) ? obj.map(recursion) : Object(_index__WEBPACK_IMPORTED_MODULE_5__["isObject"])(obj) ? _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(obj).map(function (tagOrName) {
    var value = obj[tagOrName],
        props = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, Object(_index__WEBPACK_IMPORTED_MODULE_5__["isObject"])(value) ? value : {
      children: _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3___default()(value) ? value : [value]
    }),
        _props$tag = props.tag,
        tag = _props$tag === void 0 ? tagOrName : _props$tag,
        _props$name = props.name,
        name = _props$name === void 0 ? tagOrName : _props$name,
        _props$className = props.className,
        className = _props$className === void 0 ? name : _props$className,
        _props$key = props.key,
        key = _props$key === void 0 ? name : _props$key,
        _props$children = props.children,
        children = _props$children === void 0 ? [] : _props$children;

    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(props, {
      name: name,
      key: key,
      className: className
    });

    delete props.children;
    delete props.tag;
    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"].apply(void 0, [tag in list ? list[tag] : tag, props].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])((_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3___default()(children) ? children : [children]).map(recursion))));
  }) : obj;
}

/***/ })

})
//# sourceMappingURL=index.js.52d59ef11a9a0613d86e.hot-update.js.map