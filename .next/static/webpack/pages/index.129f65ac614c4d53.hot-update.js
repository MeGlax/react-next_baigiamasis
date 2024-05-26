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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CardsWrapper_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardsWrapper.module.css */ \"./components/organisms/CardsWrapper/CardsWrapper.module.css\");\n/* harmony import */ var _CardsWrapper_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CardsWrapper_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _molecules_Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules/Card/Card */ \"./components/molecules/Card/Card.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst CardsWrapper = ()=>{\n    _s();\n    const [questions, setQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [FilteredQuestions, setFilteredQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        console.log(\"hello\");\n    }, []);\n    const [isAnswered, setAnswered] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const fetchQuestions = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(\"http://www.localhost:3220\", \"/questions\"));\n            setQuestions(response.data.questions);\n        } catch (err) {\n            console.log(\"error:\", err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchQuestions();\n    }, [\n        questions\n    ]);\n    const refreshQuestions = async ()=>{\n        console.log(\"heelo\");\n        await fetchQuestions();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CardsWrapper_module_css__WEBPACK_IMPORTED_MODULE_1___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        id: \"myCheckbox\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        for: \"myCheckbox\",\n                        children: \"Only answered questions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            questions && questions.map((question)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_Card_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    refreshQuestions: refreshQuestions,\n                    title: question.question_text,\n                    date: question.date,\n                    answersAmount: question.answers.length,\n                    asker_id: question.user_id,\n                    question_id: question.id\n                }, question.id, false, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardsWrapper, \"HATSDVuqNcytpTUwGrWH4ZtjqJ0=\");\n_c = CardsWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardsWrapper);\nvar _c;\n$RefreshReg$(_c, \"CardsWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkc1dyYXBwZXIvQ2FyZHNXcmFwcGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQztBQUNGO0FBQ0Q7QUFDbEI7QUFFMUIsTUFBTUssZUFBZTs7SUFDbkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQTtJQUMxQyxNQUFNLENBQUNLLG1CQUFtQkMscUJBQXFCLEdBQUdOLCtDQUFRQTtJQUMxREQsZ0RBQVNBLENBQUM7UUFDUlEsUUFBUUMsR0FBRyxDQUFDO0lBQ2QsR0FBRyxFQUFFO0lBQ0wsTUFBTSxDQUFDQyxZQUFZQyxZQUFZLEdBQUdWLCtDQUFRQTtJQUMxQyxNQUFNVyxpQkFBaUI7UUFDckIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVgsaURBQVMsQ0FBQyxHQUEwQixPQUF2QmEsMkJBQXNCLEVBQUM7WUFDM0RWLGFBQWFRLFNBQVNLLElBQUksQ0FBQ2QsU0FBUztRQUN0QyxFQUFFLE9BQU9lLEtBQUs7WUFDWlgsUUFBUUMsR0FBRyxDQUFDLFVBQVVVO1FBQ3hCO0lBQ0Y7SUFDQW5CLGdEQUFTQSxDQUFDO1FBQ1JZO0lBQ0YsR0FBRztRQUFDUjtLQUFVO0lBQ2QsTUFBTWdCLG1CQUFtQjtRQUN2QlosUUFBUUMsR0FBRyxDQUFDO1FBQ1osTUFBTUc7SUFDUjtJQUNBLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFXeEIsc0VBQVc7OzBCQUN6Qiw4REFBQ3VCOztrQ0FDQyw4REFBQ0c7d0JBQU1DLE1BQUs7d0JBQVdDLElBQUc7Ozs7OztrQ0FDMUIsOERBQUNDO3dCQUFNQyxLQUFJO2tDQUFhOzs7Ozs7Ozs7Ozs7WUFFekJ4QixhQUNDQSxVQUFVeUIsR0FBRyxDQUFDLENBQUNDO2dCQUNiLHFCQUNFLDhEQUFDL0IsNERBQUlBO29CQUVIcUIsa0JBQWtCQTtvQkFDbEJXLE9BQU9ELFNBQVNFLGFBQWE7b0JBQzdCQyxNQUFNSCxTQUFTRyxJQUFJO29CQUNuQkMsZUFBZUosU0FBU0ssT0FBTyxDQUFDQyxNQUFNO29CQUN0Q0MsVUFBVVAsU0FBU1EsT0FBTztvQkFDMUJDLGFBQWFULFNBQVNKLEVBQUU7bUJBTm5CSSxTQUFTSixFQUFFOzs7OztZQVN0Qjs7Ozs7OztBQUdSO0dBNUNNdkI7S0FBQUE7QUE4Q04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZHNXcmFwcGVyL0NhcmRzV3JhcHBlci5qc3g/ODU3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhcmRzV3JhcHBlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi9tb2xlY3VsZXMvQ2FyZC9DYXJkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgQ2FyZHNXcmFwcGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtGaWx0ZXJlZFF1ZXN0aW9ucywgc2V0RmlsdGVyZWRRdWVzdGlvbnNdID0gdXNlU3RhdGUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgW2lzQW5zd2VyZWQsIHNldEFuc3dlcmVkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgZmV0Y2hRdWVzdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5TRVJWRVJfVVJMfS9xdWVzdGlvbnNgKTtcclxuICAgICAgc2V0UXVlc3Rpb25zKHJlc3BvbnNlLmRhdGEucXVlc3Rpb25zKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yOlwiLCBlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUXVlc3Rpb25zKCk7XHJcbiAgfSwgW3F1ZXN0aW9uc10pO1xyXG4gIGNvbnN0IHJlZnJlc2hRdWVzdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlZWxvXCIpO1xyXG4gICAgYXdhaXQgZmV0Y2hRdWVzdGlvbnMoKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIm15Q2hlY2tib3hcIj48L2lucHV0PlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJteUNoZWNrYm94XCI+T25seSBhbnN3ZXJlZCBxdWVzdGlvbnM8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3F1ZXN0aW9ucyAmJlxyXG4gICAgICAgIHF1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIGtleT17cXVlc3Rpb24uaWR9XHJcbiAgICAgICAgICAgICAgcmVmcmVzaFF1ZXN0aW9ucz17cmVmcmVzaFF1ZXN0aW9uc31cclxuICAgICAgICAgICAgICB0aXRsZT17cXVlc3Rpb24ucXVlc3Rpb25fdGV4dH1cclxuICAgICAgICAgICAgICBkYXRlPXtxdWVzdGlvbi5kYXRlfVxyXG4gICAgICAgICAgICAgIGFuc3dlcnNBbW91bnQ9e3F1ZXN0aW9uLmFuc3dlcnMubGVuZ3RofVxyXG4gICAgICAgICAgICAgIGFza2VyX2lkPXtxdWVzdGlvbi51c2VyX2lkfVxyXG4gICAgICAgICAgICAgIHF1ZXN0aW9uX2lkPXtxdWVzdGlvbi5pZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZHNXcmFwcGVyO1xyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiQ2FyZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJDYXJkc1dyYXBwZXIiLCJxdWVzdGlvbnMiLCJzZXRRdWVzdGlvbnMiLCJGaWx0ZXJlZFF1ZXN0aW9ucyIsInNldEZpbHRlcmVkUXVlc3Rpb25zIiwiY29uc29sZSIsImxvZyIsImlzQW5zd2VyZWQiLCJzZXRBbnN3ZXJlZCIsImZldGNoUXVlc3Rpb25zIiwicmVzcG9uc2UiLCJnZXQiLCJwcm9jZXNzIiwiZW52IiwiU0VSVkVSX1VSTCIsImRhdGEiLCJlcnIiLCJyZWZyZXNoUXVlc3Rpb25zIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImlucHV0IiwidHlwZSIsImlkIiwibGFiZWwiLCJmb3IiLCJtYXAiLCJxdWVzdGlvbiIsInRpdGxlIiwicXVlc3Rpb25fdGV4dCIsImRhdGUiLCJhbnN3ZXJzQW1vdW50IiwiYW5zd2VycyIsImxlbmd0aCIsImFza2VyX2lkIiwidXNlcl9pZCIsInF1ZXN0aW9uX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/organisms/CardsWrapper/CardsWrapper.jsx\n"));

/***/ })

});