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

/***/ "./components/molecules/AnswerForm/AnswerForm.jsx":
/*!********************************************************!*\
  !*** ./components/molecules/AnswerForm/AnswerForm.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AnswerForm_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnswerForm.module.css */ \"./components/molecules/AnswerForm/AnswerForm.module.css\");\n/* harmony import */ var _AnswerForm_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AnswerForm_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/Button/Button */ \"./components/atoms/Button/Button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AnswerForm = ()=>{\n    _s();\n    const [answerValue, setAnswerValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const submitAnswer = ()=>{\n        console.log(\"submited\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_AnswerForm_module_css__WEBPACK_IMPORTED_MODULE_1___default().replyWrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_AnswerForm_module_css__WEBPACK_IMPORTED_MODULE_1___default().replyLeft),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"reply:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\AnswerForm\\\\AnswerForm.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onClick: submitAnswer,\n                        label: \"post\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\AnswerForm\\\\AnswerForm.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\AnswerForm\\\\AnswerForm.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_AnswerForm_module_css__WEBPACK_IMPORTED_MODULE_1___default().replyRight),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    name: \"\",\n                    id: \"\",\n                    rows: \"5\",\n                    onChange: (event)=>{\n                        setAnswerValue(event.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\AnswerForm\\\\AnswerForm.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\AnswerForm\\\\AnswerForm.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\AnswerForm\\\\AnswerForm.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AnswerForm, \"VWoU1Gjq4MPRKmTKc7prfpsFBR8=\");\n_c = AnswerForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnswerForm);\nvar _c;\n$RefreshReg$(_c, \"AnswerForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcy9BbnN3ZXJGb3JtL0Fuc3dlckZvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNkM7QUFDRTtBQUNkO0FBRWpDLE1BQU1HLGFBQWE7O0lBQ2pCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSCwrQ0FBUUE7SUFDOUMsTUFBTUksZUFBZTtRQUNuQkMsUUFBUUMsR0FBRyxDQUFDO0lBQ2Q7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV1YsNEVBQW1COzswQkFDakMsOERBQUNTO2dCQUFJQyxXQUFXVix5RUFBZ0I7O2tDQUM5Qiw4REFBQ2E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ1osNERBQU1BO3dCQUFDYSxTQUFTUjt3QkFBY1MsT0FBTzs7Ozs7Ozs7Ozs7OzBCQUV4Qyw4REFBQ047Z0JBQUlDLFdBQVdWLDBFQUFpQjswQkFDL0IsNEVBQUNpQjtvQkFDQ0MsTUFBSztvQkFDTEMsSUFBRztvQkFDSEMsTUFBSztvQkFDTEMsVUFBVSxDQUFDQzt3QkFDVGpCLGVBQWVpQixNQUFNQyxNQUFNLENBQUNDLEtBQUs7b0JBQ25DOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0dBdkJNckI7S0FBQUE7QUF5Qk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvQW5zd2VyRm9ybS9BbnN3ZXJGb3JtLmpzeD9jNTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQW5zd2VyRm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2F0b21zL0J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFuc3dlckZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Fuc3dlclZhbHVlLCBzZXRBbnN3ZXJWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHN1Ym1pdEFuc3dlciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwic3VibWl0ZWRcIik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXBseVdyYXBwZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlcGx5TGVmdH0+XHJcbiAgICAgICAgPHA+cmVwbHk6PC9wPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17c3VibWl0QW5zd2VyfSBsYWJlbD17XCJwb3N0XCJ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlcGx5UmlnaHR9PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgbmFtZT1cIlwiXHJcbiAgICAgICAgICBpZD1cIlwiXHJcbiAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHNldEFuc3dlclZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbnN3ZXJGb3JtO1xyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiQnV0dG9uIiwidXNlU3RhdGUiLCJBbnN3ZXJGb3JtIiwiYW5zd2VyVmFsdWUiLCJzZXRBbnN3ZXJWYWx1ZSIsInN1Ym1pdEFuc3dlciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJyZXBseVdyYXBwZXIiLCJyZXBseUxlZnQiLCJwIiwib25DbGljayIsImxhYmVsIiwicmVwbHlSaWdodCIsInRleHRhcmVhIiwibmFtZSIsImlkIiwicm93cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/molecules/AnswerForm/AnswerForm.jsx\n"));

/***/ })

});