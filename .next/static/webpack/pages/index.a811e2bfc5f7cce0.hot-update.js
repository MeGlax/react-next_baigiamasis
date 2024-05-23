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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.module.css */ \"./components/molecules/Navbar/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_navbarItemsNotLoggedIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/navbarItemsNotLoggedIn */ \"./data/navbarItemsNotLoggedIn.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\n\n\n\n\n\nconst Navbar = (param)=>{\n    let { isLoggedIn } = param;\n    const navItems = isLoggedIn ? _data_navbarItemsNotLoggedIn__WEBPACK_IMPORTED_MODULE_3__.navbarItemsLoggedIn : _data_navbarItemsNotLoggedIn__WEBPACK_IMPORTED_MODULE_3__.navbarItemsNotLoggedIn;\n    const logout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].remove(\"jwt_token\");\n        window.location.reload();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                navItems.map((item)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: item.link,\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 15\n                        }, undefined)\n                    }, item.id, false, {\n                        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, undefined);\n                }),\n                isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    onClick: ()=>{\n                        logout();\n                    },\n                    children: \"Log Out\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\Navbar\\\\Navbar.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/login\",\n                                children: \"Log in\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/register\",\n                                children: \"Register\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\Navbar\\\\Navbar.jsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Darbo\\\\Desktop\\\\type20\\\\react-node-baigiamasis\\\\frontend\\\\components\\\\molecules\\\\Navbar\\\\Navbar.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcy9OYXZiYXIvTmF2YmFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ2U7QUFDcUM7QUFDSDtBQUM1QztBQUUvQixNQUFNSyxTQUFTO1FBQUMsRUFBRUMsVUFBVSxFQUFFO0lBQzVCLE1BQU1DLFdBQVdELGFBQWFILDZFQUFtQkEsR0FBR0QsZ0ZBQXNCQTtJQUMxRSxNQUFNTSxTQUFTO1FBQ2JKLHdEQUFhLENBQUM7UUFDZE0sT0FBT0MsUUFBUSxDQUFDQyxNQUFNO0lBQ3hCO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdiLGdFQUFXO2tCQUN6Qiw0RUFBQ2U7O2dCQUNFVCxTQUFTVSxHQUFHLENBQUMsQ0FBQ0M7b0JBQ2IscUJBQ0UsOERBQUNDO2tDQUNDLDRFQUFDQzs0QkFBRUMsTUFBTUgsS0FBS0ksSUFBSTtzQ0FBR0osS0FBS0ssS0FBSzs7Ozs7O3VCQUR4QkwsS0FBS00sRUFBRTs7Ozs7Z0JBSXBCO2dCQUNDbEIsMkJBQ0MsOERBQUNhO29CQUNDTSxTQUFTO3dCQUNQakI7b0JBQ0Y7OEJBQ0Q7Ozs7OzhDQUlEOztzQ0FDRSw4REFBQ1c7c0NBQ0MsNEVBQUNDO2dDQUFFQyxNQUFLOzBDQUFTOzs7Ozs7Ozs7OztzQ0FFbkIsOERBQUNGO3NDQUNDLDRFQUFDQztnQ0FBRUMsTUFBSzswQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xDO0tBckNNaEI7QUF1Q04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvTmF2YmFyL05hdmJhci5qc3g/ZGJjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTmF2YmFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgbmF2YmFySXRlbXNOb3RMb2dnZWRJbiB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL25hdmJhckl0ZW1zTm90TG9nZ2VkSW5cIjtcclxuaW1wb3J0IHsgbmF2YmFySXRlbXNMb2dnZWRJbiB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL25hdmJhckl0ZW1zTm90TG9nZ2VkSW5cIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoeyBpc0xvZ2dlZEluIH0pID0+IHtcclxuICBjb25zdCBuYXZJdGVtcyA9IGlzTG9nZ2VkSW4gPyBuYXZiYXJJdGVtc0xvZ2dlZEluIDogbmF2YmFySXRlbXNOb3RMb2dnZWRJbjtcclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBjb29raWUucmVtb3ZlKFwiand0X3Rva2VuXCIpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bmF2SXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLmxpbmt9PntpdGVtLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAge2lzTG9nZ2VkSW4gPyAoXHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxvZ291dCgpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb2cgT3V0XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9sb2dpblwiPkxvZyBpbjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvcmVnaXN0ZXJcIj5SZWdpc3RlcjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJuYXZiYXJJdGVtc05vdExvZ2dlZEluIiwibmF2YmFySXRlbXNMb2dnZWRJbiIsImNvb2tpZSIsIk5hdmJhciIsImlzTG9nZ2VkSW4iLCJuYXZJdGVtcyIsImxvZ291dCIsInJlbW92ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwibmF2IiwiY2xhc3NOYW1lIiwibWFpbiIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwiYSIsImhyZWYiLCJsaW5rIiwidGl0bGUiLCJpZCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/molecules/Navbar/Navbar.jsx\n"));

/***/ })

});