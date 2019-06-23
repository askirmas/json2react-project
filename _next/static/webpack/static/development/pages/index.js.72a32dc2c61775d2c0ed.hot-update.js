webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout */ "./layout/index.js");
/* harmony import */ var _components_utils_renderJson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/utils/renderJson */ "./components/utils/renderJson.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "c:\\dev\\code\\paging\\pages\\index.js";


/*global window*/





var homePage = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(__webpack_require__(/*! ../pages.json */ "./pages.json"))[0];

function Service(_ref) {
  var content = _ref.content,
      redirect = _ref.redirect;
  if (redirect) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    "http-equiv": "Refresh",
    content: "0; url=./".concat(homePage, "/"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
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
    content: Object(_components_utils_renderJson__WEBPACK_IMPORTED_MODULE_4__["default"])(content)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Service));

/***/ })

})
//# sourceMappingURL=index.js.72a32dc2c61775d2c0ed.hot-update.js.map