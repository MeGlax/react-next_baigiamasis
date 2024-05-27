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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _components_templates_MainTemplate_MainTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/templates/MainTemplate/MainTemplate */ \"./components/templates/MainTemplate/MainTemplate.jsx\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/question/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/user */ \"./api/user.js\");\n/* harmony import */ var _components_organisms_QuestionWrapper_QuestionWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/organisms/QuestionWrapper/QuestionWrapper */ \"./components/organisms/QuestionWrapper/QuestionWrapper.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Index = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [question, setQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"uknown\");\n    const [questionDate, setQuestionDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const question_id = router.query.id;\n    const headers = {\n        authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"jwt_token\")\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (question) {\n            const questionDateArr = question.date.split(\" \");\n            const newQuestionDate = \"\".concat(questionDateArr[1], \" \").concat(questionDateArr[2], \", \").concat(questionDateArr[3]);\n            setQuestionDate(newQuestionDate);\n            const fetchUsername = async ()=>{\n                const fetchedUsername = await (0,_api_user__WEBPACK_IMPORTED_MODULE_6__.getUsernameById)(question.user_id);\n                setUsername(fetchedUsername);\n            };\n            fetchUsername();\n        }\n    }, [\n        question\n    ]);\n    const fetchQuestion = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"\".concat(\"http://www.localhost:3220\", \"/question/\").concat(question_id), {\n                headers\n            });\n            console.log(response.data.question);\n            setQuestion(response.data.question);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        router.query.id && fetchQuestion();\n    }, [\n        router\n    ]);\n    const refreshAnswers = async ()=>{\n        await fetchQuestion();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_templates_MainTemplate_MainTemplate__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_organisms_QuestionWrapper_QuestionWrapper__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            question: question,\n            username: username,\n            questionDate: questionDate,\n            question_id: question_id,\n            refreshAnswers: refreshAnswers\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\pages\\\\question\\\\[id].jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"HzRtBQfPwrL+0hmNYhzIlpeHL3o=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWVzdGlvbi9baWRdLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0Q7QUFDZDtBQUNNO0FBQ0M7QUFDK0M7QUFDdkM7QUFDUTtBQUN3QztBQUV6RixNQUFNVSxRQUFROztJQUNaLE1BQU1DLFNBQVNULHNEQUFTQTtJQUN4QixNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBO0lBQ3hDLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNXLGNBQWNDLGdCQUFnQixHQUFHWiwrQ0FBUUE7SUFDaEQsTUFBTWEsY0FBY1AsT0FBT1EsS0FBSyxDQUFDQyxFQUFFO0lBQ25DLE1BQU1DLFVBQVU7UUFDZEMsZUFBZWxCLHFEQUFXLENBQUM7SUFDN0I7SUFDQUgsZ0RBQVNBLENBQUM7UUFDUixJQUFJVyxVQUFVO1lBQ1osTUFBTVksa0JBQWtCWixTQUFTYSxJQUFJLENBQUNDLEtBQUssQ0FBQztZQUM1QyxNQUFNQyxrQkFBa0IsR0FBeUJILE9BQXRCQSxlQUFlLENBQUMsRUFBRSxFQUFDLEtBQTBCQSxPQUF2QkEsZUFBZSxDQUFDLEVBQUUsRUFBQyxNQUF1QixPQUFuQkEsZUFBZSxDQUFDLEVBQUU7WUFDMUZQLGdCQUFnQlU7WUFDaEIsTUFBTUMsZ0JBQWdCO2dCQUNwQixNQUFNQyxrQkFBa0IsTUFBTXJCLDBEQUFlQSxDQUFDSSxTQUFTa0IsT0FBTztnQkFDOURmLFlBQVljO1lBQ2Q7WUFDQUQ7UUFDRjtJQUNGLEdBQUc7UUFBQ2hCO0tBQVM7SUFDYixNQUFNbUIsZ0JBQWdCO1FBQ3BCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU03QixpREFBUyxDQUM5QixHQUFzQ2UsT0FBbkNlLDJCQUFzQixFQUFDLGNBQXdCLE9BQVpmLGNBQ3RDO2dCQUFFRztZQUFRO1lBRVplLFFBQVFDLEdBQUcsQ0FBQ0wsU0FBU00sSUFBSSxDQUFDMUIsUUFBUTtZQUNsQ0MsWUFBWW1CLFNBQVNNLElBQUksQ0FBQzFCLFFBQVE7UUFDcEMsRUFBRSxPQUFPMkIsS0FBSztZQUNaSCxRQUFRQyxHQUFHLENBQUNFO1FBQ2Q7SUFDRjtJQUNBdEMsZ0RBQVNBLENBQUM7UUFDUlUsT0FBT1EsS0FBSyxDQUFDQyxFQUFFLElBQUlXO0lBQ3JCLEdBQUc7UUFBQ3BCO0tBQU87SUFFWCxNQUFNNkIsaUJBQWlCO1FBQ3JCLE1BQU1UO0lBQ1I7SUFFQSxxQkFDRSw4REFBQ3pCLHVGQUFZQTtrQkFDWCw0RUFBQ0csNkZBQWVBO1lBQ2RHLFVBQVVBO1lBQ1ZFLFVBQVVBO1lBQ1ZFLGNBQWNBO1lBQ2RFLGFBQWFBO1lBQ2JzQixnQkFBZ0JBOzs7Ozs7Ozs7OztBQUl4QjtHQXBETTlCOztRQUNXUixrREFBU0E7OztLQURwQlE7QUFzRE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVlc3Rpb24vW2lkXS5qc3g/ZGU3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBjb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1haW5UZW1wbGF0ZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZW1wbGF0ZXMvTWFpblRlbXBsYXRlL01haW5UZW1wbGF0ZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGdldFVzZXJuYW1lQnlJZCB9IGZyb20gXCIuLi8uLi9hcGkvdXNlclwiO1xyXG5pbXBvcnQgUXVlc3Rpb25XcmFwcGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9RdWVzdGlvbldyYXBwZXIvUXVlc3Rpb25XcmFwcGVyXCI7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcInVrbm93blwiKTtcclxuICBjb25zdCBbcXVlc3Rpb25EYXRlLCBzZXRRdWVzdGlvbkRhdGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBxdWVzdGlvbl9pZCA9IHJvdXRlci5xdWVyeS5pZDtcclxuICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgYXV0aG9yaXphdGlvbjogY29va2llcy5nZXQoXCJqd3RfdG9rZW5cIiksXHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHF1ZXN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXN0aW9uRGF0ZUFyciA9IHF1ZXN0aW9uLmRhdGUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICBjb25zdCBuZXdRdWVzdGlvbkRhdGUgPSBgJHtxdWVzdGlvbkRhdGVBcnJbMV19ICR7cXVlc3Rpb25EYXRlQXJyWzJdfSwgJHtxdWVzdGlvbkRhdGVBcnJbM119YDtcclxuICAgICAgc2V0UXVlc3Rpb25EYXRlKG5ld1F1ZXN0aW9uRGF0ZSk7XHJcbiAgICAgIGNvbnN0IGZldGNoVXNlcm5hbWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hlZFVzZXJuYW1lID0gYXdhaXQgZ2V0VXNlcm5hbWVCeUlkKHF1ZXN0aW9uLnVzZXJfaWQpO1xyXG4gICAgICAgIHNldFVzZXJuYW1lKGZldGNoZWRVc2VybmFtZSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGZldGNoVXNlcm5hbWUoKTtcclxuICAgIH1cclxuICB9LCBbcXVlc3Rpb25dKTtcclxuICBjb25zdCBmZXRjaFF1ZXN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYCR7cHJvY2Vzcy5lbnYuU0VSVkVSX1VSTH0vcXVlc3Rpb24vJHtxdWVzdGlvbl9pZH1gLFxyXG4gICAgICAgIHsgaGVhZGVycyB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEucXVlc3Rpb24pO1xyXG4gICAgICBzZXRRdWVzdGlvbihyZXNwb25zZS5kYXRhLnF1ZXN0aW9uKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJvdXRlci5xdWVyeS5pZCAmJiBmZXRjaFF1ZXN0aW9uKCk7XHJcbiAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICBjb25zdCByZWZyZXNoQW5zd2VycyA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGZldGNoUXVlc3Rpb24oKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1haW5UZW1wbGF0ZT5cclxuICAgICAgPFF1ZXN0aW9uV3JhcHBlclxyXG4gICAgICAgIHF1ZXN0aW9uPXtxdWVzdGlvbn1cclxuICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XHJcbiAgICAgICAgcXVlc3Rpb25EYXRlPXtxdWVzdGlvbkRhdGV9XHJcbiAgICAgICAgcXVlc3Rpb25faWQ9e3F1ZXN0aW9uX2lkfVxyXG4gICAgICAgIHJlZnJlc2hBbnN3ZXJzPXtyZWZyZXNoQW5zd2Vyc31cclxuICAgICAgLz5cclxuICAgIDwvTWFpblRlbXBsYXRlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiYXhpb3MiLCJjb29raWVzIiwidXNlU3RhdGUiLCJNYWluVGVtcGxhdGUiLCJzdHlsZXMiLCJnZXRVc2VybmFtZUJ5SWQiLCJRdWVzdGlvbldyYXBwZXIiLCJJbmRleCIsInJvdXRlciIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicXVlc3Rpb25EYXRlIiwic2V0UXVlc3Rpb25EYXRlIiwicXVlc3Rpb25faWQiLCJxdWVyeSIsImlkIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJnZXQiLCJxdWVzdGlvbkRhdGVBcnIiLCJkYXRlIiwic3BsaXQiLCJuZXdRdWVzdGlvbkRhdGUiLCJmZXRjaFVzZXJuYW1lIiwiZmV0Y2hlZFVzZXJuYW1lIiwidXNlcl9pZCIsImZldGNoUXVlc3Rpb24iLCJyZXNwb25zZSIsInByb2Nlc3MiLCJlbnYiLCJTRVJWRVJfVVJMIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnIiLCJyZWZyZXNoQW5zd2VycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/question/[id].jsx\n"));

/***/ })

});