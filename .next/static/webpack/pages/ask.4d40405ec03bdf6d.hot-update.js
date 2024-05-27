"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ask",{

/***/ "./components/molecules/QuestionForm/QuestionForm.jsx":
/*!************************************************************!*\
  !*** ./components/molecules/QuestionForm/QuestionForm.jsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/Button/Button */ \"./components/atoms/Button/Button.jsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst QuestionForm = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [statusText, setStatusText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [question, setQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const createQuestion = async ()=>{\n        try {\n            const headers = {\n                authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"jwt_token\")\n            };\n            console.log(headers);\n            const body = {\n                question_text: question\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"\".concat(\"http://www.localhost:3220\", \"/question\"), body, {\n                headers\n            });\n            if (response.status === 201) {\n                setStatusText(\"Posted successfully. You'll be redirected to main page in 3s\");\n                router.push(\"/\");\n            }\n        } catch (err) {\n            setStatusText(\"please log in before asking\");\n            console.log(\"error:\", err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: StyleSheet.main,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"klausimas?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\QuestionForm\\\\QuestionForm.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                type: \"text\",\n                onChange: (event)=>{\n                    setQuestion(event.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\QuestionForm\\\\QuestionForm.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"submit\",\n                onPushed: ()=>{\n                    createQuestion();\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\QuestionForm\\\\QuestionForm.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: statusText\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\QuestionForm\\\\QuestionForm.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\QuestionForm\\\\QuestionForm.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(QuestionForm, \"Dt7vkg/s9XXgYfrpuMlF8+zsl6I=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = QuestionForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionForm);\nvar _c;\n$RefreshReg$(_c, \"QuestionForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcy9RdWVzdGlvbkZvcm0vUXVlc3Rpb25Gb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDcUI7QUFDZDtBQUNEO0FBQ047QUFDYztBQUV4QyxNQUFNTSxlQUFlOztJQUNuQixNQUFNQyxTQUFTRixzREFBU0E7SUFDeEIsTUFBTSxDQUFDRyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNVSxpQkFBaUI7UUFDckIsSUFBSTtZQUNGLE1BQU1DLFVBQVU7Z0JBQ2RDLGVBQWVYLHFEQUFXLENBQUM7WUFDN0I7WUFDQWEsUUFBUUMsR0FBRyxDQUFDSjtZQUNaLE1BQU1LLE9BQU87Z0JBQ1hDLGVBQWVUO1lBQ2pCO1lBQ0EsTUFBTVUsV0FBVyxNQUFNaEIsa0RBQVUsQ0FDL0IsR0FBMEIsT0FBdkJrQiwyQkFBc0IsRUFBQyxjQUMxQkosTUFDQTtnQkFBRUw7WUFBUTtZQUVaLElBQUlPLFNBQVNLLE1BQU0sS0FBSyxLQUFLO2dCQUMzQmhCLGNBQ0U7Z0JBRUZGLE9BQU9tQixJQUFJLENBQUM7WUFDZDtRQUNGLEVBQUUsT0FBT0MsS0FBSztZQUNabEIsY0FBYztZQUNkTyxRQUFRQyxHQUFHLENBQUMsVUFBVVU7UUFDeEI7SUFDRjtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXQyxXQUFXQyxJQUFJOzswQkFDN0IsOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxVQUFVLENBQUNDO29CQUNUekIsWUFBWXlCLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztnQkFDaEM7Ozs7OzswQkFFRiw4REFBQ3JDLDREQUFNQTtnQkFDTHNDLE9BQU07Z0JBQ05DLFVBQVU7b0JBQ1I1QjtnQkFDRjs7Ozs7OzBCQUVGLDhEQUFDb0I7MEJBQUd4Qjs7Ozs7Ozs7Ozs7O0FBR1Y7R0EvQ01GOztRQUNXRCxrREFBU0E7OztLQURwQkM7QUFpRE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvUXVlc3Rpb25Gb3JtL1F1ZXN0aW9uRm9ybS5qc3g/Y2Q2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2F0b21zL0J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgUXVlc3Rpb25Gb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtzdGF0dXNUZXh0LCBzZXRTdGF0dXNUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtxdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgY3JlYXRlUXVlc3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb246IGNvb2tpZXMuZ2V0KFwiand0X3Rva2VuXCIpLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zb2xlLmxvZyhoZWFkZXJzKTtcclxuICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICBxdWVzdGlvbl90ZXh0OiBxdWVzdGlvbixcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke3Byb2Nlc3MuZW52LlNFUlZFUl9VUkx9L3F1ZXN0aW9uYCxcclxuICAgICAgICBib2R5LFxyXG4gICAgICAgIHsgaGVhZGVycyB9XHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIHNldFN0YXR1c1RleHQoXHJcbiAgICAgICAgICBcIlBvc3RlZCBzdWNjZXNzZnVsbHkuIFlvdSdsbCBiZSByZWRpcmVjdGVkIHRvIG1haW4gcGFnZSBpbiAzc1wiXHJcbiAgICAgICAgKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRTdGF0dXNUZXh0KFwicGxlYXNlIGxvZyBpbiBiZWZvcmUgYXNraW5nXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yOlwiLCBlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZVNoZWV0Lm1haW59PlxyXG4gICAgICA8cD5rbGF1c2ltYXM/PC9wPlxyXG4gICAgICA8dGV4dGFyZWFcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgc2V0UXVlc3Rpb24oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgbGFiZWw9XCJzdWJtaXRcIlxyXG4gICAgICAgIG9uUHVzaGVkPXsoKSA9PiB7XHJcbiAgICAgICAgICBjcmVhdGVRdWVzdGlvbigpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwPntzdGF0dXNUZXh0fTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbkZvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsInVzZVN0YXRlIiwiY29va2llcyIsImF4aW9zIiwidXNlUm91dGVyIiwiUXVlc3Rpb25Gb3JtIiwicm91dGVyIiwic3RhdHVzVGV4dCIsInNldFN0YXR1c1RleHQiLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwiY3JlYXRlUXVlc3Rpb24iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwicXVlc3Rpb25fdGV4dCIsInJlc3BvbnNlIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJTRVJWRVJfVVJMIiwic3RhdHVzIiwicHVzaCIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsIlN0eWxlU2hlZXQiLCJtYWluIiwicCIsInRleHRhcmVhIiwidHlwZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxhYmVsIiwib25QdXNoZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/molecules/QuestionForm/QuestionForm.jsx\n"));

/***/ })

});