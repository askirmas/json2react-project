webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout */ "./layout/index.js");
/* harmony import */ var _components_utils_renderJson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/utils/renderJson */ "./components/utils/renderJson.js");
var _jsxFileName = "c:\\dev\\code\\paging\\pages\\index.js";





function Service(_ref) {
  var content = _ref.content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, content);
}

Service.getInitialProps = function (_ref2) {
  var _ref2$query$json = _ref2.query.json,
      json = _ref2$query$json === void 0 ? 'home' : _ref2$query$json;

  var content = __webpack_require__("./pages sync recursive ^\\.\\/.*\\.json$")("./".concat(json, ".json"));

  try {
    content = __webpack_require__("./pages sync recursive ^\\.\\/.*$")("./".concat(json)).default(content);
  } catch (e) {}

  return {
    content: Object(_components_utils_renderJson__WEBPACK_IMPORTED_MODULE_3__["default"])(content)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Service));

/***/ })

})
//# sourceMappingURL=index.js.de1bb707ea1878363ede.hot-update.js.map