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

/***/ "./pages/question/[id].jsx":
/*!*********************************!*\
  !*** ./pages/question/[id].jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _components_templates_MainTemplate_MainTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/templates/MainTemplate/MainTemplate */ \"./components/templates/MainTemplate/MainTemplate.jsx\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/question/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_atoms_AnswerCard_AnswerCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/atoms/AnswerCard/AnswerCard */ \"./components/atoms/AnswerCard/AnswerCard.jsx\");\n/* harmony import */ var _components_molecules_AnswerForm_AnswerForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/molecules/AnswerForm/AnswerForm */ \"./components/molecules/AnswerForm/AnswerForm.jsx\");\n/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api/user */ \"./api/user.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Index = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [question, setQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"uknown\");\n    const [questionDate, setQuestiondate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const headers = {\n        authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"jwt_token\")\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (question) {\n            const questionDateArr = question.date.split(\" \");\n            const newQuestionDate = \"\".concat(questionDateArr[1], \" \").concat(questionDateArr[2], \", \").concat(questionDateArr[3]);\n            setQuestiondate(newQuestionDate);\n            const fetchUsername = async ()=>{\n                const fetchedUsername = await (0,_api_user__WEBPACK_IMPORTED_MODULE_8__.getUsernameById)(question.user_id);\n                setUsername(fetchedUsername);\n            };\n            fetchUsername();\n        }\n    }, [\n        question\n    ]);\n    const fetchQuestion = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(\"\".concat(\"http://www.localhost:3220\", \"/question/\").concat(router.query.id), {\n                headers\n            });\n            console.log(response.data.question);\n            setQuestion(response.data.question);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        router.query.id && fetchQuestion();\n    }, [\n        router\n    ]);\n    const refreshAnswers = async ()=>{\n        await fetchQuestion();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_templates_MainTemplate_MainTemplate__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: question && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().questionWrapper),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: question.question_text\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().questionDetailsWrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Question by: \",\n                                username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Question asked: \",\n                                questionDate\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().answersWrapper),\n                    children: [\n                        question.answers.map((answer)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_AnswerCard_AnswerCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                user_id: answer.user_id,\n                                answer_id: answer.id,\n                                answer: answer.answer,\n                                answer_likes: answer.liked_by,\n                                answer_date: answer.date\n                            }, answer.id, false, {\n                                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n                                lineNumber: 66,\n                                columnNumber: 17\n                            }, undefined);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_AnswerForm_AnswerForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            question_id: question.id,\n                            refreshAnswers: refreshAnswers\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n            lineNumber: 55,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"HeBbYVJ5X+omErKwEt7F/3E+iko=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dWVzdGlvbi9baWRdLmpzeD9kZTc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWFpblRlbXBsYXRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlbXBsYXRlcy9NYWluVGVtcGxhdGUvTWFpblRlbXBsYXRlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEFuc3dlckNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYXRvbXMvQW5zd2VyQ2FyZC9BbnN3ZXJDYXJkXCI7XHJcbmltcG9ydCBBbnN3ZXJGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy9BbnN3ZXJGb3JtL0Fuc3dlckZvcm1cIjtcclxuaW1wb3J0IHsgZ2V0VXNlcm5hbWVCeUlkIH0gZnJvbSBcIi4uLy4uL2FwaS91c2VyXCI7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcInVrbm93blwiKTtcclxuICBjb25zdCBbcXVlc3Rpb25EYXRlLCBzZXRRdWVzdGlvbmRhdGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgYXV0aG9yaXphdGlvbjogY29va2llcy5nZXQoXCJqd3RfdG9rZW5cIiksXHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHF1ZXN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXN0aW9uRGF0ZUFyciA9IHF1ZXN0aW9uLmRhdGUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICBjb25zdCBuZXdRdWVzdGlvbkRhdGUgPSBgJHtxdWVzdGlvbkRhdGVBcnJbMV19ICR7cXVlc3Rpb25EYXRlQXJyWzJdfSwgJHtxdWVzdGlvbkRhdGVBcnJbM119YDtcclxuICAgICAgc2V0UXVlc3Rpb25kYXRlKG5ld1F1ZXN0aW9uRGF0ZSk7XHJcbiAgICAgIGNvbnN0IGZldGNoVXNlcm5hbWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hlZFVzZXJuYW1lID0gYXdhaXQgZ2V0VXNlcm5hbWVCeUlkKHF1ZXN0aW9uLnVzZXJfaWQpO1xyXG4gICAgICAgIHNldFVzZXJuYW1lKGZldGNoZWRVc2VybmFtZSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGZldGNoVXNlcm5hbWUoKTtcclxuICAgIH1cclxuICB9LCBbcXVlc3Rpb25dKTtcclxuICBjb25zdCBmZXRjaFF1ZXN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYCR7cHJvY2Vzcy5lbnYuU0VSVkVSX1VSTH0vcXVlc3Rpb24vJHtyb3V0ZXIucXVlcnkuaWR9YCxcclxuICAgICAgICB7IGhlYWRlcnMgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnF1ZXN0aW9uKTtcclxuICAgICAgc2V0UXVlc3Rpb24ocmVzcG9uc2UuZGF0YS5xdWVzdGlvbik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByb3V0ZXIucXVlcnkuaWQgJiYgZmV0Y2hRdWVzdGlvbigpO1xyXG4gIH0sIFtyb3V0ZXJdKTtcclxuXHJcbiAgY29uc3QgcmVmcmVzaEFuc3dlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBmZXRjaFF1ZXN0aW9uKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWluVGVtcGxhdGU+XHJcbiAgICAgIHtxdWVzdGlvbiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25XcmFwcGVyfT5cclxuICAgICAgICAgICAgPHA+e3F1ZXN0aW9uLnF1ZXN0aW9uX3RleHR9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uRGV0YWlsc1dyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8cD5RdWVzdGlvbiBieToge3VzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgPHA+UXVlc3Rpb24gYXNrZWQ6IHtxdWVzdGlvbkRhdGV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcnNXcmFwcGVyfT5cclxuICAgICAgICAgICAge3F1ZXN0aW9uLmFuc3dlcnMubWFwKChhbnN3ZXIpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEFuc3dlckNhcmRcclxuICAgICAgICAgICAgICAgICAgdXNlcl9pZD17YW5zd2VyLnVzZXJfaWR9XHJcbiAgICAgICAgICAgICAgICAgIGFuc3dlcl9pZD17YW5zd2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgICBhbnN3ZXI9e2Fuc3dlci5hbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgIGFuc3dlcl9saWtlcz17YW5zd2VyLmxpa2VkX2J5fVxyXG4gICAgICAgICAgICAgICAgICBhbnN3ZXJfZGF0ZT17YW5zd2VyLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17YW5zd2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPEFuc3dlckZvcm1cclxuICAgICAgICAgICAgICBxdWVzdGlvbl9pZD17cXVlc3Rpb24uaWR9XHJcbiAgICAgICAgICAgICAgcmVmcmVzaEFuc3dlcnM9e3JlZnJlc2hBbnN3ZXJzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L01haW5UZW1wbGF0ZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF4aW9zIiwiY29va2llcyIsInVzZVN0YXRlIiwiTWFpblRlbXBsYXRlIiwic3R5bGVzIiwiQW5zd2VyQ2FyZCIsIkFuc3dlckZvcm0iLCJnZXRVc2VybmFtZUJ5SWQiLCJJbmRleCIsInJvdXRlciIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicXVlc3Rpb25EYXRlIiwic2V0UXVlc3Rpb25kYXRlIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJnZXQiLCJxdWVzdGlvbkRhdGVBcnIiLCJkYXRlIiwic3BsaXQiLCJuZXdRdWVzdGlvbkRhdGUiLCJmZXRjaFVzZXJuYW1lIiwiZmV0Y2hlZFVzZXJuYW1lIiwidXNlcl9pZCIsImZldGNoUXVlc3Rpb24iLCJyZXNwb25zZSIsInByb2Nlc3MiLCJlbnYiLCJTRVJWRVJfVVJMIiwicXVlcnkiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyIiwicmVmcmVzaEFuc3dlcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwicXVlc3Rpb25XcmFwcGVyIiwicCIsInF1ZXN0aW9uX3RleHQiLCJxdWVzdGlvbkRldGFpbHNXcmFwcGVyIiwiYW5zd2Vyc1dyYXBwZXIiLCJhbnN3ZXJzIiwibWFwIiwiYW5zd2VyIiwiYW5zd2VyX2lkIiwiYW5zd2VyX2xpa2VzIiwibGlrZWRfYnkiLCJhbnN3ZXJfZGF0ZSIsInF1ZXN0aW9uX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/question/[id].jsx\n"));

/***/ })

});