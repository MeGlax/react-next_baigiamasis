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

/***/ "./components/molecules/Navbar/Navbar.jsx":
/*!************************************************!*\
  !*** ./components/molecules/Navbar/Navbar.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.module.css */ \"./components/molecules/Navbar/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_navbarItemsNotLoggedIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/navbarItemsNotLoggedIn */ \"./data/navbarItemsNotLoggedIn.js\");\n\n\n\n\n\nconst Navbar = (param)=>{\n    let { isLoggedIn } = param;\n    const navItems = isLoggedIn ? _data_navbarItemsNotLoggedIn__WEBPACK_IMPORTED_MODULE_3__.navbarItemsLoggedIn : _data_navbarItemsNotLoggedIn__WEBPACK_IMPORTED_MODULE_3__.navbarItemsNotLoggedIn;\n    const nesamone = ()=>{\n        console.log(\"nesamone\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                navItems.map((item)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: item.link,\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 15\n                        }, undefined)\n                    }, item.id, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, undefined);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    onClick: ()=>{\n                        nesamone();\n                    },\n                    children: \"bibys\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\Navbar\\\\Navbar.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\Navbar\\\\Navbar.jsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\Navbar\\\\Navbar.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcy9OYXZiYXIvTmF2YmFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDZTtBQUNxQztBQUNIO0FBRTNFLE1BQU1JLFNBQVM7UUFBQyxFQUFFQyxVQUFVLEVBQUU7SUFDNUIsTUFBTUMsV0FBV0QsYUFBYUYsNkVBQW1CQSxHQUFHRCxnRkFBc0JBO0lBQzFFLE1BQU1LLFdBQVc7UUFDZkMsUUFBUUMsR0FBRyxDQUFDO0lBQ2Q7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV1YsZ0VBQVc7a0JBQ3pCLDRFQUFDWTs7Z0JBQ0VQLFNBQVNRLEdBQUcsQ0FBQyxDQUFDQztvQkFDYixxQkFDRSw4REFBQ0M7a0NBQ0MsNEVBQUNDOzRCQUFFQyxNQUFNSCxLQUFLSSxJQUFJO3NDQUFHSixLQUFLSyxLQUFLOzs7Ozs7dUJBRHhCTCxLQUFLTSxFQUFFOzs7OztnQkFJcEI7OEJBQ0EsOERBQUNMO29CQUNDTSxTQUFTO3dCQUNQZjtvQkFDRjs4QkFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtLQXpCTUg7QUEyQk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvTmF2YmFyL05hdmJhci5qc3g/ZGJjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTmF2YmFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgbmF2YmFySXRlbXNOb3RMb2dnZWRJbiB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL25hdmJhckl0ZW1zTm90TG9nZ2VkSW5cIjtcclxuaW1wb3J0IHsgbmF2YmFySXRlbXNMb2dnZWRJbiB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL25hdmJhckl0ZW1zTm90TG9nZ2VkSW5cIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7IGlzTG9nZ2VkSW4gfSkgPT4ge1xyXG4gIGNvbnN0IG5hdkl0ZW1zID0gaXNMb2dnZWRJbiA/IG5hdmJhckl0ZW1zTG9nZ2VkSW4gOiBuYXZiYXJJdGVtc05vdExvZ2dlZEluO1xyXG4gIGNvbnN0IG5lc2Ftb25lID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJuZXNhbW9uZVwiKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge25hdkl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5saW5rfT57aXRlbS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxsaVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBuZXNhbW9uZSgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBiaWJ5c1xyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJuYXZiYXJJdGVtc05vdExvZ2dlZEluIiwibmF2YmFySXRlbXNMb2dnZWRJbiIsIk5hdmJhciIsImlzTG9nZ2VkSW4iLCJuYXZJdGVtcyIsIm5lc2Ftb25lIiwiY29uc29sZSIsImxvZyIsIm5hdiIsImNsYXNzTmFtZSIsIm1haW4iLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsImEiLCJocmVmIiwibGluayIsInRpdGxlIiwiaWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/molecules/Navbar/Navbar.jsx\n"));

/***/ })

});