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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CardsWrapper_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardsWrapper.module.css */ \"./components/organisms/CardsWrapper/CardsWrapper.module.css\");\n/* harmony import */ var _CardsWrapper_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CardsWrapper_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _molecules_Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules/Card/Card */ \"./components/molecules/Card/Card.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst CardsWrapper = ()=>{\n    _s();\n    const [questions, setQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [FilteredQuestions, setFilteredQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [isAnswered, setAnswered] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        console.log(\"hello\");\n    }, []);\n    const fetchQuestions = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(\"http://www.localhost:3220\", \"/questions\"));\n            setQuestions(response.data.questions);\n        } catch (err) {\n            console.log(\"error:\", err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchQuestions();\n    }, []);\n    const refreshQuestions = async ()=>{\n        console.log(\"heelo\");\n        await fetchQuestions();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CardsWrapper_module_css__WEBPACK_IMPORTED_MODULE_1___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        id: \"myCheckbox\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"myCheckbox\",\n                        children: \"Only answered questions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            questions && questions.map((question)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_Card_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    refreshQuestions: refreshQuestions,\n                    title: question.question_text,\n                    date: question.date,\n                    answersAmount: question.answers.length,\n                    asker_id: question.user_id,\n                    question_id: question.id\n                }, question.id, false, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardsWrapper, \"WOsxvbfBDkxmFGZg4nnlzBqIkSs=\");\n_c = CardsWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardsWrapper);\nvar _c;\n$RefreshReg$(_c, \"CardsWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkc1dyYXBwZXIvQ2FyZHNXcmFwcGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQztBQUNGO0FBQ0Q7QUFDbEI7QUFFMUIsTUFBTUssZUFBZTs7SUFDbkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0MsTUFBTSxDQUFDSyxtQkFBbUJDLHFCQUFxQixHQUFHTiwrQ0FBUUE7SUFDMUQsTUFBTSxDQUFDTyxZQUFZQyxZQUFZLEdBQUdSLCtDQUFRQTtJQUMxQ0QsZ0RBQVNBLENBQUM7UUFDUlUsUUFBUUMsR0FBRyxDQUFDO0lBQ2QsR0FBRyxFQUFFO0lBRUwsTUFBTUMsaUJBQWlCO1FBQ3JCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1YLGlEQUFTLENBQUMsR0FBMEIsT0FBdkJhLDJCQUFzQixFQUFDO1lBQzNEVixhQUFhUSxTQUFTSyxJQUFJLENBQUNkLFNBQVM7UUFDdEMsRUFBRSxPQUFPZSxLQUFLO1lBQ1pULFFBQVFDLEdBQUcsQ0FBQyxVQUFVUTtRQUN4QjtJQUNGO0lBQ0FuQixnREFBU0EsQ0FBQztRQUNSWTtJQUNGLEdBQUcsRUFBRTtJQUNMLE1BQU1RLG1CQUFtQjtRQUN2QlYsUUFBUUMsR0FBRyxDQUFDO1FBQ1osTUFBTUM7SUFDUjtJQUNBLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFXeEIsc0VBQVc7OzBCQUN6Qiw4REFBQ3VCOztrQ0FDQyw4REFBQ0c7d0JBQU1DLE1BQUs7d0JBQVdDLElBQUc7Ozs7OztrQ0FDMUIsOERBQUNDO3dCQUFNQyxTQUFRO2tDQUFhOzs7Ozs7Ozs7Ozs7WUFFN0J4QixhQUNDQSxVQUFVeUIsR0FBRyxDQUFDLENBQUNDO2dCQUNiLHFCQUNFLDhEQUFDL0IsNERBQUlBO29CQUVIcUIsa0JBQWtCQTtvQkFDbEJXLE9BQU9ELFNBQVNFLGFBQWE7b0JBQzdCQyxNQUFNSCxTQUFTRyxJQUFJO29CQUNuQkMsZUFBZUosU0FBU0ssT0FBTyxDQUFDQyxNQUFNO29CQUN0Q0MsVUFBVVAsU0FBU1EsT0FBTztvQkFDMUJDLGFBQWFULFNBQVNKLEVBQUU7bUJBTm5CSSxTQUFTSixFQUFFOzs7OztZQVN0Qjs7Ozs7OztBQUdSO0dBN0NNdkI7S0FBQUE7QUErQ04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZHNXcmFwcGVyL0NhcmRzV3JhcHBlci5qc3g/ODU3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhcmRzV3JhcHBlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi9tb2xlY3VsZXMvQ2FyZC9DYXJkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgQ2FyZHNXcmFwcGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW0ZpbHRlcmVkUXVlc3Rpb25zLCBzZXRGaWx0ZXJlZFF1ZXN0aW9uc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpc0Fuc3dlcmVkLCBzZXRBbnN3ZXJlZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hRdWVzdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5TRVJWRVJfVVJMfS9xdWVzdGlvbnNgKTtcclxuICAgICAgc2V0UXVlc3Rpb25zKHJlc3BvbnNlLmRhdGEucXVlc3Rpb25zKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yOlwiLCBlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUXVlc3Rpb25zKCk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHJlZnJlc2hRdWVzdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlZWxvXCIpO1xyXG4gICAgYXdhaXQgZmV0Y2hRdWVzdGlvbnMoKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIm15Q2hlY2tib3hcIj48L2lucHV0PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibXlDaGVja2JveFwiPk9ubHkgYW5zd2VyZWQgcXVlc3Rpb25zPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtxdWVzdGlvbnMgJiZcclxuICAgICAgICBxdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICBrZXk9e3F1ZXN0aW9uLmlkfVxyXG4gICAgICAgICAgICAgIHJlZnJlc2hRdWVzdGlvbnM9e3JlZnJlc2hRdWVzdGlvbnN9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3F1ZXN0aW9uLnF1ZXN0aW9uX3RleHR9XHJcbiAgICAgICAgICAgICAgZGF0ZT17cXVlc3Rpb24uZGF0ZX1cclxuICAgICAgICAgICAgICBhbnN3ZXJzQW1vdW50PXtxdWVzdGlvbi5hbnN3ZXJzLmxlbmd0aH1cclxuICAgICAgICAgICAgICBhc2tlcl9pZD17cXVlc3Rpb24udXNlcl9pZH1cclxuICAgICAgICAgICAgICBxdWVzdGlvbl9pZD17cXVlc3Rpb24uaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRzV3JhcHBlcjtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkNhcmQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQ2FyZHNXcmFwcGVyIiwicXVlc3Rpb25zIiwic2V0UXVlc3Rpb25zIiwiRmlsdGVyZWRRdWVzdGlvbnMiLCJzZXRGaWx0ZXJlZFF1ZXN0aW9ucyIsImlzQW5zd2VyZWQiLCJzZXRBbnN3ZXJlZCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaFF1ZXN0aW9ucyIsInJlc3BvbnNlIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIlNFUlZFUl9VUkwiLCJkYXRhIiwiZXJyIiwicmVmcmVzaFF1ZXN0aW9ucyIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJpbnB1dCIsInR5cGUiLCJpZCIsImxhYmVsIiwiaHRtbEZvciIsIm1hcCIsInF1ZXN0aW9uIiwidGl0bGUiLCJxdWVzdGlvbl90ZXh0IiwiZGF0ZSIsImFuc3dlcnNBbW91bnQiLCJhbnN3ZXJzIiwibGVuZ3RoIiwiYXNrZXJfaWQiLCJ1c2VyX2lkIiwicXVlc3Rpb25faWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/organisms/CardsWrapper/CardsWrapper.jsx\n"));

/***/ })

});