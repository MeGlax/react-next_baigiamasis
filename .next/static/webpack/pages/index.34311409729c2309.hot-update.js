"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/atoms/CardTitle/CardTitle.jsx":
/*!**************************************************!*\
  !*** ./components/atoms/CardTitle/CardTitle.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CardTitle_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardTitle.module.css */ \"./components/atoms/CardTitle/CardTitle.module.css\");\n/* harmony import */ var _CardTitle_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CardTitle_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/delete.svg */ \"./assets/delete.svg\");\n\n\n\n\n\nconst CardTitle = (param)=>{\n    let { title, question_id, asker_id } = param;\n    const isQuestionYours = asker_id === js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"user_id\") ? true : false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"question/\".concat(question_id),\n            children: [\n                title,\n                isQuestionYours && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: _assets_delete_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n                    className: (_CardTitle_module_css__WEBPACK_IMPORTED_MODULE_1___default().deleteImg)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\CardTitle\\\\CardTitle.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\CardTitle\\\\CardTitle.jsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\CardTitle\\\\CardTitle.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CardTitle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardTitle);\nvar _c;\n$RefreshReg$(_c, \"CardTitle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL0NhcmRUaXRsZS9DYXJkVGl0bGUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEM7QUFDZjtBQUNHO0FBQ21CO0FBRW5ELE1BQU1JLFlBQVk7UUFBQyxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFO0lBQ2pELE1BQU1DLGtCQUFrQkQsYUFBYUwscURBQVcsQ0FBQyxhQUFhLE9BQU87SUFDckUscUJBQ0UsOERBQUNRO2tCQUNDLDRFQUFDVCxrREFBSUE7WUFBQ1UsTUFBTSxZQUF3QixPQUFaTDs7Z0JBQ3JCRDtnQkFDQUcsaUNBQ0MsOERBQUNJO29CQUFJQyxLQUFLViw4REFBYTtvQkFBRVcsV0FBV2Qsd0VBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUs5RDtLQVpNSTtBQWNOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXRvbXMvQ2FyZFRpdGxlL0NhcmRUaXRsZS5qc3g/ODkxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhcmRUaXRsZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgZGVsZXRlSW1nIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvZGVsZXRlLnN2Z1wiO1xyXG5cclxuY29uc3QgQ2FyZFRpdGxlID0gKHsgdGl0bGUsIHF1ZXN0aW9uX2lkLCBhc2tlcl9pZCB9KSA9PiB7XHJcbiAgY29uc3QgaXNRdWVzdGlvbllvdXJzID0gYXNrZXJfaWQgPT09IGNvb2tpZXMuZ2V0KFwidXNlcl9pZFwiKSA/IHRydWUgOiBmYWxzZTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExpbmsgaHJlZj17YHF1ZXN0aW9uLyR7cXVlc3Rpb25faWR9YH0+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIHtpc1F1ZXN0aW9uWW91cnMgJiYgKFxyXG4gICAgICAgICAgPGltZyBzcmM9e2RlbGV0ZUltZy5zcmN9IGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZUltZ30gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFRpdGxlO1xyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiTGluayIsImNvb2tpZXMiLCJkZWxldGVJbWciLCJDYXJkVGl0bGUiLCJ0aXRsZSIsInF1ZXN0aW9uX2lkIiwiYXNrZXJfaWQiLCJpc1F1ZXN0aW9uWW91cnMiLCJnZXQiLCJkaXYiLCJocmVmIiwiaW1nIiwic3JjIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/atoms/CardTitle/CardTitle.jsx\n"));

/***/ })

});