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

/***/ "./components/atoms/CardDetails/CardDetails.jsx":
/*!******************************************************!*\
  !*** ./components/atoms/CardDetails/CardDetails.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CardDetails_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardDetails.module.css */ \"./components/atoms/CardDetails/CardDetails.module.css\");\n/* harmony import */ var _CardDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CardDetails_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/user */ \"./api/user.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CardDetails = (param)=>{\n    let { date, answersAmount, asker_id } = param;\n    _s();\n    // apkarpau datą\n    const dateArray = date.split(\" \");\n    const newDate = \"\".concat(dateArray[1], \" \").concat(dateArray[2], \", \").concat(dateArray[3], \" \");\n    //\n    // gautą id įdedu į funkciją, kuri par'fetch'ina ir return'ina username'ą, kurį set'inu ir panaudoju kortelėje\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"anonymous\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUsername = async ()=>{\n            const fetchedUsername = await (0,_api_user__WEBPACK_IMPORTED_MODULE_3__.getUsernameById)(asker_id);\n            setUsername(fetchedUsername);\n        };\n        fetchUsername();\n    }, [\n        asker_id\n    ]);\n    //\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CardDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: username\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\CardDetails\\\\CardDetails.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \",\n                    newDate\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\CardDetails\\\\CardDetails.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"answers: \",\n                    answersAmount\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\CardDetails\\\\CardDetails.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\atoms\\\\CardDetails\\\\CardDetails.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardDetails, \"6yUrMDMmHnio2qFgD9QCByvdLJw=\");\n_c = CardDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardDetails);\nvar _c;\n$RefreshReg$(_c, \"CardDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL0NhcmREZXRhaWxzL0NhcmREZXRhaWxzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBQ0U7QUFDTTtBQUVwRCxNQUFNSSxjQUFjO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxhQUFhLEVBQUVDLFFBQVEsRUFBRTs7SUFDcEQsZ0JBQWdCO0lBQ2hCLE1BQU1DLFlBQVlILEtBQUtJLEtBQUssQ0FBQztJQUM3QixNQUFNQyxVQUFVLEdBQW1CRixPQUFoQkEsU0FBUyxDQUFDLEVBQUUsRUFBQyxLQUFvQkEsT0FBakJBLFNBQVMsQ0FBQyxFQUFFLEVBQUMsTUFBaUIsT0FBYkEsU0FBUyxDQUFDLEVBQUUsRUFBQztJQUNqRSxFQUFFO0lBQ0YsOEdBQThHO0lBQzlHLE1BQU0sQ0FBQ0csVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN6Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxnQkFBZ0I7WUFDcEIsTUFBTUMsa0JBQWtCLE1BQU1YLDBEQUFlQSxDQUFDSTtZQUM5Q0ssWUFBWUU7UUFDZDtRQUNBRDtJQUNGLEdBQUc7UUFBQ047S0FBUztJQUNiLEVBQUU7SUFDRixxQkFDRSw4REFBQ1E7UUFBSUMsV0FBV2QscUVBQVc7OzBCQUN6Qiw4REFBQ2dCOztrQ0FDQyw4REFBQ0M7a0NBQU1SOzs7Ozs7b0JBQWdCO29CQUFFRDs7Ozs7OzswQkFFM0IsOERBQUNROztvQkFBRTtvQkFBVVo7Ozs7Ozs7Ozs7Ozs7QUFHbkI7R0F2Qk1GO0tBQUFBO0FBeUJOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXRvbXMvQ2FyZERldGFpbHMvQ2FyZERldGFpbHMuanN4Pzk0YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhcmREZXRhaWxzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgZ2V0VXNlcm5hbWVCeUlkIH0gZnJvbSBcIi4uLy4uLy4uL2FwaS91c2VyXCI7XHJcblxyXG5jb25zdCBDYXJkRGV0YWlscyA9ICh7IGRhdGUsIGFuc3dlcnNBbW91bnQsIGFza2VyX2lkIH0pID0+IHtcclxuICAvLyBhcGthcnBhdSBkYXTEhVxyXG4gIGNvbnN0IGRhdGVBcnJheSA9IGRhdGUuc3BsaXQoXCIgXCIpO1xyXG4gIGNvbnN0IG5ld0RhdGUgPSBgJHtkYXRlQXJyYXlbMV19ICR7ZGF0ZUFycmF5WzJdfSwgJHtkYXRlQXJyYXlbM119IGA7XHJcbiAgLy9cclxuICAvLyBnYXV0xIUgaWQgxK9kZWR1IMSvIGZ1bmtjaWrEhSwga3VyaSBwYXInZmV0Y2gnaW5hIGlyIHJldHVybidpbmEgdXNlcm5hbWUnxIUsIGt1csSvIHNldCdpbnUgaXIgcGFuYXVkb2p1IGtvcnRlbMSXamVcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiYW5vbnltb3VzXCIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFVzZXJuYW1lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBmZXRjaGVkVXNlcm5hbWUgPSBhd2FpdCBnZXRVc2VybmFtZUJ5SWQoYXNrZXJfaWQpO1xyXG4gICAgICBzZXRVc2VybmFtZShmZXRjaGVkVXNlcm5hbWUpO1xyXG4gICAgfTtcclxuICAgIGZldGNoVXNlcm5hbWUoKTtcclxuICB9LCBbYXNrZXJfaWRdKTtcclxuICAvL1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8cD5cclxuICAgICAgICA8c3Bhbj57dXNlcm5hbWV9PC9zcGFuPiB7bmV3RGF0ZX1cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5hbnN3ZXJzOiB7YW5zd2Vyc0Ftb3VudH08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZERldGFpbHM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsImdldFVzZXJuYW1lQnlJZCIsIkNhcmREZXRhaWxzIiwiZGF0ZSIsImFuc3dlcnNBbW91bnQiLCJhc2tlcl9pZCIsImRhdGVBcnJheSIsInNwbGl0IiwibmV3RGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJmZXRjaFVzZXJuYW1lIiwiZmV0Y2hlZFVzZXJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsInAiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/atoms/CardDetails/CardDetails.jsx\n"));

/***/ })

});