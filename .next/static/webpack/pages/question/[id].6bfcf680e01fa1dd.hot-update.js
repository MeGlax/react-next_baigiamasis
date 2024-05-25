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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/user */ \"./api/user.js\");\n/* harmony import */ var _AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnswerCard.module.css */ \"./components/atoms/AnswerCard/AnswerCard.module.css\");\n/* harmony import */ var _AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _assets_upVoteActive_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/upVoteActive.svg */ \"./assets/upVoteActive.svg\");\n/* harmony import */ var _assets_upVotePassive_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/upVotePassive.svg */ \"./assets/upVotePassive.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst AnswerCard = (param)=>{\n    let { user_id, answer_id, answer, answer_likes, answer_date } = param;\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"anonymous\");\n    const [isAnswerLiked, setAnswerLiked] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const isLiked = answer_likes.some((answer)=>{\n            return answer === user_id;\n        });\n        setAnswerLiked(isLiked);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchUsername = async ()=>{\n            const fetchedUsername = await (0,_api_user__WEBPACK_IMPORTED_MODULE_1__.getUsernameById)(user_id);\n            setUsername(fetchedUsername);\n        };\n        fetchUsername();\n    }, [\n        user_id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().answerWrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().answerLeft),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"istrint: jwt_token:\",\n                            js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"user_id\"),\n                            \",\",\n                            \" \",\n                            isAnswerLiked ? \"palaikinau\" : \"nelaikinau\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: username\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: answer\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().answerRight),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: answer_date.slice(0, 10)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().answerLikes),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"likes: \",\n                                    answer_likes.length\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: _assets_upVotePassive_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AnswerCard, \"1Xqdn3DLzkgAhACGvI9UbjbBYLk=\");\n_c = AnswerCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnswerCard);\nvar _c;\n$RefreshReg$(_c, \"AnswerCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL0Fuc3dlckNhcmQvQW5zd2VyQ2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNQO0FBQ0Q7QUFDWjtBQUNpQztBQUNFO0FBRW5FLE1BQU1PLGFBQWE7UUFBQyxFQUNsQkMsT0FBTyxFQUNQQyxTQUFTLEVBQ1RDLE1BQU0sRUFDTkMsWUFBWSxFQUNaQyxXQUFXLEVBQ1o7O0lBQ0MsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1ksZUFBZUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqREQsZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxVQUFVTixhQUFhTyxJQUFJLENBQUMsQ0FBQ1I7WUFDakMsT0FBT0EsV0FBV0Y7UUFDcEI7UUFDQVEsZUFBZUM7SUFDakI7SUFDQWYsZ0RBQVNBLENBQUM7UUFDUixNQUFNaUIsZ0JBQWdCO1lBQ3BCLE1BQU1DLGtCQUFrQixNQUFNcEIsMERBQWVBLENBQUNRO1lBQzlDTSxZQUFZTTtRQUNkO1FBQ0FEO0lBQ0YsR0FBRztRQUFDWDtLQUFRO0lBQ1oscUJBQ0UsOERBQUNhO1FBQUlDLFdBQVdyQiw2RUFBb0I7OzBCQUNsQyw4REFBQ29CO2dCQUFJQyxXQUFXckIsMEVBQWlCOztrQ0FDL0IsOERBQUN3Qjs7NEJBQUU7NEJBQ21CckIscURBQVcsQ0FBQzs0QkFBVzs0QkFBRTs0QkFDNUNXLGdCQUFnQixlQUFlOzs7Ozs7O2tDQUVsQyw4REFBQ1U7a0NBQUdaOzs7Ozs7a0NBQ0osOERBQUNZO2tDQUFHZjs7Ozs7Ozs7Ozs7OzBCQUVOLDhEQUFDVztnQkFBSUMsV0FBV3JCLDJFQUFrQjs7a0NBQ2hDLDhEQUFDd0I7a0NBQUdiLFlBQVlnQixLQUFLLENBQUMsR0FBRzs7Ozs7O2tDQUN6Qiw4REFBQ1A7d0JBQUlDLFdBQVdyQiwyRUFBa0I7OzBDQUNoQyw4REFBQ3dCOztvQ0FBRTtvQ0FBUWQsYUFBYW1CLE1BQU07Ozs7Ozs7MENBQzlCLDhEQUFDQztnQ0FBSUMsS0FBSzFCLHFFQUFzQjtnQ0FBRTJCLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoRDtHQXpDTTFCO0tBQUFBO0FBMkNOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXRvbXMvQW5zd2VyQ2FyZC9BbnN3ZXJDYXJkLmpzeD8zNjI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFVzZXJuYW1lQnlJZCB9IGZyb20gXCIuLi8uLi8uLi9hcGkvdXNlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0Fuc3dlckNhcmQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHVwVm90ZUFjdGl2ZUltYWdlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvdXBWb3RlQWN0aXZlLnN2Z1wiO1xyXG5pbXBvcnQgdXBWb3RlUGFzc2l2ZUltYWdlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvdXBWb3RlUGFzc2l2ZS5zdmdcIjtcclxuXHJcbmNvbnN0IEFuc3dlckNhcmQgPSAoe1xyXG4gIHVzZXJfaWQsXHJcbiAgYW5zd2VyX2lkLFxyXG4gIGFuc3dlcixcclxuICBhbnN3ZXJfbGlrZXMsXHJcbiAgYW5zd2VyX2RhdGUsXHJcbn0pID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiYW5vbnltb3VzXCIpO1xyXG4gIGNvbnN0IFtpc0Fuc3dlckxpa2VkLCBzZXRBbnN3ZXJMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlzTGlrZWQgPSBhbnN3ZXJfbGlrZXMuc29tZSgoYW5zd2VyKSA9PiB7XHJcbiAgICAgIHJldHVybiBhbnN3ZXIgPT09IHVzZXJfaWQ7XHJcbiAgICB9KTtcclxuICAgIHNldEFuc3dlckxpa2VkKGlzTGlrZWQpO1xyXG4gIH0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFVzZXJuYW1lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBmZXRjaGVkVXNlcm5hbWUgPSBhd2FpdCBnZXRVc2VybmFtZUJ5SWQodXNlcl9pZCk7XHJcbiAgICAgIHNldFVzZXJuYW1lKGZldGNoZWRVc2VybmFtZSk7XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hVc2VybmFtZSgpO1xyXG4gIH0sIFt1c2VyX2lkXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyV3JhcHBlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyTGVmdH0+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBpc3RyaW50OiBqd3RfdG9rZW46e2Nvb2tpZXMuZ2V0KFwidXNlcl9pZFwiKX0se1wiIFwifVxyXG4gICAgICAgICAge2lzQW5zd2VyTGlrZWQgPyBcInBhbGFpa2luYXVcIiA6IFwibmVsYWlraW5hdVwifVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD57dXNlcm5hbWV9PC9wPlxyXG4gICAgICAgIDxwPnthbnN3ZXJ9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJSaWdodH0+XHJcbiAgICAgICAgPHA+e2Fuc3dlcl9kYXRlLnNsaWNlKDAsIDEwKX08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJMaWtlc30+XHJcbiAgICAgICAgICA8cD5saWtlczoge2Fuc3dlcl9saWtlcy5sZW5ndGh9PC9wPlxyXG4gICAgICAgICAgPGltZyBzcmM9e3VwVm90ZVBhc3NpdmVJbWFnZS5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuc3dlckNhcmQ7XHJcbiJdLCJuYW1lcyI6WyJnZXRVc2VybmFtZUJ5SWQiLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvb2tpZXMiLCJ1cFZvdGVBY3RpdmVJbWFnZSIsInVwVm90ZVBhc3NpdmVJbWFnZSIsIkFuc3dlckNhcmQiLCJ1c2VyX2lkIiwiYW5zd2VyX2lkIiwiYW5zd2VyIiwiYW5zd2VyX2xpa2VzIiwiYW5zd2VyX2RhdGUiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiaXNBbnN3ZXJMaWtlZCIsInNldEFuc3dlckxpa2VkIiwiaXNMaWtlZCIsInNvbWUiLCJmZXRjaFVzZXJuYW1lIiwiZmV0Y2hlZFVzZXJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiYW5zd2VyV3JhcHBlciIsImFuc3dlckxlZnQiLCJwIiwiZ2V0IiwiYW5zd2VyUmlnaHQiLCJzbGljZSIsImFuc3dlckxpa2VzIiwibGVuZ3RoIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/atoms/AnswerCard/AnswerCard.jsx\n"));

/***/ })

});