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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _components_templates_MainTemplate_MainTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/templates/MainTemplate/MainTemplate */ \"./components/templates/MainTemplate/MainTemplate.jsx\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/question/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_atoms_AnswerCard_AnswerCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/atoms/AnswerCard/AnswerCard */ \"./components/atoms/AnswerCard/AnswerCard.jsx\");\n/* harmony import */ var _components_molecules_AnswerForm_AnswerForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/molecules/AnswerForm/AnswerForm */ \"./components/molecules/AnswerForm/AnswerForm.jsx\");\n/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api/user */ \"./api/user.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Index = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [question, setQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"uknown\");\n    const [questionDate, setQuestiondate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const headers = {\n        authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"jwt_token\")\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (question) {\n            const questionDateArr = question.date.split(\" \");\n            const newQuestionDate = \"\".concat(questionDateArr[1], \" \").concat(questionDateArr[2], \", \").concat(questionDateArr[3]);\n            setQuestiondate(newQuestionDate);\n            const fetchUsername = async ()=>{\n                const fetchedUsername = await (0,_api_user__WEBPACK_IMPORTED_MODULE_8__.getUsernameById)(question.user_id);\n                setUsername(fetchedUsername);\n            };\n            fetchUsername();\n        }\n    }, [\n        question\n    ]);\n    const fetchQuestion = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(\"\".concat(\"http://www.localhost:3220\", \"/question/\").concat(router.query.id), {\n                headers\n            });\n            console.log(response.data.question);\n            setQuestion(response.data.question);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        router.query.id && fetchQuestion();\n    }, [\n        router\n    ]);\n    const refreshAnswers = async ()=>{\n        await fetchQuestion();\n    };\n    console.log(\"token id \".concat(js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(user_id)));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_templates_MainTemplate_MainTemplate__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: question && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().questionWrapper),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: question.question_text\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().questionDetailsWrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Question by: \",\n                                username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Question asked: \",\n                                questionDate\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().answersWrapper),\n                    children: [\n                        question.answers.map((answer)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_AnswerCard_AnswerCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                user_id: answer.user_id,\n                                answer_id: answer.id,\n                                answer: answer.answer,\n                                answer_likes: answer.liked_by,\n                                answer_date: answer.date\n                            }, answer.id, false, {\n                                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n                                lineNumber: 67,\n                                columnNumber: 17\n                            }, undefined);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_AnswerForm_AnswerForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            question_id: question.id,\n                            refreshAnswers: refreshAnswers\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n            lineNumber: 56,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"HeBbYVJ5X+omErKwEt7F/3E+iko=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3F1ZXN0aW9uL1tpZF0uanN4P2RlNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNYWluVGVtcGxhdGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVtcGxhdGVzL01haW5UZW1wbGF0ZS9NYWluVGVtcGxhdGVcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQW5zd2VyQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hdG9tcy9BbnN3ZXJDYXJkL0Fuc3dlckNhcmRcIjtcclxuaW1wb3J0IEFuc3dlckZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0Fuc3dlckZvcm0vQW5zd2VyRm9ybVwiO1xyXG5pbXBvcnQgeyBnZXRVc2VybmFtZUJ5SWQgfSBmcm9tIFwiLi4vLi4vYXBpL3VzZXJcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtxdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwidWtub3duXCIpO1xyXG4gIGNvbnN0IFtxdWVzdGlvbkRhdGUsIHNldFF1ZXN0aW9uZGF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICBhdXRob3JpemF0aW9uOiBjb29raWVzLmdldChcImp3dF90b2tlblwiKSxcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocXVlc3Rpb24pIHtcclxuICAgICAgY29uc3QgcXVlc3Rpb25EYXRlQXJyID0gcXVlc3Rpb24uZGF0ZS5zcGxpdChcIiBcIik7XHJcbiAgICAgIGNvbnN0IG5ld1F1ZXN0aW9uRGF0ZSA9IGAke3F1ZXN0aW9uRGF0ZUFyclsxXX0gJHtxdWVzdGlvbkRhdGVBcnJbMl19LCAke3F1ZXN0aW9uRGF0ZUFyclszXX1gO1xyXG4gICAgICBzZXRRdWVzdGlvbmRhdGUobmV3UXVlc3Rpb25EYXRlKTtcclxuICAgICAgY29uc3QgZmV0Y2hVc2VybmFtZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaGVkVXNlcm5hbWUgPSBhd2FpdCBnZXRVc2VybmFtZUJ5SWQocXVlc3Rpb24udXNlcl9pZCk7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUoZmV0Y2hlZFVzZXJuYW1lKTtcclxuICAgICAgfTtcclxuICAgICAgZmV0Y2hVc2VybmFtZSgpO1xyXG4gICAgfVxyXG4gIH0sIFtxdWVzdGlvbl0pO1xyXG4gIGNvbnN0IGZldGNoUXVlc3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgJHtwcm9jZXNzLmVudi5TRVJWRVJfVVJMfS9xdWVzdGlvbi8ke3JvdXRlci5xdWVyeS5pZH1gLFxyXG4gICAgICAgIHsgaGVhZGVycyB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEucXVlc3Rpb24pO1xyXG4gICAgICBzZXRRdWVzdGlvbihyZXNwb25zZS5kYXRhLnF1ZXN0aW9uKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJvdXRlci5xdWVyeS5pZCAmJiBmZXRjaFF1ZXN0aW9uKCk7XHJcbiAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICBjb25zdCByZWZyZXNoQW5zd2VycyA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGZldGNoUXVlc3Rpb24oKTtcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKGB0b2tlbiBpZCAke2Nvb2tpZXMuZ2V0KHVzZXJfaWQpfWApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1haW5UZW1wbGF0ZT5cclxuICAgICAge3F1ZXN0aW9uICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbldyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8cD57cXVlc3Rpb24ucXVlc3Rpb25fdGV4dH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25EZXRhaWxzV3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxwPlF1ZXN0aW9uIGJ5OiB7dXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8cD5RdWVzdGlvbiBhc2tlZDoge3F1ZXN0aW9uRGF0ZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2Vyc1dyYXBwZXJ9PlxyXG4gICAgICAgICAgICB7cXVlc3Rpb24uYW5zd2Vycy5tYXAoKGFuc3dlcikgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8QW5zd2VyQ2FyZFxyXG4gICAgICAgICAgICAgICAgICB1c2VyX2lkPXthbnN3ZXIudXNlcl9pZH1cclxuICAgICAgICAgICAgICAgICAgYW5zd2VyX2lkPXthbnN3ZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgIGFuc3dlcj17YW5zd2VyLmFuc3dlcn1cclxuICAgICAgICAgICAgICAgICAgYW5zd2VyX2xpa2VzPXthbnN3ZXIubGlrZWRfYnl9XHJcbiAgICAgICAgICAgICAgICAgIGFuc3dlcl9kYXRlPXthbnN3ZXIuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAga2V5PXthbnN3ZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8QW5zd2VyRm9ybVxyXG4gICAgICAgICAgICAgIHF1ZXN0aW9uX2lkPXtxdWVzdGlvbi5pZH1cclxuICAgICAgICAgICAgICByZWZyZXNoQW5zd2Vycz17cmVmcmVzaEFuc3dlcnN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvTWFpblRlbXBsYXRlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiYXhpb3MiLCJjb29raWVzIiwidXNlU3RhdGUiLCJNYWluVGVtcGxhdGUiLCJzdHlsZXMiLCJBbnN3ZXJDYXJkIiwiQW5zd2VyRm9ybSIsImdldFVzZXJuYW1lQnlJZCIsIkluZGV4Iiwicm91dGVyIiwicXVlc3Rpb24iLCJzZXRRdWVzdGlvbiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJxdWVzdGlvbkRhdGUiLCJzZXRRdWVzdGlvbmRhdGUiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImdldCIsInF1ZXN0aW9uRGF0ZUFyciIsImRhdGUiLCJzcGxpdCIsIm5ld1F1ZXN0aW9uRGF0ZSIsImZldGNoVXNlcm5hbWUiLCJmZXRjaGVkVXNlcm5hbWUiLCJ1c2VyX2lkIiwiZmV0Y2hRdWVzdGlvbiIsInJlc3BvbnNlIiwicHJvY2VzcyIsImVudiIsIlNFUlZFUl9VUkwiLCJxdWVyeSIsImlkIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnIiLCJyZWZyZXNoQW5zd2VycyIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJxdWVzdGlvbldyYXBwZXIiLCJwIiwicXVlc3Rpb25fdGV4dCIsInF1ZXN0aW9uRGV0YWlsc1dyYXBwZXIiLCJhbnN3ZXJzV3JhcHBlciIsImFuc3dlcnMiLCJtYXAiLCJhbnN3ZXIiLCJhbnN3ZXJfaWQiLCJhbnN3ZXJfbGlrZXMiLCJsaWtlZF9ieSIsImFuc3dlcl9kYXRlIiwicXVlc3Rpb25faWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/question/[id].jsx\n"));

/***/ })

});