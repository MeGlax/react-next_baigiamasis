"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/question/[id]",{

/***/ "./components/atoms/AnswerCard/AnswerCard.jsx":
/*!****************************************************!*\
  !*** ./components/atoms/AnswerCard/AnswerCard.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/user */ \"./api/user.js\");\n/* harmony import */ var _AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnswerCard.module.css */ \"./components/atoms/AnswerCard/AnswerCard.module.css\");\n/* harmony import */ var _AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _assets_upVoteActive_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/upVoteActive.svg */ \"./assets/upVoteActive.svg\");\n/* harmony import */ var _assets_upVotePassive_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/upVotePassive.svg */ \"./assets/upVotePassive.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst AnswerCard = (param)=>{\n    let { user_id, answer_id, answer, answer_likes, answer_date } = param;\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"anonymous\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchUsername = async ()=>{\n            const fetchedUsername = await (0,_api_user__WEBPACK_IMPORTED_MODULE_1__.getUsernameById)(user_id);\n            setUsername(fetchedUsername);\n        };\n        fetchUsername();\n    }, [\n        user_id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().answerWrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().answerLeft),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"istrint\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: username\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: answer\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().answerRight),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: answer_date.slice(0, 10)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().answerLikes),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"likes: \",\n                                    answer_likes.length\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: _assets_upVotePassive_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AnswerCard, \"6yUrMDMmHnio2qFgD9QCByvdLJw=\");\n_c = AnswerCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnswerCard);\nvar _c;\n$RefreshReg$(_c, \"AnswerCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL0Fuc3dlckNhcmQvQW5zd2VyQ2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNQO0FBQ0Q7QUFDWjtBQUNpQztBQUNFO0FBRW5FLE1BQU1PLGFBQWE7UUFBQyxFQUNsQkMsT0FBTyxFQUNQQyxTQUFTLEVBQ1RDLE1BQU0sRUFDTkMsWUFBWSxFQUNaQyxXQUFXLEVBQ1o7O0lBQ0MsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3pDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1hLGdCQUFnQjtZQUNwQixNQUFNQyxrQkFBa0IsTUFBTWhCLDBEQUFlQSxDQUFDUTtZQUM5Q00sWUFBWUU7UUFDZDtRQUNBRDtJQUNGLEdBQUc7UUFBQ1A7S0FBUTtJQUNaLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFXakIsNkVBQW9COzswQkFDbEMsOERBQUNnQjtnQkFBSUMsV0FBV2pCLDBFQUFpQjs7a0NBQy9CLDhEQUFDb0I7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUdSOzs7Ozs7a0NBQ0osOERBQUNRO2tDQUFHWDs7Ozs7Ozs7Ozs7OzBCQUVOLDhEQUFDTztnQkFBSUMsV0FBV2pCLDJFQUFrQjs7a0NBQ2hDLDhEQUFDb0I7a0NBQUdULFlBQVlXLEtBQUssQ0FBQyxHQUFHOzs7Ozs7a0NBQ3pCLDhEQUFDTjt3QkFBSUMsV0FBV2pCLDJFQUFrQjs7MENBQ2hDLDhEQUFDb0I7O29DQUFFO29DQUFRVixhQUFhYyxNQUFNOzs7Ozs7OzBDQUM5Qiw4REFBQ0M7Z0NBQUlDLEtBQUtyQixxRUFBc0I7Z0NBQUVzQixLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEQ7R0EvQk1yQjtLQUFBQTtBQWlDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F0b21zL0Fuc3dlckNhcmQvQW5zd2VyQ2FyZC5qc3g/MzYyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRVc2VybmFtZUJ5SWQgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL3VzZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9BbnN3ZXJDYXJkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB1cFZvdGVBY3RpdmVJbWFnZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL3VwVm90ZUFjdGl2ZS5zdmdcIjtcclxuaW1wb3J0IHVwVm90ZVBhc3NpdmVJbWFnZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL3VwVm90ZVBhc3NpdmUuc3ZnXCI7XHJcblxyXG5jb25zdCBBbnN3ZXJDYXJkID0gKHtcclxuICB1c2VyX2lkLFxyXG4gIGFuc3dlcl9pZCxcclxuICBhbnN3ZXIsXHJcbiAgYW5zd2VyX2xpa2VzLFxyXG4gIGFuc3dlcl9kYXRlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcImFub255bW91c1wiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hVc2VybmFtZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZmV0Y2hlZFVzZXJuYW1lID0gYXdhaXQgZ2V0VXNlcm5hbWVCeUlkKHVzZXJfaWQpO1xyXG4gICAgICBzZXRVc2VybmFtZShmZXRjaGVkVXNlcm5hbWUpO1xyXG4gICAgfTtcclxuICAgIGZldGNoVXNlcm5hbWUoKTtcclxuICB9LCBbdXNlcl9pZF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcldyYXBwZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlckxlZnR9PlxyXG4gICAgICAgIDxwPmlzdHJpbnQ8L3A+XHJcbiAgICAgICAgPHA+e3VzZXJuYW1lfTwvcD5cclxuICAgICAgICA8cD57YW5zd2VyfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyUmlnaHR9PlxyXG4gICAgICAgIDxwPnthbnN3ZXJfZGF0ZS5zbGljZSgwLCAxMCl9PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyTGlrZXN9PlxyXG4gICAgICAgICAgPHA+bGlrZXM6IHthbnN3ZXJfbGlrZXMubGVuZ3RofTwvcD5cclxuICAgICAgICAgIDxpbWcgc3JjPXt1cFZvdGVQYXNzaXZlSW1hZ2Uuc3JjfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbnN3ZXJDYXJkO1xyXG4iXSwibmFtZXMiOlsiZ2V0VXNlcm5hbWVCeUlkIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb29raWVzIiwidXBWb3RlQWN0aXZlSW1hZ2UiLCJ1cFZvdGVQYXNzaXZlSW1hZ2UiLCJBbnN3ZXJDYXJkIiwidXNlcl9pZCIsImFuc3dlcl9pZCIsImFuc3dlciIsImFuc3dlcl9saWtlcyIsImFuc3dlcl9kYXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImZldGNoVXNlcm5hbWUiLCJmZXRjaGVkVXNlcm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJhbnN3ZXJXcmFwcGVyIiwiYW5zd2VyTGVmdCIsInAiLCJhbnN3ZXJSaWdodCIsInNsaWNlIiwiYW5zd2VyTGlrZXMiLCJsZW5ndGgiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/atoms/AnswerCard/AnswerCard.jsx\n"));

/***/ })

});