"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/organisms/CardsWrapper/CardsWrapper.jsx":
/*!************************************************************!*\
  !*** ./components/organisms/CardsWrapper/CardsWrapper.jsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CardsWrapper_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardsWrapper.module.css */ \"./components/organisms/CardsWrapper/CardsWrapper.module.css\");\n/* harmony import */ var _CardsWrapper_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CardsWrapper_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _molecules_Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules/Card/Card */ \"./components/molecules/Card/Card.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst CardsWrapper = ()=>{\n    _s();\n    const [questions, setQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [FilteredQuestions, setFilteredQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const fetchQuestions = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(\"http://www.localhost:3220\", \"/questions\"));\n            setQuestions(response.data.questions);\n        } catch (err) {\n            console.log(\"error:\", err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchQuestions();\n    }, [\n        questions\n    ]);\n    const refreshQuestions = async ()=>{\n        console.log(\"heelo\");\n        await fetchQuestions();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CardsWrapper_module_css__WEBPACK_IMPORTED_MODULE_1___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CardsWrapper_module_css__WEBPACK_IMPORTED_MODULE_1___default().filterOptions),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"filter:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            questions && questions.map((question)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_Card_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    refreshQuestions: refreshQuestions,\n                    title: question.question_text,\n                    date: question.date,\n                    answersAmount: question.answers.length,\n                    asker_id: question.user_id,\n                    question_id: question.id\n                }, question.id, false, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardsWrapper, \"kg+wHFc9exjYTt84nLigpsyy2T0=\");\n_c = CardsWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardsWrapper);\nvar _c;\n$RefreshReg$(_c, \"CardsWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkc1dyYXBwZXIvQ2FyZHNXcmFwcGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQztBQUNGO0FBQ0Q7QUFDbEI7QUFFMUIsTUFBTUssZUFBZTs7SUFDbkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQTtJQUMxQyxNQUFNLENBQUNLLG1CQUFtQkMscUJBQXFCLEdBQUdOLCtDQUFRQTtJQUUxRCxNQUFNTyxpQkFBaUI7UUFDckIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVAsaURBQVMsQ0FBQyxHQUEwQixPQUF2QlMsMkJBQXNCLEVBQUM7WUFDM0ROLGFBQWFJLFNBQVNLLElBQUksQ0FBQ1YsU0FBUztRQUN0QyxFQUFFLE9BQU9XLEtBQUs7WUFDWkMsUUFBUUMsR0FBRyxDQUFDLFVBQVVGO1FBQ3hCO0lBQ0Y7SUFDQWYsZ0RBQVNBLENBQUM7UUFDUlE7SUFDRixHQUFHO1FBQUNKO0tBQVU7SUFDZCxNQUFNYyxtQkFBbUI7UUFDdkJGLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE1BQU1UO0lBQ1I7SUFDQSxxQkFDRSw4REFBQ1c7UUFBSUMsV0FBV3RCLHNFQUFXOzswQkFDekIsOERBQUNxQjtnQkFBSUMsV0FBV3RCLCtFQUFvQjswQkFDbEMsNEVBQUN5Qjs4QkFBRTs7Ozs7Ozs7Ozs7WUFFSm5CLGFBQ0NBLFVBQVVvQixHQUFHLENBQUMsQ0FBQ0M7Z0JBQ2IscUJBQ0UsOERBQUMxQiw0REFBSUE7b0JBRUhtQixrQkFBa0JBO29CQUNsQlEsT0FBT0QsU0FBU0UsYUFBYTtvQkFDN0JDLE1BQU1ILFNBQVNHLElBQUk7b0JBQ25CQyxlQUFlSixTQUFTSyxPQUFPLENBQUNDLE1BQU07b0JBQ3RDQyxVQUFVUCxTQUFTUSxPQUFPO29CQUMxQkMsYUFBYVQsU0FBU1UsRUFBRTttQkFObkJWLFNBQVNVLEVBQUU7Ozs7O1lBU3RCOzs7Ozs7O0FBR1I7R0F4Q01oQztLQUFBQTtBQTBDTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkc1dyYXBwZXIvQ2FyZHNXcmFwcGVyLmpzeD84NTcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2FyZHNXcmFwcGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uL21vbGVjdWxlcy9DYXJkL0NhcmRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBDYXJkc1dyYXBwZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3F1ZXN0aW9ucywgc2V0UXVlc3Rpb25zXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW0ZpbHRlcmVkUXVlc3Rpb25zLCBzZXRGaWx0ZXJlZFF1ZXN0aW9uc10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBmZXRjaFF1ZXN0aW9ucyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LlNFUlZFUl9VUkx9L3F1ZXN0aW9uc2ApO1xyXG4gICAgICBzZXRRdWVzdGlvbnMocmVzcG9uc2UuZGF0YS5xdWVzdGlvbnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6XCIsIGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hRdWVzdGlvbnMoKTtcclxuICB9LCBbcXVlc3Rpb25zXSk7XHJcbiAgY29uc3QgcmVmcmVzaFF1ZXN0aW9ucyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVlbG9cIik7XHJcbiAgICBhd2FpdCBmZXRjaFF1ZXN0aW9ucygpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyT3B0aW9uc30+XHJcbiAgICAgICAgPHA+ZmlsdGVyOjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtxdWVzdGlvbnMgJiZcclxuICAgICAgICBxdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICBrZXk9e3F1ZXN0aW9uLmlkfVxyXG4gICAgICAgICAgICAgIHJlZnJlc2hRdWVzdGlvbnM9e3JlZnJlc2hRdWVzdGlvbnN9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3F1ZXN0aW9uLnF1ZXN0aW9uX3RleHR9XHJcbiAgICAgICAgICAgICAgZGF0ZT17cXVlc3Rpb24uZGF0ZX1cclxuICAgICAgICAgICAgICBhbnN3ZXJzQW1vdW50PXtxdWVzdGlvbi5hbnN3ZXJzLmxlbmd0aH1cclxuICAgICAgICAgICAgICBhc2tlcl9pZD17cXVlc3Rpb24udXNlcl9pZH1cclxuICAgICAgICAgICAgICBxdWVzdGlvbl9pZD17cXVlc3Rpb24uaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRzV3JhcHBlcjtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkNhcmQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQ2FyZHNXcmFwcGVyIiwicXVlc3Rpb25zIiwic2V0UXVlc3Rpb25zIiwiRmlsdGVyZWRRdWVzdGlvbnMiLCJzZXRGaWx0ZXJlZFF1ZXN0aW9ucyIsImZldGNoUXVlc3Rpb25zIiwicmVzcG9uc2UiLCJnZXQiLCJwcm9jZXNzIiwiZW52IiwiU0VSVkVSX1VSTCIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVmcmVzaFF1ZXN0aW9ucyIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJmaWx0ZXJPcHRpb25zIiwicCIsIm1hcCIsInF1ZXN0aW9uIiwidGl0bGUiLCJxdWVzdGlvbl90ZXh0IiwiZGF0ZSIsImFuc3dlcnNBbW91bnQiLCJhbnN3ZXJzIiwibGVuZ3RoIiwiYXNrZXJfaWQiLCJ1c2VyX2lkIiwicXVlc3Rpb25faWQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/organisms/CardsWrapper/CardsWrapper.jsx\n"));

/***/ })

});