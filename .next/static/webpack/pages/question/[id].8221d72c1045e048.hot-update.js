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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/user */ \"./api/user.js\");\n/* harmony import */ var _AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnswerCard.module.css */ \"./components/atoms/AnswerCard/AnswerCard.module.css\");\n/* harmony import */ var _AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _assets_upVoteActive_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/upVoteActive.svg */ \"./assets/upVoteActive.svg\");\n/* harmony import */ var _assets_upVotePassive_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/upVotePassive.svg */ \"./assets/upVotePassive.svg\");\n/* harmony import */ var _api_question__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../api/question */ \"./api/question.js\");\n/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/delete.svg */ \"./assets/delete.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst AnswerCard = (param)=>{\n    let { user_id, answer_id, answer, answer_likes, answer_date, question_id, refreshAnswers } = param;\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"anonymous\");\n    const [isAnswerLiked, setAnswerLiked] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const isAnswerYours = user_id === js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"user_id\") ? true : false;\n    const likeUnlike = async ()=>{\n        const jwt_token = js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"jwt_token\");\n        try {\n            await (0,_api_question__WEBPACK_IMPORTED_MODULE_7__.likeUnlikeAnswer)({\n                jwt_token,\n                question_id,\n                answer_id\n            });\n            refreshAnswers();\n        } catch (err) {\n            console.log(\"there was a problem changing answer like state\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const isLiked = answer_likes.some((answer)=>{\n            return answer === js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"user_id\");\n        });\n        setAnswerLiked(isLiked);\n    }, [\n        answer_likes\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchUsername = async ()=>{\n            const fetchedUsername = await (0,_api_user__WEBPACK_IMPORTED_MODULE_1__.getUsernameById)(user_id);\n            setUsername(fetchedUsername);\n        };\n        fetchUsername();\n    }, [\n        user_id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().answerWrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().answerLeft),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"\".concat(username, \": \"),\n                            isAnswerYours && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: _assets_delete_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"].src,\n                                className: (_AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().deleteImg)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: answer\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().answerRight),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: answer_date.slice(0, 10)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_AnswerCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().answerLikes),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"likes: \",\n                                    answer_likes.length\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: isAnswerLiked ? _assets_upVoteActive_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src : _assets_upVotePassive_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src,\n                                alt: \"\",\n                                onClick: ()=>{\n                                    likeUnlike();\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\AnswerCard\\\\AnswerCard.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AnswerCard, \"1Xqdn3DLzkgAhACGvI9UbjbBYLk=\");\n_c = AnswerCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnswerCard);\nvar _c;\n$RefreshReg$(_c, \"AnswerCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL0Fuc3dlckNhcmQvQW5zd2VyQ2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ1A7QUFDRDtBQUNaO0FBQ2lDO0FBQ0U7QUFDVjtBQUNOO0FBRW5ELE1BQU1TLGFBQWE7UUFBQyxFQUNsQkMsT0FBTyxFQUNQQyxTQUFTLEVBQ1RDLE1BQU0sRUFDTkMsWUFBWSxFQUNaQyxXQUFXLEVBQ1hDLFdBQVcsRUFDWEMsY0FBYyxFQUNmOztJQUNDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNnQixlQUFlQyxlQUFlLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNa0IsZ0JBQWdCWCxZQUFZTixxREFBVyxDQUFDLGFBQWEsT0FBTztJQUVsRSxNQUFNbUIsYUFBYTtRQUNqQixNQUFNQyxZQUFZcEIscURBQVcsQ0FBQztRQUM5QixJQUFJO1lBQ0YsTUFBTUcsK0RBQWdCQSxDQUFDO2dCQUFFaUI7Z0JBQVdUO2dCQUFhSjtZQUFVO1lBQzNESztRQUNGLEVBQUUsT0FBT1MsS0FBSztZQUNaQyxRQUFRQyxHQUFHLENBQUM7UUFDZDtJQUNGO0lBRUF6QixnREFBU0EsQ0FBQztRQUNSLE1BQU0wQixVQUFVZixhQUFhZ0IsSUFBSSxDQUFDLENBQUNqQjtZQUNqQyxPQUFPQSxXQUFXUixxREFBVyxDQUFDO1FBQ2hDO1FBQ0FnQixlQUFlUTtJQUNqQixHQUFHO1FBQUNmO0tBQWE7SUFDakJYLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTTRCLGdCQUFnQjtZQUNwQixNQUFNQyxrQkFBa0IsTUFBTS9CLDBEQUFlQSxDQUFDVTtZQUM5Q1EsWUFBWWE7UUFDZDtRQUNBRDtJQUNGLEdBQUc7UUFBQ3BCO0tBQVE7SUFDWixxQkFDRSw4REFBQ3NCO1FBQUlDLFdBQVdoQyw2RUFBb0I7OzBCQUNsQyw4REFBQytCO2dCQUFJQyxXQUFXaEMsMEVBQWlCOztrQ0FDL0IsOERBQUNtQzs7NEJBQ0csR0FBVyxPQUFUbkIsVUFBUzs0QkFDWkksK0JBQ0MsOERBQUNnQjtnQ0FBSUMsS0FBSzlCLDhEQUFhO2dDQUFFeUIsV0FBV2hDLHlFQUFnQjs7Ozs7Ozs7Ozs7O2tDQUd4RCw4REFBQ21DO2tDQUFHeEI7Ozs7Ozs7Ozs7OzswQkFFTiw4REFBQ29CO2dCQUFJQyxXQUFXaEMsMkVBQWtCOztrQ0FDaEMsOERBQUNtQztrQ0FBR3RCLFlBQVkwQixLQUFLLENBQUMsR0FBRzs7Ozs7O2tDQUN6Qiw4REFBQ1I7d0JBQUlDLFdBQVdoQywyRUFBa0I7OzBDQUNoQyw4REFBQ21DOztvQ0FBRTtvQ0FBUXZCLGFBQWE2QixNQUFNOzs7Ozs7OzBDQUM5Qiw4REFBQ0w7Z0NBQ0NDLEtBQUtuQixnQkFBZ0JkLG9FQUFxQixHQUFHQyxxRUFBc0I7Z0NBQ25FcUMsS0FBSTtnQ0FDSkMsU0FBUztvQ0FDUHJCO2dDQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWjtHQTlETWQ7S0FBQUE7QUFnRU4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9BbnN3ZXJDYXJkL0Fuc3dlckNhcmQuanN4PzM2MjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0VXNlcm5hbWVCeUlkIH0gZnJvbSBcIi4uLy4uLy4uL2FwaS91c2VyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQW5zd2VyQ2FyZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgdXBWb3RlQWN0aXZlSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy91cFZvdGVBY3RpdmUuc3ZnXCI7XHJcbmltcG9ydCB1cFZvdGVQYXNzaXZlSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy91cFZvdGVQYXNzaXZlLnN2Z1wiO1xyXG5pbXBvcnQgeyBsaWtlVW5saWtlQW5zd2VyIH0gZnJvbSBcIi4uLy4uLy4uL2FwaS9xdWVzdGlvblwiO1xyXG5pbXBvcnQgZGVsZXRlSW1nIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvZGVsZXRlLnN2Z1wiO1xyXG5cclxuY29uc3QgQW5zd2VyQ2FyZCA9ICh7XHJcbiAgdXNlcl9pZCxcclxuICBhbnN3ZXJfaWQsXHJcbiAgYW5zd2VyLFxyXG4gIGFuc3dlcl9saWtlcyxcclxuICBhbnN3ZXJfZGF0ZSxcclxuICBxdWVzdGlvbl9pZCxcclxuICByZWZyZXNoQW5zd2VycyxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJhbm9ueW1vdXNcIik7XHJcbiAgY29uc3QgW2lzQW5zd2VyTGlrZWQsIHNldEFuc3dlckxpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBpc0Fuc3dlcllvdXJzID0gdXNlcl9pZCA9PT0gY29va2llcy5nZXQoXCJ1c2VyX2lkXCIpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICBjb25zdCBsaWtlVW5saWtlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qgand0X3Rva2VuID0gY29va2llcy5nZXQoXCJqd3RfdG9rZW5cIik7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBsaWtlVW5saWtlQW5zd2VyKHsgand0X3Rva2VuLCBxdWVzdGlvbl9pZCwgYW5zd2VyX2lkIH0pO1xyXG4gICAgICByZWZyZXNoQW5zd2VycygpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidGhlcmUgd2FzIGEgcHJvYmxlbSBjaGFuZ2luZyBhbnN3ZXIgbGlrZSBzdGF0ZVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaXNMaWtlZCA9IGFuc3dlcl9saWtlcy5zb21lKChhbnN3ZXIpID0+IHtcclxuICAgICAgcmV0dXJuIGFuc3dlciA9PT0gY29va2llcy5nZXQoXCJ1c2VyX2lkXCIpO1xyXG4gICAgfSk7XHJcbiAgICBzZXRBbnN3ZXJMaWtlZChpc0xpa2VkKTtcclxuICB9LCBbYW5zd2VyX2xpa2VzXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoVXNlcm5hbWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRVc2VybmFtZSA9IGF3YWl0IGdldFVzZXJuYW1lQnlJZCh1c2VyX2lkKTtcclxuICAgICAgc2V0VXNlcm5hbWUoZmV0Y2hlZFVzZXJuYW1lKTtcclxuICAgIH07XHJcbiAgICBmZXRjaFVzZXJuYW1lKCk7XHJcbiAgfSwgW3VzZXJfaWRdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJXcmFwcGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJMZWZ0fT5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHtgJHt1c2VybmFtZX06IGB9XHJcbiAgICAgICAgICB7aXNBbnN3ZXJZb3VycyAmJiAoXHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtkZWxldGVJbWcuc3JjfSBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVJbWd9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD57YW5zd2VyfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyUmlnaHR9PlxyXG4gICAgICAgIDxwPnthbnN3ZXJfZGF0ZS5zbGljZSgwLCAxMCl9PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyTGlrZXN9PlxyXG4gICAgICAgICAgPHA+bGlrZXM6IHthbnN3ZXJfbGlrZXMubGVuZ3RofTwvcD5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtpc0Fuc3dlckxpa2VkID8gdXBWb3RlQWN0aXZlSW1hZ2Uuc3JjIDogdXBWb3RlUGFzc2l2ZUltYWdlLnNyY31cclxuICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxpa2VVbmxpa2UoKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuc3dlckNhcmQ7XHJcbiJdLCJuYW1lcyI6WyJnZXRVc2VybmFtZUJ5SWQiLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvb2tpZXMiLCJ1cFZvdGVBY3RpdmVJbWFnZSIsInVwVm90ZVBhc3NpdmVJbWFnZSIsImxpa2VVbmxpa2VBbnN3ZXIiLCJkZWxldGVJbWciLCJBbnN3ZXJDYXJkIiwidXNlcl9pZCIsImFuc3dlcl9pZCIsImFuc3dlciIsImFuc3dlcl9saWtlcyIsImFuc3dlcl9kYXRlIiwicXVlc3Rpb25faWQiLCJyZWZyZXNoQW5zd2VycyIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJpc0Fuc3dlckxpa2VkIiwic2V0QW5zd2VyTGlrZWQiLCJpc0Fuc3dlcllvdXJzIiwiZ2V0IiwibGlrZVVubGlrZSIsImp3dF90b2tlbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJpc0xpa2VkIiwic29tZSIsImZldGNoVXNlcm5hbWUiLCJmZXRjaGVkVXNlcm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJhbnN3ZXJXcmFwcGVyIiwiYW5zd2VyTGVmdCIsInAiLCJpbWciLCJzcmMiLCJhbnN3ZXJSaWdodCIsInNsaWNlIiwiYW5zd2VyTGlrZXMiLCJsZW5ndGgiLCJhbHQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/atoms/AnswerCard/AnswerCard.jsx\n"));

/***/ })

});