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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CardsWrapper_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardsWrapper.module.css */ \"./components/organisms/CardsWrapper/CardsWrapper.module.css\");\n/* harmony import */ var _CardsWrapper_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CardsWrapper_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _molecules_Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules/Card/Card */ \"./components/molecules/Card/Card.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst CardsWrapper = ()=>{\n    _s();\n    const [questions, setQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [FilteredQuestions, setFilteredQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [isAnswered, setAnswered] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setFilteredQuestions(questions.filter((question)=>{\n            return question.answers.length > 0;\n        }));\n        console.log(FilteredQuestions);\n    }, [\n        questions\n    ]);\n    const fetchQuestions = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(\"http://www.localhost:3220\", \"/questions\"));\n            setQuestions(response.data.questions);\n        } catch (err) {\n            console.log(\"error:\", err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchQuestions();\n    }, []);\n    const refreshQuestions = async ()=>{\n        console.log(\"heelo\");\n        await fetchQuestions();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CardsWrapper_module_css__WEBPACK_IMPORTED_MODULE_1___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            questions && !isAnswered && questions.map((question)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_Card_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    refreshQuestions: refreshQuestions,\n                    title: question.question_text,\n                    date: question.date,\n                    answersAmount: question.answers.length,\n                    asker_id: question.user_id,\n                    question_id: question.id\n                }, question.id, false, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, undefined);\n            }),\n            FilteredQuestions && isAnswered && FilteredQuestions.map((question)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_Card_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    refreshQuestions: refreshQuestions,\n                    title: question.question_text,\n                    date: question.date,\n                    answersAmount: question.answers.length,\n                    asker_id: question.user_id,\n                    question_id: question.id\n                }, question.id, false, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 13\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\organisms\\\\CardsWrapper\\\\CardsWrapper.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardsWrapper, \"NKYbHnUtocEKG/5il208celnu3k=\");\n_c = CardsWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardsWrapper);\nvar _c;\n$RefreshReg$(_c, \"CardsWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkc1dyYXBwZXIvQ2FyZHNXcmFwcGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQztBQUNGO0FBQ0Q7QUFDbEI7QUFFMUIsTUFBTUssZUFBZTs7SUFDbkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0MsTUFBTSxDQUFDSyxtQkFBbUJDLHFCQUFxQixHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdELE1BQU0sQ0FBQ08sWUFBWUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUUzQ0QsZ0RBQVNBLENBQUM7UUFDUk8scUJBQ0VILFVBQVVNLE1BQU0sQ0FBQyxDQUFDQztZQUNoQixPQUFPQSxTQUFTQyxPQUFPLENBQUNDLE1BQU0sR0FBRztRQUNuQztRQUVGQyxRQUFRQyxHQUFHLENBQUNUO0lBQ2QsR0FBRztRQUFDRjtLQUFVO0lBRWQsTUFBTVksaUJBQWlCO1FBQ3JCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1mLGlEQUFTLENBQUMsR0FBMEIsT0FBdkJpQiwyQkFBc0IsRUFBQztZQUMzRGQsYUFBYVksU0FBU0ssSUFBSSxDQUFDbEIsU0FBUztRQUN0QyxFQUFFLE9BQU9tQixLQUFLO1lBQ1pULFFBQVFDLEdBQUcsQ0FBQyxVQUFVUTtRQUN4QjtJQUNGO0lBQ0F2QixnREFBU0EsQ0FBQztRQUNSZ0I7SUFDRixHQUFHLEVBQUU7SUFDTCxNQUFNUSxtQkFBbUI7UUFDdkJWLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE1BQU1DO0lBQ1I7SUFDQSxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVzVCLHNFQUFXOzswQkFDekIsOERBQUMyQjswQkFDQyw0RUFBQ0c7Ozs7Ozs7Ozs7WUFFRnhCLGFBQ0MsQ0FBQ0ksY0FDREosVUFBVXlCLEdBQUcsQ0FBQyxDQUFDbEI7Z0JBQ2IscUJBQ0UsOERBQUNaLDREQUFJQTtvQkFFSHlCLGtCQUFrQkE7b0JBQ2xCTSxPQUFPbkIsU0FBU29CLGFBQWE7b0JBQzdCQyxNQUFNckIsU0FBU3FCLElBQUk7b0JBQ25CQyxlQUFldEIsU0FBU0MsT0FBTyxDQUFDQyxNQUFNO29CQUN0Q3FCLFVBQVV2QixTQUFTd0IsT0FBTztvQkFDMUJDLGFBQWF6QixTQUFTMEIsRUFBRTttQkFObkIxQixTQUFTMEIsRUFBRTs7Ozs7WUFTdEI7WUFDRC9CLHFCQUNDRSxjQUNBRixrQkFBa0J1QixHQUFHLENBQUMsQ0FBQ2xCO2dCQUNyQixxQkFDRSw4REFBQ1osNERBQUlBO29CQUVIeUIsa0JBQWtCQTtvQkFDbEJNLE9BQU9uQixTQUFTb0IsYUFBYTtvQkFDN0JDLE1BQU1yQixTQUFTcUIsSUFBSTtvQkFDbkJDLGVBQWV0QixTQUFTQyxPQUFPLENBQUNDLE1BQU07b0JBQ3RDcUIsVUFBVXZCLFNBQVN3QixPQUFPO29CQUMxQkMsYUFBYXpCLFNBQVMwQixFQUFFO21CQU5uQjFCLFNBQVMwQixFQUFFOzs7OztZQVN0Qjs7Ozs7OztBQUdSO0dBbEVNbEM7S0FBQUE7QUFvRU4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZHNXcmFwcGVyL0NhcmRzV3JhcHBlci5qc3g/ODU3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhcmRzV3JhcHBlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi9tb2xlY3VsZXMvQ2FyZC9DYXJkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgQ2FyZHNXcmFwcGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW0ZpbHRlcmVkUXVlc3Rpb25zLCBzZXRGaWx0ZXJlZFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzQW5zd2VyZWQsIHNldEFuc3dlcmVkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RmlsdGVyZWRRdWVzdGlvbnMoXHJcbiAgICAgIHF1ZXN0aW9ucy5maWx0ZXIoKHF1ZXN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHF1ZXN0aW9uLmFuc3dlcnMubGVuZ3RoID4gMDtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhGaWx0ZXJlZFF1ZXN0aW9ucyk7XHJcbiAgfSwgW3F1ZXN0aW9uc10pO1xyXG5cclxuICBjb25zdCBmZXRjaFF1ZXN0aW9ucyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LlNFUlZFUl9VUkx9L3F1ZXN0aW9uc2ApO1xyXG4gICAgICBzZXRRdWVzdGlvbnMocmVzcG9uc2UuZGF0YS5xdWVzdGlvbnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6XCIsIGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hRdWVzdGlvbnMoKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgcmVmcmVzaFF1ZXN0aW9ucyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVlbG9cIik7XHJcbiAgICBhd2FpdCBmZXRjaFF1ZXN0aW9ucygpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEJ1dHRvbiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3F1ZXN0aW9ucyAmJlxyXG4gICAgICAgICFpc0Fuc3dlcmVkICYmXHJcbiAgICAgICAgcXVlc3Rpb25zLm1hcCgocXVlc3Rpb24pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAga2V5PXtxdWVzdGlvbi5pZH1cclxuICAgICAgICAgICAgICByZWZyZXNoUXVlc3Rpb25zPXtyZWZyZXNoUXVlc3Rpb25zfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtxdWVzdGlvbi5xdWVzdGlvbl90ZXh0fVxyXG4gICAgICAgICAgICAgIGRhdGU9e3F1ZXN0aW9uLmRhdGV9XHJcbiAgICAgICAgICAgICAgYW5zd2Vyc0Ftb3VudD17cXVlc3Rpb24uYW5zd2Vycy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgYXNrZXJfaWQ9e3F1ZXN0aW9uLnVzZXJfaWR9XHJcbiAgICAgICAgICAgICAgcXVlc3Rpb25faWQ9e3F1ZXN0aW9uLmlkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAge0ZpbHRlcmVkUXVlc3Rpb25zICYmXHJcbiAgICAgICAgaXNBbnN3ZXJlZCAmJlxyXG4gICAgICAgIEZpbHRlcmVkUXVlc3Rpb25zLm1hcCgocXVlc3Rpb24pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAga2V5PXtxdWVzdGlvbi5pZH1cclxuICAgICAgICAgICAgICByZWZyZXNoUXVlc3Rpb25zPXtyZWZyZXNoUXVlc3Rpb25zfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtxdWVzdGlvbi5xdWVzdGlvbl90ZXh0fVxyXG4gICAgICAgICAgICAgIGRhdGU9e3F1ZXN0aW9uLmRhdGV9XHJcbiAgICAgICAgICAgICAgYW5zd2Vyc0Ftb3VudD17cXVlc3Rpb24uYW5zd2Vycy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgYXNrZXJfaWQ9e3F1ZXN0aW9uLnVzZXJfaWR9XHJcbiAgICAgICAgICAgICAgcXVlc3Rpb25faWQ9e3F1ZXN0aW9uLmlkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkc1dyYXBwZXI7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJDYXJkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkNhcmRzV3JhcHBlciIsInF1ZXN0aW9ucyIsInNldFF1ZXN0aW9ucyIsIkZpbHRlcmVkUXVlc3Rpb25zIiwic2V0RmlsdGVyZWRRdWVzdGlvbnMiLCJpc0Fuc3dlcmVkIiwic2V0QW5zd2VyZWQiLCJmaWx0ZXIiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hRdWVzdGlvbnMiLCJyZXNwb25zZSIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJTRVJWRVJfVVJMIiwiZGF0YSIsImVyciIsInJlZnJlc2hRdWVzdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiQnV0dG9uIiwibWFwIiwidGl0bGUiLCJxdWVzdGlvbl90ZXh0IiwiZGF0ZSIsImFuc3dlcnNBbW91bnQiLCJhc2tlcl9pZCIsInVzZXJfaWQiLCJxdWVzdGlvbl9pZCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/organisms/CardsWrapper/CardsWrapper.jsx\n"));

/***/ })

});