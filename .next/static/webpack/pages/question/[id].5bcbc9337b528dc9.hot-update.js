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

/***/ "./components/organisms/QuestionWrapper/QuestionWrapper.jsx":
/*!******************************************************************!*\
  !*** ./components/organisms/QuestionWrapper/QuestionWrapper.jsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _QuestionWrapper_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionWrapper.module.css */ \"./components/organisms/QuestionWrapper/QuestionWrapper.module.css\");\n/* harmony import */ var _QuestionWrapper_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_QuestionWrapper_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atoms_AnswerCard_AnswerCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/AnswerCard/AnswerCard */ \"./components/atoms/AnswerCard/AnswerCard.jsx\");\n/* harmony import */ var _molecules_AnswerForm_AnswerForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/AnswerForm/AnswerForm */ \"./components/molecules/AnswerForm/AnswerForm.jsx\");\n\n\n\n\nconst QuestionWrapper = (param)=>{\n    let { question, username } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: question && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_QuestionWrapper_module_css__WEBPACK_IMPORTED_MODULE_1___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_QuestionWrapper_module_css__WEBPACK_IMPORTED_MODULE_1___default().questionWrapper),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: question.question_text\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\QuestionWrapper\\\\QuestionWrapper.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\QuestionWrapper\\\\QuestionWrapper.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_QuestionWrapper_module_css__WEBPACK_IMPORTED_MODULE_1___default().questionDetailsWrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Question by: \",\n                                username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\QuestionWrapper\\\\QuestionWrapper.jsx\",\n                            lineNumber: 14,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Question asked: \",\n                                questionDate\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\QuestionWrapper\\\\QuestionWrapper.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\QuestionWrapper\\\\QuestionWrapper.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_QuestionWrapper_module_css__WEBPACK_IMPORTED_MODULE_1___default().answersWrapper),\n                    children: [\n                        question.answers.map((answer)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_AnswerCard_AnswerCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                user_id: answer.user_id,\n                                answer_id: answer.id,\n                                answer: answer.answer,\n                                answer_likes: answer.liked_by,\n                                question_id: question_id,\n                                answer_date: answer.date,\n                                refreshAnswers: refreshAnswers\n                            }, answer.id, false, {\n                                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\QuestionWrapper\\\\QuestionWrapper.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 17\n                            }, undefined);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_AnswerForm_AnswerForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            question_id: question.id,\n                            refreshAnswers: refreshAnswers\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\QuestionWrapper\\\\QuestionWrapper.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\QuestionWrapper\\\\QuestionWrapper.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\QuestionWrapper\\\\QuestionWrapper.jsx\",\n            lineNumber: 9,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_c = QuestionWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionWrapper);\nvar _c;\n$RefreshReg$(_c, \"QuestionWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9RdWVzdGlvbldyYXBwZXIvUXVlc3Rpb25XcmFwcGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrRDtBQUNTO0FBQ0k7QUFFL0QsTUFBTUcsa0JBQWtCO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUU7SUFDN0MscUJBQ0U7a0JBQ0dELDBCQUNDLDhEQUFDRTtZQUFJQyxXQUFXUCx5RUFBVzs7OEJBQ3pCLDhEQUFDTTtvQkFBSUMsV0FBV1Asb0ZBQXNCOzhCQUNwQyw0RUFBQ1U7a0NBQUdOLFNBQVNPLGFBQWE7Ozs7Ozs7Ozs7OzhCQUU1Qiw4REFBQ0w7b0JBQUlDLFdBQVdQLDJGQUE2Qjs7c0NBQzNDLDhEQUFDVTs7Z0NBQUU7Z0NBQWNMOzs7Ozs7O3NDQUNqQiw4REFBQ0s7O2dDQUFFO2dDQUFpQkc7Ozs7Ozs7Ozs7Ozs7OEJBRXRCLDhEQUFDUDtvQkFBSUMsV0FBV1AsbUZBQXFCOzt3QkFDbENJLFNBQVNXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDOzRCQUNyQixxQkFDRSw4REFBQ2hCLG9FQUFVQTtnQ0FDVGlCLFNBQVNELE9BQU9DLE9BQU87Z0NBQ3ZCQyxXQUFXRixPQUFPRyxFQUFFO2dDQUNwQkgsUUFBUUEsT0FBT0EsTUFBTTtnQ0FDckJJLGNBQWNKLE9BQU9LLFFBQVE7Z0NBQzdCQyxhQUFhQTtnQ0FDYkMsYUFBYVAsT0FBT1EsSUFBSTtnQ0FDeEJDLGdCQUFnQkE7K0JBQ1hULE9BQU9HLEVBQUU7Ozs7O3dCQUdwQjtzQ0FDQSw4REFBQ2xCLHdFQUFVQTs0QkFDVHFCLGFBQWFuQixTQUFTZ0IsRUFBRTs0QkFDeEJNLGdCQUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUI7S0FwQ012QjtBQXNDTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9RdWVzdGlvbldyYXBwZXIvUXVlc3Rpb25XcmFwcGVyLmpzeD8wNTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUXVlc3Rpb25XcmFwcGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEFuc3dlckNhcmQgZnJvbSBcIi4uLy4uL2F0b21zL0Fuc3dlckNhcmQvQW5zd2VyQ2FyZFwiO1xyXG5pbXBvcnQgQW5zd2VyRm9ybSBmcm9tIFwiLi4vLi4vbW9sZWN1bGVzL0Fuc3dlckZvcm0vQW5zd2VyRm9ybVwiO1xyXG5cclxuY29uc3QgUXVlc3Rpb25XcmFwcGVyID0gKHsgcXVlc3Rpb24sIHVzZXJuYW1lIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3F1ZXN0aW9uICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbldyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8cD57cXVlc3Rpb24ucXVlc3Rpb25fdGV4dH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25EZXRhaWxzV3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxwPlF1ZXN0aW9uIGJ5OiB7dXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8cD5RdWVzdGlvbiBhc2tlZDoge3F1ZXN0aW9uRGF0ZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2Vyc1dyYXBwZXJ9PlxyXG4gICAgICAgICAgICB7cXVlc3Rpb24uYW5zd2Vycy5tYXAoKGFuc3dlcikgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8QW5zd2VyQ2FyZFxyXG4gICAgICAgICAgICAgICAgICB1c2VyX2lkPXthbnN3ZXIudXNlcl9pZH1cclxuICAgICAgICAgICAgICAgICAgYW5zd2VyX2lkPXthbnN3ZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgIGFuc3dlcj17YW5zd2VyLmFuc3dlcn1cclxuICAgICAgICAgICAgICAgICAgYW5zd2VyX2xpa2VzPXthbnN3ZXIubGlrZWRfYnl9XHJcbiAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uX2lkPXtxdWVzdGlvbl9pZH1cclxuICAgICAgICAgICAgICAgICAgYW5zd2VyX2RhdGU9e2Fuc3dlci5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICByZWZyZXNoQW5zd2Vycz17cmVmcmVzaEFuc3dlcnN9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17YW5zd2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPEFuc3dlckZvcm1cclxuICAgICAgICAgICAgICBxdWVzdGlvbl9pZD17cXVlc3Rpb24uaWR9XHJcbiAgICAgICAgICAgICAgcmVmcmVzaEFuc3dlcnM9e3JlZnJlc2hBbnN3ZXJzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25XcmFwcGVyO1xyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiQW5zd2VyQ2FyZCIsIkFuc3dlckZvcm0iLCJRdWVzdGlvbldyYXBwZXIiLCJxdWVzdGlvbiIsInVzZXJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsInF1ZXN0aW9uV3JhcHBlciIsInAiLCJxdWVzdGlvbl90ZXh0IiwicXVlc3Rpb25EZXRhaWxzV3JhcHBlciIsInF1ZXN0aW9uRGF0ZSIsImFuc3dlcnNXcmFwcGVyIiwiYW5zd2VycyIsIm1hcCIsImFuc3dlciIsInVzZXJfaWQiLCJhbnN3ZXJfaWQiLCJpZCIsImFuc3dlcl9saWtlcyIsImxpa2VkX2J5IiwicXVlc3Rpb25faWQiLCJhbnN3ZXJfZGF0ZSIsImRhdGUiLCJyZWZyZXNoQW5zd2VycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/organisms/QuestionWrapper/QuestionWrapper.jsx\n"));

/***/ })

});