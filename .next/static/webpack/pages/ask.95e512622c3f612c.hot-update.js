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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/Button/Button */ \"./components/atoms/Button/Button.jsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst QuestionForm = ()=>{\n    _s();\n    const [statusText, setStatusText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [question, setQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const createQuestion = async ()=>{\n        try {\n            const headers = {\n                authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"jwt_token\")\n            };\n            const body = {\n                question_text: question\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"\".concat(\"http://www.localhost:3220\", \"/question\"), {\n                body\n            }, {\n                headers\n            });\n            if (response.status === 201) {\n                setStatusText(\"Posted successfully. You'll be redirected to main page in 3s\");\n                router.push(\"/\");\n            }\n        } catch (err) {\n            setStatusText(\"please log in before asking\");\n            console.log(\"error:\", err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"klausimas?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\QuestionForm\\\\QuestionForm.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                type: \"text\",\n                onChange: (event)=>{\n                    setQuestion(event.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\QuestionForm\\\\QuestionForm.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"submit\",\n                onClick: ()=>{\n                    createQuestion();\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\QuestionForm\\\\QuestionForm.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: statusText\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\QuestionForm\\\\QuestionForm.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\QuestionForm\\\\QuestionForm.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(QuestionForm, \"s89f5968clEkqgv9WHHLQnzW46s=\");\n_c = QuestionForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionForm);\nvar _c;\n$RefreshReg$(_c, \"QuestionForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcy9RdWVzdGlvbkZvcm0vUXVlc3Rpb25Gb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ3FCO0FBQ2Q7QUFDRDtBQUNOO0FBRTFCLE1BQU1LLGVBQWU7O0lBQ25CLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTVEsaUJBQWlCO1FBQ3JCLElBQUk7WUFDRixNQUFNQyxVQUFVO2dCQUNkQyxlQUFlVCxxREFBVyxDQUFDO1lBQzdCO1lBQ0EsTUFBTVcsT0FBTztnQkFDWEMsZUFBZVA7WUFDakI7WUFDQSxNQUFNUSxXQUFXLE1BQU1aLGtEQUFVLENBQy9CLEdBQTBCLE9BQXZCYywyQkFBc0IsRUFBQyxjQUMxQjtnQkFBRUo7WUFBSyxHQUNQO2dCQUFFSDtZQUFRO1lBRVosSUFBSUssU0FBU0ssTUFBTSxLQUFLLEtBQUs7Z0JBQzNCZCxjQUNFO2dCQUVGZSxPQUFPQyxJQUFJLENBQUM7WUFDZDtRQUNGLEVBQUUsT0FBT0MsS0FBSztZQUNaakIsY0FBYztZQUNka0IsUUFBUUMsR0FBRyxDQUFDLFVBQVVGO1FBQ3hCO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDQzswQkFBRTs7Ozs7OzBCQUNILDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsVUFBVSxDQUFDQztvQkFDVHZCLFlBQVl1QixNQUFNQyxNQUFNLENBQUNDLEtBQUs7Z0JBQ2hDOzs7Ozs7MEJBRUYsOERBQUNqQyw0REFBTUE7Z0JBQ0xrQyxPQUFNO2dCQUNOQyxTQUFTO29CQUNQMUI7Z0JBQ0Y7Ozs7OzswQkFFRiw4REFBQ2tCOzBCQUFHdEI7Ozs7Ozs7Ozs7OztBQUdWO0dBN0NNRDtLQUFBQTtBQStDTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vbGVjdWxlcy9RdWVzdGlvbkZvcm0vUXVlc3Rpb25Gb3JtLmpzeD9jZDYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vYXRvbXMvQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IFF1ZXN0aW9uRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbc3RhdHVzVGV4dCwgc2V0U3RhdHVzVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGNyZWF0ZVF1ZXN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiBjb29raWVzLmdldChcImp3dF90b2tlblwiKSxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICBxdWVzdGlvbl90ZXh0OiBxdWVzdGlvbixcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke3Byb2Nlc3MuZW52LlNFUlZFUl9VUkx9L3F1ZXN0aW9uYCxcclxuICAgICAgICB7IGJvZHkgfSxcclxuICAgICAgICB7IGhlYWRlcnMgfVxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBzZXRTdGF0dXNUZXh0KFxyXG4gICAgICAgICAgXCJQb3N0ZWQgc3VjY2Vzc2Z1bGx5LiBZb3UnbGwgYmUgcmVkaXJlY3RlZCB0byBtYWluIHBhZ2UgaW4gM3NcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0U3RhdHVzVGV4dChcInBsZWFzZSBsb2cgaW4gYmVmb3JlIGFza2luZ1wiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvcjpcIiwgZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD5rbGF1c2ltYXM/PC9wPlxyXG4gICAgICA8dGV4dGFyZWFcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgc2V0UXVlc3Rpb24oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgbGFiZWw9XCJzdWJtaXRcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGNyZWF0ZVF1ZXN0aW9uKCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPHA+e3N0YXR1c1RleHR9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uRm9ybTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwidXNlU3RhdGUiLCJjb29raWVzIiwiYXhpb3MiLCJRdWVzdGlvbkZvcm0iLCJzdGF0dXNUZXh0Iiwic2V0U3RhdHVzVGV4dCIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJjcmVhdGVRdWVzdGlvbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiZ2V0IiwiYm9keSIsInF1ZXN0aW9uX3RleHQiLCJyZXNwb25zZSIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiU0VSVkVSX1VSTCIsInN0YXR1cyIsInJvdXRlciIsInB1c2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwicCIsInRleHRhcmVhIiwidHlwZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxhYmVsIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/molecules/QuestionForm/QuestionForm.jsx\n"));

/***/ })

});