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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "c:\\dev\\code\\paging\\pages\\index.js";


/*global window*/





function Service(_ref) {
  var content = _ref.content,
      redirect = _ref.redirect;
  if (redirect) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    "http-equiv": "Refresh",
    content: "3; url=./home/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, content);
}

Service.getInitialProps = function (_ref2) {
  var _ref2$query = _ref2.query,
      json = _ref2$query.json,
      redirect = _ref2$query.redirect;
  if (redirect) return {
    redirect: redirect
  };

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
//# sourceMappingURL=index.js.39407bff2d4e23e395c3.hot-update.js.map